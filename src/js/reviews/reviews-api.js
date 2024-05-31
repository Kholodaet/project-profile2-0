// запити 
import Swiper from 'swiper';
import 'swiper/css/bundle';
import { createMarkupReview } from './render-functions';

const URL = 'https://portfolio-js.b.goit.study/api/reviews';
const list = document.querySelector('#review-swiper-list');

const fetchDataAndInitializeSwiper = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const markup = createMarkupReview(data);
    if (!markup) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, reviews not found.',
        position: 'bottomLeft',
      });
    }
    list.insertAdjacentHTML('beforeend', markup);

    const swiper3 = new Swiper('#swiper3', {
      direction: 'horizontal',

      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 18,
        },
      },
      navigation: {
        nextEl: '.btn-next-review',
        prevEl: '.btn-prev-review',
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

export { fetchDataAndInitializeSwiper };

// import axios from "axios";

// const API_KEY = '43820023-fa202629be5215ad836dbfc98';
// const API_URL = 'https://pixabay.com/api/';

// export const fetchData = async (queryString, page) => {
//   const searchParams = await axios.get(API_URL, {
//     params: {
//       key: API_KEY,
//       q: queryString,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       page: page,
//       per_page: 15,
//     },
//   });

//   return searchParams;

// };