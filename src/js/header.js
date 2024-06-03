const refs = {
  mobileMenu: document.querySelector('.js-menu'),
  closeBtn: document.querySelector('.js-close-menu'),
  openBtn: document.querySelector('.js-open-menu'),

};
refs.closeBtn.addEventListener('click', toggleMenu);
refs.openBtn.addEventListener('click', toggleMenu);

export function toggleMenu() {
  refs.mobileMenu.classList.toggle('visually-hidden');
}

export function closeMenuOnClick() {
  const closeOnClickEls= document.querySelectorAll('.mobile-item')
    closeOnClickEls.forEach( element=> {
    element.addEventListener('click', () =>{
      refs.mobileMenu.classList.add('visually-hidden')
      
    });
  })
}
