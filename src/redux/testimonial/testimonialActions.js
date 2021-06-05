import { testimonialActionTypes } from './testimonialActionTypes';

export const testimonialNext = (testimonials) => ({
  type: testimonialActionTypes.TESTIMONIAL_NEXT,
  array: testimonials,
});

export const testimonialPrev = (testimonials) => ({
  type: testimonialActionTypes.TESTIMONIAL_PREV,
  array: testimonials,
});
