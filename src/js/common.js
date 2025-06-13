export const desctop = window.innerWidth >= 1280;
export const tablet = window.innerWidth < 1280;
export const smallTablet = window.innerWidth < 991.98;



export function disableScroll() {
     let paddingOffset = window.innerWidth - document.body.offsetWidth + "px";
     document.body.style.paddingRight = paddingOffset;

     let pagePosition = window.scrollY;
     document.body.classList.add("disable-scroll");
     document.body.dataset.position = pagePosition;
     document.body.style.top = -pagePosition + "px";
}

export function enableScroll() {
     document.body.style.paddingRight = "0px";

     let pagePosition = parseInt(document.body.dataset.position, 10);
     document.body.style.top = "auto";
     document.body.classList.remove("disable-scroll");
     window.scroll({ top: pagePosition, left: 0 });
     document.body.removeAttribute("data-position");
}