import { smallTablet, disableScroll, enableScroll } from "../common.js"

const filtersSelected = document.querySelectorAll(".selected-filter-catalog");
const filtersCatalog = document.querySelectorAll(".filter-catalog");

function moveContent() {
  filtersSelected?.forEach(selected => {
    const selectedInner = selected.querySelector(
      ".selected-filter-catalog__items"
    );
    const arraySelectedWrapper = selected.querySelectorAll(
      ".selected-filter-catalog__items"
    );
    const showMoreSelected = selected.querySelector(
      ".selected-filter-catalog__show-more"
    );


    if (window.innerWidth >= 992) {
      arraySelectedWrapper.forEach(array => {
        const arraySelected = array.querySelectorAll(
          ".selected-filter-catalog__item"
        );
        const resetSelected = array.querySelector(
          ".selected-filter-catalog__reset"
        );
        if (arraySelected.length <= 2) resetSelected.style.display = "none";
      })
    }
    
    if (window.innerWidth < 992) {
      if (selectedInner.scrollHeight > 140) {
        showMoreSelected?.addEventListener('click', () => {
          showMoreSelected.classList.toggle("active");
          if (showMoreSelected.classList.contains("active")) {
            selectedInner.style.maxHeight = 100 + '%';
            selectedInner.style.height = selectedInner.scrollHeight + 'px';
            selectedInner.style.overflow = 'visible';
            showMoreSelected.querySelector("span").textContent = "Скрыть все";
          } else {
            selectedInner.style.overflow = 'hidden';
            selectedInner.style.height = null;
            window.innerWidth > 559.98 ? selectedInner.style.maxHeight = 140 + 'px' : selectedInner.style.maxHeight = 130 + 'px';
            showMoreSelected.querySelector("span").textContent = "Показать все";
          }
        })
      } else {
        showMoreSelected.style.display = 'none';
      }
    }

  })
}
moveContent();



filtersCatalog?.forEach(catalog => {
  const btnFilter = catalog.querySelector(".filter-catalog__btn-mobile");
  const filter = catalog.querySelector(".filter-catalog__inner");
  const filterClose = catalog.querySelector(".filter-catalog__close");

  btnFilter.addEventListener("click", () => {
    filter.classList.add("open");
    disableScroll();
  });

  filterClose.addEventListener("click", () => {
    filter.classList.remove("open");
    enableScroll();
  });
})

window.addEventListener('resize', moveContent);