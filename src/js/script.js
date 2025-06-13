import { smallTablet } from "./common.js"

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {});
const content = document.querySelector('.menu__list');

if (smallTablet) {
  content.style.opacity = '0'; // Показать контент
  content.style.visibility = 'hidden'; // Обеспечить видимость
}

window.addEventListener('DOMContentLoaded', () => {
  if (smallTablet) {
    content.style.opacity = '1'; // Показать контент
    content.style.visibility = 'visible'; // Обеспечить видимость
  }
});



//ВЫПАДАЮЩИЙ СПИСОК В SLIDER HELP . MAIN PAGE
const dropdowns = document.querySelectorAll(".dropdown-project-help");
const slides = document.querySelectorAll(".slide-project-help");

slides.forEach((slide) => {
  const listItems = slide.querySelectorAll(".slide-project-help__list li");
  const buttons = slide.querySelectorAll(".slide-project-help__dropdown");

  buttons.forEach((btn) => {
    if (listItems.length <= 3) {
      btn.style.display = "none";
    }
  });
});

if (dropdowns) {
  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (event) => {
      const openDropdown = document.querySelector(".open-dropdown");
      if (openDropdown && openDropdown !== dropdown) {
        openDropdown.classList.remove("open-dropdown");
      }
      dropdown.classList.toggle("open-dropdown");
    });

    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open-dropdown");
      }
    });
  });
}

//ЧЕКБОКC "ВЫБРАТЬ ВСЕ"

const checkboxAll = document.querySelector(".checkbox--all");

if (checkboxAll) {
  const checkWrapper = checkboxAll.nextElementSibling;
  const listCheckbox = checkWrapper.querySelectorAll(".checkbox__input");
  checkboxAll.addEventListener("change", (e) => {
    const checked = e.target.checked;
    listCheckbox.forEach((el) => {
      el.checked = checked;
    });
  });
}

// checkWrapper.addEventListener("change", (e) => {
//   const allchecksLen = listCheckbox.length;
//   const selectedChecksLen = checkWrapper.querySelectorAll(".checkbox__input:checked").length;
//   const main = checkboxMain;
//   main.indeterminate =
//     selectedChecksLen > 0 && selectedChecksLen < allchecksLen;
//   main.checked = selectedChecksLen === allchecksLen;
// });


// СПИСОК ПОКАЗАТЬ БОЛЬШЕ
const filterCatalogItem = document.querySelectorAll(".filter-catalog__item");
if (filterCatalogItem) {
  filterCatalogItem.forEach((catalogItem) => {
    const list = catalogItem.querySelector(".filter-catalog__checkbox-wrapper");
    const items = list.querySelectorAll('li');
    const listsBtn = catalogItem.querySelector(".filter-catalog__show-more");

    // listsBtn.style.display = "none";
    if (items.length > 7) {
      listsBtn.style.display = "flex";

      for (let i = 7; i < items.length; i++) {
        items[i].style.display = 'none';
      }

      listsBtn.addEventListener('click', () => {
        listsBtn.classList.toggle('active');
        const isExpanded = listsBtn.querySelector('span').textContent === 'Свернуть всё';

        if (isExpanded) {
          for (let i = 7; i < items.length; i++) {
            items[i].style.display = 'none';
          }
          listsBtn.querySelector('span').textContent = 'Показать всё';
        } else {
          for (let i = 7; i < items.length; i++) {
            items[i].style.display = 'block';
          }
          listsBtn.querySelector('span').textContent = 'Свернуть всё';
        }
      });
    }
  });
}

//Ввод промокода

const promoSpoller = document.querySelector('.promo-cart__top');
const promoInput = document.querySelector('.promo-cart__actions');

promoSpoller?.addEventListener('click', () => {
  promoSpoller.classList.toggle('open-spoller');

  if (promoSpoller.classList.contains('open-spoller')) {
    promoInput.style.maxHeight = promoInput.scrollHeight + 20 + 'px';
  } else {
    promoInput.style.maxHeight = null;
  }
});

//Чекбокс корзина

const cartProducts = document.querySelector(".cart__products");

if (cartProducts) {
  const checkboxAllCart = cartProducts.querySelector(".products-cart__checkbox");
  const checkWrapper = cartProducts.querySelector('.products-cart__cards');
  const listCheckbox = checkWrapper.querySelectorAll(".checkbox__input");
  checkboxAllCart.addEventListener("change", (e) => {
    const checked = e.target.checked;
    listCheckbox.forEach((el) => {
      el.checked = checked;
    });
  });
}

// степпер

const steppers = document.querySelectorAll('.stepper');

