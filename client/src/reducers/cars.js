import Immutable from 'immutable';
import {
  GET_CARS_SUCCESS,
  GET_CARS_FAILURE,
  SET_SEARCH_BAR,
  SHOW_SELECTED_CAR,
  DELETE_CAR_SUCCESS,
  DELETE_CAR_FAILURE,
} from '../constants/cars';

// initial state is just an empty map.
const initialState = Immutable.Map();

export default(state = initialState, action) => {
  switch(action.type) {
    // since all cases share the same behavior
    case DELETE_CAR_SUCCESS:
    case GET_CARS_SUCCESS: {
      return state.merge({ list: action.cars})
    }

    case SET_SEARCH_BAR: {
      return state.merge({ searchBar: action.keyword });
    }

    case SHOW_SELECTED_CAR: {
      return state.merge({ selectedCar: action.car });
    }

    // THEY BOTH CLEAR THE STATE.
    case DELETE_CAR_FAILURE:
    case GET_CARS_FAILURE: {
      return state.clear();
    }

    default:
      return state;
  }
}
