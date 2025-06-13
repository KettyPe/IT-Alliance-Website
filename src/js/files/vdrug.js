

// if (window.innerWidth >= 992) {
//   arraySelectedWrapper.forEach(array => {
//     const arraySelected = array.querySelectorAll(
//       ".selected-filter-catalog__item"
//     );
//     const resetSelected = array.querySelector(
//       ".selected-filter-catalog__reset"
//     );
//     if (arraySelected.length <= 2) resetSelected.style.display = "none";
//   })
// } else
//   if (window.innerWidth < 991.98) {
//     if (selectedInner.scrollHeight > 140) {
//       showMoreSelected.addEventListener('click', () => {
//         showMoreSelected.classList.toggle("active");
//         if (showMoreSelected.classList.contains("active")) {
//           //selectedInner.style.display = 'block';
//           selectedInner.style.maxHeight = 100 + '%';
//           selectedInner.style.height = selectedInner.scrollHeight + 'px';
//           selectedInner.style.overflow = 'visible';
//           showMoreSelected.querySelector("span").textContent = "Скрыть все";
//         } else {
//           selectedInner.style.overflow = 'hidden';
//           selectedInner.style.height = null;
//           window.innerWidth > 559.98 ? selectedInner.style.maxHeight = 140 + 'px' : selectedInner.style.maxHeight = 130 + 'px';
//           showMoreSelected.querySelector("span").textContent = "Показать все";
//         }
//       })

//     } else {
//       showMoreSelected.style.display = 'none';
//     }
//   }




// if (filterSelected) {
//   const selectedInner = filterSelected.querySelector(
//     ".selected-filter-catalog__items"
//   );
//   const arraySelected = filterSelected.querySelectorAll(
//     ".selected-filter-catalog__item"
//   );
//   const resetSelected = filterSelected.querySelector(
//     ".selected-filter-catalog__reset"
//   );
//   const showMoreSelected = filterSelected.querySelector(
//     ".selected-filter-catalog__show-more"
//   );

//   if (window.innerWidth >= 992) {
//     if (arraySelected.length <= 2) resetSelected.style.display = "none";
//   } else if (window.innerWidth <= 991.98) {
//     if (arraySelected.length > 6) {
//       showMoreSelected.style.display = "flex";
//       for (let item = 6; item < arraySelected.length; item++) {
//         const element = arraySelected[item];
//         element.style.display = "none";
//       }
//     }
//     if (window.innerWidth <= 767.98) {
//       if (arraySelected.length > 3) {
//         for (let item = 3; item < arraySelected.length; item++) {
//           const element = arraySelected[item];
//           element.style.display = "none";
//         }
//       }
//     }

//     showMoreSelected.addEventListener("click", () => {
//       showMoreSelected.classList.toggle("active");
//       if (showMoreSelected.classList.contains("active"))
//         arraySelected.forEach((item) => {
//           item.style.display = "flex";
//         });
//       showMoreSelected.querySelector("span").textContent = "Скрыть все";
//     });
//   }
// }