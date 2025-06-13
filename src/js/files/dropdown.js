document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
     const dropDownBtn = dropDownWrapper.querySelector('.dropdown-btn');
     const dropDownList = dropDownWrapper.querySelector('.dropdown-list');
     const dropDownTitle = dropDownWrapper.querySelector('.dropdown-title');
     const dropDownListItems = dropDownList.querySelectorAll('.dropdown-item');
     const dropDownInput = dropDownWrapper.querySelector('.dropdown-input');
     const btnTextSelect = dropDownWrapper.querySelector('.dropdown-btn-text');

     dropDownBtn.addEventListener('click', function (e) {
          dropDownList.classList.toggle('open-dropdown');
          this.classList.toggle('btn-active');
     });
     dropDownListItems.forEach(function (listItem) {
          listItem.addEventListener('click', function (e) {
               e.stopPropagation();
               btnTextSelect.innerText = this.innerText;
               dropDownBtn.focus();
               dropDownInput.value = this.dataset.value;
               dropDownList.classList.remove('open-dropdown');
               if(btnTextSelect) {
                    dropDownTitle.classList.add('top-title');
                    dropDownBtn.classList.remove('btn-active');
               } else {
                    dropDownTitle.classList.remove('top-title');
               }
          });
     });
     document.addEventListener('click', function (e) {
          if (e.target !== dropDownBtn && !dropDownList.contains(e.target)) {
               dropDownBtn.classList.remove('btn-active');
               dropDownList.classList.remove('open-dropdown');
          }
     });
     document.addEventListener('keydown', function (e) {
          if (e.key === 'Tab' || e.key === 'Escape') {
               dropDownBtn.classList.remove('btn-active');
               dropDownList.classList.remove('open-dropdown');
          }
     });
});