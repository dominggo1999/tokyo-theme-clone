import { combineReducers } from 'redux';
import testimonialReducer from './testimonial/testimonialReducer';

export default combineReducers({
  testimonial: testimonialReducer,
});
