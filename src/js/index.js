import { initOfferSwiper } from "./swiper-offer";
import { initProjectsSwiper, projectsCardControls } from "./projects";
import { toggleMobMenu } from "./mobMenu";
import AOS from 'aos';

initOfferSwiper();
initProjectsSwiper();
// projectsCardControls();
AOS.init();
document.querySelectorAll('.action-input span').forEach(span => {
    span.addEventListener('click', function() {
      // Находим соседний input и ставим на него фокус
      this.previousElementSibling.focus();
    });
  });
