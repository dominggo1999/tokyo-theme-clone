import { combineReducers } from 'redux';
import testimonialReducer from './testimonial/testimonialReducer';
import lightboxReducer from './lightbox/lightboxReducer';

export default combineReducers({
  lightbox: lightboxReducer,
});
