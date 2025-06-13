
const tabs = document.querySelectorAll(".tabs");

if (tabs) {
  tabs.forEach((el) => {
    const tabsBtn = el.querySelectorAll(".tabs-btn");
    const tabsContent = el.querySelectorAll(".tabs-content");

    // Скрываем неактивные вкладки и кнопки при загрузке страницы
    tabsContent.forEach((content, index) => {
      if (content.textContent.trim() === "") {
        content.style.display = "none";
        tabsBtn[index].style.display = "none";
      }
    });

    el.addEventListener("click", (e) => {
      if (e.target.classList.contains("tabs-btn")) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsBtn.forEach((el) => {
          el.classList.remove("active-tab-btn");
        });
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add("active-tab-btn");
        tabsHandler(tabsPath);
      }
    });

    const tabsHandler = (path) => {
      tabsContent.forEach((el) => {
        el.classList.remove("active-tab");
      });
      const dataTabsTarget = document.querySelectorAll(`[data-tabs-target="${path}"]`);
      dataTabsTarget.forEach((tab) => {
        tab.classList.add("active-tab");
      });
    };
  });
}

const tabsEquipments = document.querySelectorAll(".tabsEquipment");

if (tabsEquipments) {
  tabsEquipments.forEach(tabsEquipment => {
    const tabsEquipmentBtn = tabsEquipment.querySelectorAll(".tabsEquipmentBtn");
    const tabsEquipmentContent = tabsEquipment.querySelectorAll(".tabsEquipmentContent");
  
    tabsEquipment.addEventListener("click", (e) => {
      if (e.target.classList.contains("tabsEquipmentBtn")) {
        const tabsPath = e.target.dataset.tabsPath;
        tabsEquipmentBtn.forEach((el) => {
          el.classList.remove("tabs-active-btn");
        });
        document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add("tabs-active-btn");
        tabsHandler(tabsPath);
      }
    });
  
    const tabsHandler = (path) => {
      tabsEquipmentContent.forEach((el) => { el.classList.remove("tabs-active-content"); });
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add("tabs-active-content");
    };
  })

}

