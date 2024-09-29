import Swiper from "swiper";
import { Navigation} from 'swiper/modules';

function initProjectsSwiper() {
    const projectsSwiper = new Swiper(".projectsSwiper", {
        modules: [Navigation],
        // loop: true,
        // cssMode: true, // Убираем cssMode
        slidesPerView: 'auto', // Это даст больше гибкости слайдам
        spaceBetween: 21,
        speed: 600, // Время переключения слайдов (600 мс)
        // centeredSlides: true,
        navigation: {
          nextEl: "#projects-swiper-next",
          prevEl: "#projects-swiper-prev",
        },
        mousewheel: true,
        keyboard: true,
    });
    
    
}
const cardControls = document.querySelectorAll('.projects__card-control');

cardControls.forEach(card => card.addEventListener('click', projectsCardControls));

function projectsCardControls() {
    const hiddenPart = this.closest('.projects__card-content').querySelector('.projects__card-hidden');
    const borderPart = this.closest('.projects__card-content').querySelector('.projects__card-border');
    console.log(borderPart)
    
    hiddenPart.style.opacity = '1';
    borderPart.style.opacity = '1';
    hiddenPart.style.transform = 'translateY(-108px)';
    console.log(hiddenPart);
}

export { initProjectsSwiper, projectsCardControls }