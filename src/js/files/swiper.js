import { desctop, smallTablet } from "../common.js"

import Swiper from "swiper";
import { Grid, Navigation, Pagination, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";

window.swiperPartnersNew = function () {
  new Swiper(".partners__slider", {
    modules: [Navigation, Grid],
    observer: true,
    observeParents: true,
    slidesPerView: 6,
    slidesPerGroup: 2,
    spaceBetween: 0,
    speed: 800,

    grid: {
      fill: "row",
      rows: 2,
    },

    navigation: {
      nextEl: ".partners__arrow-next",
      prevEl: ".partners__arrow-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
      560: {
        slidesPerView: 4,
        slidesPerGroup: 2,
      },
      1100: {
        slidesPerView: 5,
        slidesPerGroup: 2,
      },
      1280: {
        slidesPerView: 6,
        slidesPerGroup: 2,
      },
    },
  })
}

swiperPartnersNew()

window.swiperProjectNew = function () {
  new Swiper(".project-help__slider", {
    modules: [Navigation],
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 32,
    speed: 800,

    navigation: {
      nextEl: ".project-help__arrow-next",
      prevEl: ".project-help__arrow-prev",
    },

    lockClass: "help-slider-disabled",

    breakpoints: {
      320: {
        slidesPerView: 1.25,
        spaceBetween: 8,
      },
      760: {
        slidesPerView: 2.25,
        spaceBetween: 16,
      },
      991: {
        slidesPerView: 3.25,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  })
}

swiperProjectNew()

window.swiperSolutionNew = function () {
  new Swiper(".solutions-help__slider", {
    modules: [Navigation],
    observer: true,
    observeParents: true,
    slidesPerView: 4,
    spaceBetween: 32,
    speed: 800,

    navigation: {
      nextEl: ".solutions-help__arrow-next",
      prevEl: ".solutions-help__arrow-prev",
    },

    lockClass: "help-slider-disabled",

    breakpoints: {
      320: {
        slidesPerView: 1.25,
        spaceBetween: 8,
      },
      700: {
        slidesPerView: 2.25,
        spaceBetween: 16,
      },
      991: {
        slidesPerView: 3.25,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  })
}

swiperSolutionNew()

window.swiperReviewsNew = function () {
  new Swiper(".reviews__slider", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,

    navigation: {
      nextEl: ".reviews__arrow-next",
      prevEl: ".reviews__arrow-prev",
    },
  })
}

swiperReviewsNew()

window.swiperVendorsNew = function () {
  new Swiper(".vendors__slider", {
    modules: [Navigation],
    slidesPerView: 6,
    spaceBetween: 32,
    speed: 800,

    navigation: {
      nextEl: ".vendors__arrow-next",
      prevEl: ".vendors__arrow-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      991: {
        slidesPerView: 5,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 32,
      },
    },
  })
}

swiperVendorsNew()

window.swiperBrandsNew = function () {
  new Swiper(".brand-equipment__slider", {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 32,
    speed: 800,

    navigation: {
      nextEl: ".brand-equipment__arrow-next",
      prevEl: ".brand-equipment__arrow-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      560: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      860: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  })
}

swiperBrandsNew()

window.swiperGalleryNew = function () {
  new Swiper(".gallery-about__slider", {
    modules: [Navigation],
    slidesPerView: 3,
    spaceBetween: 32,
    speed: 800,

    navigation: {
      nextEl: ".gallery-about__arrow-next",
      prevEl: ".gallery-about__arrow-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  })
}

swiperGalleryNew()

window.swiperVacancyNew = function () {
  new Swiper(".vacancy-about-company__slider", {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 32,
    speed: 800,

    navigation: {
      nextEl: ".vacancy-about-company__arrow-next",
      prevEl: ".vacancy-about-company__arrow-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1.25,
        spaceBetween: 8,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  })
}

swiperVacancyNew()

window.swiperProductsNew = function () {
  new Swiper(".products-card-news__slider", {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 32,
    speed: 800,

    navigation: {
      nextEl: ".products-card-news__arrow-next",
      prevEl: ".products-card-news__arrow-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  })
}
swiperProductsNew()

window.swiperCartHelpNew = function () {
  new Swiper(".cart-help__slider", {
    modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 32,
    speed: 800,

    navigation: {
      nextEl: ".products-card-news__arrow-next",
      prevEl: ".products-card-news__arrow-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 8,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  })
}

swiperCartHelpNew()

const swiperCardCatalogTumbs = new Swiper(".card-catalog__slider-tumbs", {
  modules: [Pagination, Thumbs],
  slidesPerView: 3,
  spaceBetween: 16,
  direction: 'vertical',
  speed: 800,
});

window.swiperCardCatalogNew = function () {
  new Swiper(".card-catalog__slider", {
    modules: [Pagination, Thumbs],
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
  
    pagination: {
      el: '.card-catalog__slider-pagination',
    },
  
    thumbs: {
      swiper: swiperCardCatalogTumbs
    }, 
  })
}

swiperCardCatalogNew()

window.swiperConfigNew = function () {
  new Swiper(".config-main__slider", {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 800,

    navigation: {
      nextEl: ".config-main__arrow-next",
      prevEl: ".config-main__arrow-prev",
    },

  })
}

window.swiperProductNew = function () {
  let swiperEquipment = document.querySelectorAll(".card-equipment__slider");
  swiperEquipment?.forEach((container => {
    let swiper = new Swiper(container, {
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".card-equipment__dotts",
        type: "bullets",
        clickable: "true",
        lockClass: "equipment-dotts-disable"
      }
    });
    if (desctop) {
      let slides = container.querySelectorAll(".card-equipment__slide");
      slides.forEach(((slide, index) => {
        let timeoutId;
        slide.addEventListener("mouseenter", (() => {
          swiper.slideNext();
          timeoutId = setInterval((() => {
            swiper.slideNext();
          }), 1200);
        }));
        slide.addEventListener("mouseleave", (() => {
          clearInterval(timeoutId);
        }));
      }));
    }
  }));
}
swiperProductNew()


window.addEventListener('resize', () => {
  if (window.innerWidth < 991.98) {
    const swiperConfigurator = new Swiper(".configurator__slider", {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 800,

      navigation: {
        nextEl: ".configurator__arrow-next",
        prevEl: ".configurator__arrow-prev",
      },

      breakpoints: {
        320: {
          spaceBetween: 24,
        },
        767: {
          spaceBetween: 72,
        },
      },

    });
  }
});