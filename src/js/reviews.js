
import { fetchDataAndInitializeSwiper } from './reviews/reviews-api';

export function initReviewsSection() {
  async function initializeSwiper() {
     await fetchDataAndInitializeSwiper();
  }

  initializeSwiper();
}