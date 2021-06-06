import { lightboxActionTypes } from './lightboxActionTypes';

const INITIAL_STATE = {
  type: '',
  show: false,
  src: '',
};

const lightboxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case lightboxActionTypes.SHOW_LIGHTBOX:
      return {
        type: action.options.type,
        src: action.options.src,
        show: true,
      };
    case lightboxActionTypes.HIDE_LIGHTBOX:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default lightboxReducer;
