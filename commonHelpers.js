import{a as f,i as d,S as w,A as m}from"./assets/vendor-55288c14.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const h="https://portfolio-js.b.goit.study/api/reviews",y=async()=>{try{const r=await f.get(h);if(r.status!==200)throw new Error(r.status);return r.data}catch{throw new Error(iziToast.error({message:msg,class:"error-notification",timeout:5e3,titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0}))}},v=r=>r.map(({_id:t,avatar_url:i,author:n,review:e})=>`<li class="review-card swiper-slide" id="${t}">
            <p class="review-card-text">${e}</p>
            <div class="review-card-author">
             <img class="review-card-author-avata" src="${i}" alt="${n}" alt="review author photo" width="40" height="40" loading="lazy">
              <p class="review-card-author-name">${n}</p>
           </div>
         </li>`).join(""),g=document.querySelector("#review-swiper-list"),b=async()=>{try{const r=await y(),t=v(r);if(!t){d.error({title:"Error",message:"Sorry, reviews not found.",position:"bottomLeft"});return}g.insertAdjacentHTML("beforeend",t);const i=new w("#swiper3",{direction:"horizontal",keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{768:{slidesPerView:1,spaceBetween:16},1280:{slidesPerView:2,spaceBetween:18}},navigation:{nextEl:".btn-next-review-wrapper btn-custom-next",prevEl:".btn-prev-review-wrapper btn-custom-prev"}})}catch{d.error({title:"Error",message:"Error while fetching reviews from server",position:"bottomLeft"})}};function u(){b()}const c=document.querySelectorAll(".li-projects"),p=document.querySelector(".load-more");let s=3;function l(r,t){for(let i=r;i<t&&i<c.length;i+=1)c[i].style.display="block"}c.forEach((r,t)=>{t>=s&&(r.style.display="none")});l(0,s);p.addEventListener("click",function(){l(s,s+3),s+=3,s>=c.length&&(p.style.display="none"),window.scrollTo({top:window.scrollY+700,behavior:"smooth"})});function E(){new m(".accordion-container",{openOnInit:[0]})}u();l();u();E();
//# sourceMappingURL=commonHelpers.js.map
