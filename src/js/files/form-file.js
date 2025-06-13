const formFileBody = document.querySelectorAll('.file-actions-form');

formFileBody.forEach(form => {
  const formFile = form.querySelector('.file-actions-form__input');

  const filePreviewImg = form.querySelector(
    ".file-actions-form__filePreviewImg"
  );
  const filePreviewText = form.querySelector(
    ".file-actions-form__filePreviewText"
  );
  const formPerview = form.querySelector(".file-actions-form__perview");
  const formPerviewBtnClose = form.querySelector(
    ".file-actions-form__perview-btn"
  );
  
  const formInner = form.querySelector(".file-actions-form__inner");
  const formPerviewError = form.querySelector(".file-actions-form__error");
  
  if(formFile) {
    formFile.addEventListener("change", () => {
      uploadFile(formFile.files[0]);
    });
  
    formPerviewBtnClose.addEventListener("click", () => {
  
      formFile.value = "";
      
      filePreviewImg.classList.remove("active");
      filePreviewText.classList.remove("active");
    
      filePreviewImg.src = "";
      filePreviewImg.alt = "";
      filePreviewText.textContent = "";
    
      formPerviewBtnClose.style.display = "none";
      formInner.style.opacity = "1";
      formInner.style.pointerEvents = "auto";
    });
    
    function uploadFile(file) {
      if (file.size > 2 * 1024 * 1024) {
         formPerviewError.classList.add('perviews-error');
        return;
      }
    
      if (file) {
        const reader = new FileReader();
        formPerviewError.classList.remove('perviews-error');
        formPerviewBtnClose.style.display = "block";
    
        formInner.style.opacity = "0.5";
        formInner.style.pointerEvents = "none";
    
        if (file.type.startsWith("image/")) {
          reader.onload = (e) => {
            filePreviewImg.src = e.target.result;
            filePreviewImg.alt = file.name;
            filePreviewImg.classList.add("active");
          };
          reader.readAsDataURL(file);
        } else {
          filePreviewText.textContent = file.name;
          filePreviewText.classList.add("active");
        }
      }
    }
  }
})







