import{S as c,A as a}from"./assets/vendor-e9649e71.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l=r=>r.map(({_id:i,avatar_url:o,author:s,review:e})=>`<li class="reviews-list-item swiper-slide" id="${i}">
            <p class="review">${e}</p>
            <div class="opinion">
             <img class="thumbnail" src="${o}" alt="${s}" width="48" height="48" loading="lazy">
              <h3 class="author">${s}</h3>
           </div>
         </li>`).join(""),d="https://portfolio-js.b.goit.study/api/reviews",p=document.querySelector("#review-swiper-list"),f=async()=>{try{const r=await fetch(d);if(!r.ok)throw new Error("Network response was not ok");const i=await r.json(),o=l(i);o||iziToast.error({title:"Error",message:"Sorry, reviews not found.",position:"bottomLeft"}),p.insertAdjacentHTML("beforeend",o);const s=new c("#swiper3",{direction:"horizontal",breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{nextEl:".btn-next-review",prevEl:".btn-prev-review"}})}catch{iziToast.error({title:"Error",message:"Error while fetching reviews from server",position:"bottomLeft"})}};function u(){async function r(){await f()}r()}function w(){new a(".accordion-container",{openOnInit:[0]})}u();w();
//# sourceMappingURL=commonHelpers.js.map