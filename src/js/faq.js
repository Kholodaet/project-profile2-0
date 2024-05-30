import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


const accordionsArray = Array.from(document.querySelectorAll('.ac'))
console.log("accordionsArray: ", accordionsArray);
export function initAccardionFaq() {
        new Accordion (accordionsArray, {
         openOnInit: [0],
        collapse: false,
    })

}

