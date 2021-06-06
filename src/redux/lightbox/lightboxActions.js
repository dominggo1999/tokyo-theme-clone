import { lightboxActionTypes } from './lightboxActionTypes';

export const showLightbox = (options) => ({
  type: lightboxActionTypes.SHOW_LIGHTBOX,
  options,
});

export const hideLightbox = (options) => ({
  type: lightboxActionTypes.HIDE_LIGHTBOX,
});
