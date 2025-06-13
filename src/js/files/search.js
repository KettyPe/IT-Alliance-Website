const search = document.querySelector(".search-header");
const searchBtn = search.querySelector(".search-header__button");
const searchClear = search.querySelector(".search-header__actions");
const searchBtnClear = searchClear.querySelector(".search-header__clear");
const searchItem = search.querySelector(".search-header__item");
const searchInput = searchItem.querySelector(".search-header__input");

search.addEventListener("click", (event) => {
  searchItem.classList.add("open-serach");

  searchInput.tabIndex = '-1';
  setTimeout(() => {
    searchInput.focus();
  }, 100);
  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.trim();
    if (searchText !== "") {
      console.log("hi");
      searchInput.placeholder = "";
      searchClear.classList.add("active-clear");
    }
  });
});

searchInput.addEventListener("focus", () => {
  
});

searchBtnClear.addEventListener("click", () => {
  if (searchInput.value !== "") {
    searchInput.value = "";
    console.log(searchInput.placeholder);
  }
  searchInput.focus();
  searchInput.placeholder = "Поиск по сайту";
});

document.addEventListener("click", (event) => {
  if (!search.contains(event.target)) {
    searchItem.classList.remove("open-serach");
    searchClear.classList.remove("active-clear");
    searchInput.value = "";
    searchInput.placeholder = "Поиск по сайту";
  }
});
