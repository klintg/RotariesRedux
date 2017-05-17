import Immutable from 'immutable';
import {
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_FAILURE
} from '../constants/filestack';

import {
  POST_CAR_SUCCESS,
  POST_CAR_FAILURE
} from '../constants/cars';

const initialState = Immutable.Map();

export default(state = initialState, action) => {
  switch(action.type) {
    case UPLOAD_PICTURE_SUCCESS: {
      return state.merge({ url: action.url });
    }

    case POST_CAR_SUCCESS:
    case POST_CAR_FAILURE:
    case UPLOAD_PICTURE_FAILURE: {
      return state.clear();
    }

    default:
      return state;
  }
}
