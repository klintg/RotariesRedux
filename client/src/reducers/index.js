import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import cars from './cars';
import filestack from './filestack';

export default combineReducers({
  cars,
  form,
  filestack
});
