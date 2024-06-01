import { fetchDataAndInitializeSwiper } from '../js/reviews/reviews-api.js';
import { createMarkupReview } from '../js/reviews/render-functions.js';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const list = document.querySelector('#review-swiper-list');

export const initializeSwiper = async () => {
  try {
    const data = await fetchDataAndInitializeSwiper();
    const markup = createMarkupReview(data);

    if (!markup) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, reviews not found.',
        position: 'bottomLeft',
      });
      return;
    }
    list.insertAdjacentHTML('beforeend', markup);

    const swiper3 = new Swiper('#swiper3', {
      direction: 'horizontal',
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
      },
      navigation: {
        nextEl: '.btn-next-review-wrapper btn-custom-next',
        prevEl: '.btn-prev-review-wrapper btn-custom-prev',
      },
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Error while fetching reviews from server',
      position: 'bottomLeft',
    });
  }
};

export function initReviewsSection() {
  initializeSwiper();
}