steppers.forEach(stepper => {
  const stepperInput = stepper.querySelector('.stepper__input');
  const stepperBtnUp = stepper.querySelector('.stepper__btn--up');
  const stepperBtnDown = stepper.querySelector('.stepper__btn--down');

  let count = stepperInput.value;

  const changesClassDisabled = () => {
    if (count == 1) {
      stepperBtnDown.classList.add('stepper__btn--disable');
    } else {
      stepperBtnDown.classList.remove('stepper__btn--disable');
    }
  }

  stepperInput.addEventListener('change', (e) => {
    let self = e.currentTarget;

    if (!self.value) {
      self.value = 1;
    }

    count = stepperInput.value;
    changesClassDisabled();
  });

  stepperBtnUp.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    changesClassDisabled();

    stepperInput.value = count;

  });

  stepperBtnDown.addEventListener('click', (e) => {
    e.preventDefault();
    count--;
    changesClassDisabled();

    stepperInput.value = count;

  });
});

//корзина в header 

const cartHeader = document.querySelector('.cart-header');
const cartHeaderBtn = cartHeader?.querySelector('.cart-header__button');
const cartHeaderProducts = cartHeader?.querySelector('.added-cart');
const productCard = cartHeaderProducts.querySelectorAll('.added-cart__item');

if (productCard.length < 1) {
  const cartQuantity = cartHeader?.querySelector('.cart-header__quantity');
  cartHeaderBtn.style.pointerEvents = 'none';
  cartQuantity.style.display = 'none';
}

cartHeaderBtn.addEventListener('click', (e) => {
  cartHeaderProducts.classList.toggle('open-cart');
});

// Характеристики 

const propertyTable = document.querySelector('.desc-tabs-card-catalog__table');
const property = propertyTable?.querySelectorAll('.desc-tabs-card-catalog__block');
const btnProperty = document.querySelector('.desc-tabs-card-catalog__btn');

function propertyHiding() {
  if (property?.length > 2) {
    let count = 0;

    for (const element of property) {
      if (count >= 2) {
        element.classList.add('hidden');
        element.style.height = 0;
      }
      count++;
    }
  }
}

propertyHiding();

btnProperty?.addEventListener('click', (e) => {
  e.preventDefault();
  btnProperty.classList.toggle('open-property');

  if (btnProperty.classList.contains('open-property')) {
    for (const element of property) {
      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.style.height = element.scrollHeight + 'px';
      }
    }
    btnProperty.firstElementChild.textContent = 'Свернуть все';
  } else {
    propertyHiding();
    btnProperty.firstElementChild.textContent = 'Развернуть все';
  }
});


const tabsSliderCatalog = document.querySelectorAll('.tabs-card-catalog__slider');

tabsSliderCatalog?.forEach((tabSliderCatalog, index) => {
  const slider = tabSliderCatalog.querySelectorAll('.swiper');

  slider.forEach(el => {
    const slide = el.querySelectorAll('.swiper-slide');

    if (slide.length <= 1) {
      const btnMain = tabSliderCatalog.querySelector('.tabs-slider-btn-catalog-main');
      const btn = tabSliderCatalog.querySelector('.tabs-slider-btn-catalog');

      btnMain.style.display = 'none';
      btn.style.display = 'flex';
    }
  })
});


const inputs = document.querySelectorAll(".input");
inputs.forEach(input => {
  const label = input.nextElementSibling;
  input.addEventListener('input', handleInputChange);

  function handleInputChange() {
    if (input.value) {
      label.classList.add('top-title');
    } else {
      label.classList.remove('top-title');
    }
  }

})


const toggleBtn = document.querySelector('.toggle-configurator__btn');
const configuratorWrapper = document.querySelector('.configurator__swiper-wrapper');

toggleBtn?.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  if (toggleBtn.classList.contains('active')) {
    configuratorWrapper.classList.add('close');
  } else {
    configuratorWrapper.classList.remove('close');
  }
})


document.querySelectorAll('.slide-configurator__screen-wrapper').forEach(image => {
  image.addEventListener('click', function (event) {
    const clickedImage = event.target;

    if (clickedImage) {
      console.log(`Вы нажали на: ${clickedImage.alt}`);
    }
  });
})

const configSreensBody = document.querySelectorAll('.config-sreen-info-wrapper');
const configSreens = document.querySelectorAll('.config-sreen-info__hit');

configSreens.forEach(screen => {
  screen.addEventListener('click', (event) => {
    screen.classList.toggle('active');

    const closeOnClickOutside = (e) => {

      if (!screen.contains(e.target)) {
        screen.classList.remove('active');
        document.removeEventListener('click', closeOnClickOutside); 
      }
    };

    document.addEventListener('click', closeOnClickOutside);
  })
})