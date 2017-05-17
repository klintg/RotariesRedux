import {
  GET_CARS,
  GET_CARS_SUCCESS,
  GET_CARS_FAILURE,
  SET_SEARCH_BAR,
  SHOW_SELECTED_CAR,

  DELETE_CAR,
  DELETE_CAR_SUCCESS,
  DELETE_CAR_FAILURE,

  POST_CAR,
  POST_CAR_SUCCESS,
  POST_CAR_FAILURE
} from '../constants/cars';


function getCars() {
  return {
    type: GET_CARS
  };
}

// we fetch from the server and dispatch this action
function getCarsSuccess(cars) {
  return {
    type: GET_CARS_SUCCESS,
    cars,
  };
}

// if the fetch fails we send an action.
function getCarsFailure() {
  return {
    type: GET_CARS_FAILURE,
  };
}

function setSearchBar(keyword) {
  return {
    type: SET_SEARCH_BAR,
    keyword,
  };
}

function showSelectedCar(car) {
  return {
    type: SHOW_SELECTED_CAR,
    car
  };
}

function deleteCar() {
  return {
    type: DELETE_CAR
  };
}

function deleteCarSuccess(cars) {
  return {
    type: DELETE_CAR_SUCCESS,
    cars
  };
}

function deleteCarFailure() {
  return {
    type: DELETE_CAR_FAILURE
  };
}

function postCar() {
  return {
    type: POST_CAR
  };
}

function postCarSuccess() {
  return {
    type: POST_CAR_SUCCESS
  };
}

function postCarFailure() {
  return {
    type: POST_CAR_FAILURE
  }
}

export {
  getCars,
  getCarsSuccess,
  getCarsFailure,
  setSearchBar,
  showSelectedCar,
  deleteCar,
  deleteCarSuccess,
  deleteCarFailure,
  postCar,
  postCarSuccess,
  postCarFailure
}
