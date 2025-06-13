import { desctop, tablet, disableScroll, enableScroll } from "../common.js"

const menuIcon = document.querySelector(".burder-menu__btn");
const menuBody = document.querySelector(".burder-menu__body");

const menuLinks = document.querySelectorAll(".menu__item");
const btnLinks = document.querySelectorAll(".menu__link");

const subMenuBody = document.querySelectorAll('.submenu__body');
const subMenuBtns = document.querySelectorAll(".submenu__item");
const subMenuCloseBtn = document.querySelectorAll(".submenu__top-mobile");

let isScrollDisabled = false;


menuIcon.addEventListener("click", () => {
  menuBody.classList.toggle("menu-open");
  menuIcon.classList.toggle("menu-open");

  if (menuBody.classList.contains("menu-open")) {
    disableScroll();
  } else {
    subMenuBody.forEach((submenu) => submenu.classList.remove("open"));
    enableScroll();
  }
});

function subMenuActions(submenuWrapper, link) {
  submenuWrapper.forEach(wrapper => {
    const submenuBtns = wrapper.querySelectorAll('.submenu__item');
    const submenu = wrapper.querySelector('.submenu__sublist');

    let currentBtn = null;

    wrapper.addEventListener('mousemove', (e) => {
      if (!link.classList.contains('active')) {
        return;
      }

      setTimeout(() => {
        submenuBtns.forEach((btn) => {

          const rect = btn.getBoundingClientRect();

          if (
            e.clientX >= rect.left &&
            e.clientX <= rect.right &&
            e.clientY >= rect.top &&
            e.clientY <= rect.bottom
          ) {
            currentBtn = btn;
          }

          const activeSubBtn = link.querySelector(
            ".submenu__item.submenu__item--active"
          );

          if (currentBtn) {
            activeSubBtn?.classList.remove("submenu__item--active");
            currentBtn.classList.add('submenu__item--active');
          }
        });
      }, 500);
    });
  });
}

subMenuBtns.forEach((subBtn) => {
  if (tablet) {
    subBtn.classList.remove("submenu__item--active");
    subBtn.addEventListener("click", () => {
      subBtn.classList.toggle("active");
      const children = subBtn.nextElementSibling;

      if (subBtn.classList.contains("active")) {
        children.classList.add("open");
      } else {
        children.classList.remove("open");
      }
    })
  }
});

function moveMenu() {

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (window.innerWidth >= 1280) {
        const submenuList = link.querySelector('.submenu__list');
  
        const btnLink = link.querySelector('.menu__link');
        const submenu = link.querySelector('.submenu');
  
        if (event.target === btnLink) {
          btnLink.classList.toggle('open-submenu');
          if (btnLink.classList.contains('open-submenu')) {
            submenu?.classList.add('open');
  
            btnLinks.forEach(otherBtnLink => {
              if (otherBtnLink !== btnLink && otherBtnLink.classList.contains('open-submenu')) {
                otherBtnLink.classList.remove('open-submenu');
                otherBtnLink.nextElementSibling.classList.remove('open');
                otherBtnLink.parentNode.classList.remove('active');
              }
            })
            if (!isScrollDisabled) {
              disableScroll();
              isScrollDisabled = true;
            }
  
            btnLink.parentNode.classList.add('active');
  
            if (link.classList.contains('active')) {
              const submenuWrapper = submenuList.querySelectorAll('.submenu__item-wrapper');
              subMenuActions(submenuWrapper, link)
            }
  
          } else {
            enableScroll();
            isScrollDisabled = false;
            submenu.classList.remove('open');
            btnLink.parentNode.classList.remove('active');
          }
        }
  
        if (!event.target.closest('.menu__link') && !event.target.closest('.submenu__container')) {
          btnLink.classList.remove('open-submenu');
          submenu.classList.remove('open');
          btnLink.parentNode.classList.remove('active');
          enableScroll();
          isScrollDisabled = false;
        }
      } 

      if(window.innerWidth < 1280) {
        link.querySelector(".submenu__body")?.classList.add("open");
      }
    });
  });

  if (tablet) {
    subMenuCloseBtn.forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => {
        const parent = closeBtn.parentNode;
        const parentBtn = parent.querySelectorAll(".submenu__item");
        const parentList = parent.querySelectorAll(".submenu__sublist");
  
        setTimeout(() => {
          if (parent.classList.contains("open")) {
            parent.classList.remove("open");
            parentBtn.forEach((item) => {
              item.classList.remove("active");
            });
            parentList.forEach((item) => {
              item.classList.remove("open");
            });
          }
        }, 5);
      });
    });
  }
}


window.addEventListener('resize', moveMenu);

