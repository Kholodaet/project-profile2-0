export const createMarkupReview = reviews => {
  return reviews 
    .map(
      ({ _id, avatar_url, author, review  }) => {
        return (
          `<li class="reviews-list-item swiper-slide" id="${_id}">
            <p class="review">${review}</p>
            <div class="opinion">
             <img class="thumbnail" src="${avatar_url}" alt="${author}" width="48" height="48" loading="lazy">
              <h3 class="author">${author}</h3>
           </div>
         </li>`
        );
     }
    ).join('');
}