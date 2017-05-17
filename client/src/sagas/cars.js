import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { GET_CARS, DELETE_CAR, POST_CAR } from '../constants/cars';
import {
  getCarsSuccess,
  getCarsFailure,
  deleteCarSuccess,
  deleteCarFailure,
  postCarSuccess,
  postCarFailure
} from '../actions/cars';

// selector function to return the car list from the state.
const selectedRotarys = (state) => {
  return state.getIn(['cars', 'list']).toJS();
}

const selectedPicture = (state) => {
  return state.getIn(['filestack', 'url'], '');
}

const fetchRotarys = () => {
  return fetch('http://localhost:8080/games', {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(res => res.json())
};

const deleteServerRotary = (id) => {
  return fetch(`http://localhost:8080/games/${id}`, {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'DELETE'
  })
  .then(res => res.json());
}

const postServerRotary = (car) => {
  return fetch('http://localhost:8080/games', {
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    method: 'POST',
    body: JSON.stringify(car)
  })
  .then(res => res.json());
}

const getRotaryForm = (state) => {
  return state.getIn(['form', 'rotary']).toJS();
}

function* postRotary() {
  const picture = yield select(selectedPicture);
  const rotary = yield select(getRotaryForm);
  const newCar = Object.assign({}, { picture }, rotary.values);
  try {
    yield call(postServerRotary, newCar);
    yield put(postCarSuccess());
  } catch (e) {
    yield put(postCarFailure());
  }
}

function* getRotarys() {
  try {
    const cars = yield call(fetchRotarys);
    yield put(getCarsSuccess(cars));
  } catch(err) {
    yield put(getCarsFailure())
  }
}

function* deleteCar(action) {
  const { id } = action;
  const cars = yield select(selectedRotarys);     // we take cars fromt the state.
  try {
    yield call(deleteServerRotary, id);
    // the new state will contain the cars except for the deleted one.
    yield put(deleteCarSuccess(cars.filter(car => car._id !== id)));
  } catch(e) {
    yield put(deleteCarFailure());                // incase of error.
  }
}

// new watcher intercepts the action and run deleteCar.
function* watchDeleteRotarys() {
  yield takeLatest(DELETE_CAR, deleteCar);
}

function* watchGetRotarys() {
  yield takeLatest(GET_CARS, getRotarys);
}

function* watchPostRotary() {
  yield takeLatest(POST_CAR, postRotary);
}

export {
  watchGetRotarys,
  watchDeleteRotarys,
  watchPostRotary
};
