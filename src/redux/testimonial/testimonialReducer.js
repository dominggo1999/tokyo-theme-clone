import { testimonialActionTypes } from './testimonialActionTypes';

const INITIAL_STATE = {
  position: 0,
};

const testimonialReducer = (state = INITIAL_STATE, action) => {
  let length;
  switch (action.type) {
    case testimonialActionTypes.TESTIMONIAL_NEXT:
      length = action.array.length;
      if(state.position === length - 1) {
        return {
          position: 0,
        };
      }
      return {
        position: state.position + 1,
      };
    case testimonialActionTypes.TESTIMONIAL_PREV:
      length = action.array.length;
      if(state.position === 0) {
        return {
          position: length - 1,
        };
      }
      return {
        position: state.position - 1,
      };
    default:
      return INITIAL_STATE;
  }
};

export default testimonialReducer;
