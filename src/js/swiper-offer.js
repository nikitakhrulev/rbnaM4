import Swiper from "swiper";
import { Navigation} from 'swiper/modules';

function initOfferSwiper() {
    const offerSwiper = new Swiper(".offerSwiper", {
        modules: [Navigation],
        loop: true,
        cssMode: true,
        navigation: {
          nextEl: "#swiper-offer-right",
          prevEl: "#swiper-offer-left",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });
      
}

export { initOfferSwiper }