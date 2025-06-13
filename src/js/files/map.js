ymaps.ready(function () {
  const mapEkaterinburg = document.getElementById("Ekaterinburg");
  const mapProjects = document.getElementById("mapProjects");
  const mapCompany = document.getElementById("mapCompany");

  if (mapEkaterinburg) {
    const Ekaterinburg = new ymaps.Map(
      "Ekaterinburg",
      {
        center: [56.84215706787041, 60.57993949999997],
        zoom: 16,
        controls: [],
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    const myPlacemark = new ymaps.Placemark(
      [56.84215706787041, 60.57993949999997],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/icons/loc.svg",
        iconImageSize: [90, 90],
        iconImageOffset: [-50, -40],
      }
    );
    Ekaterinburg.geoObjects.add(myPlacemark);
  }

  if (mapProjects) {
    const mapProjects = new ymaps.Map(
        "mapProjects",
        {
          center: [56.84215706787041, 60.57993949999997],
          zoom: 16,
          controls: [],
        },
        {
          searchControlProvider: "yandex#search",
        }
      ),
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #101828; font-weight: bold; font-size: 16px;">$[properties.iconContent]</div>'
      );
      console.log(MyIconContentLayout)
      const myPlacemark = new ymaps.Placemark(
        [56.84215706787041, 60.57993949999997],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "img/icons/map.svg",
          iconImageSize: [90, 90],
          iconImageOffset: [-50, -40],
        }
      );
      const myPlacemark2 = new ymaps.Placemark(
        [56.84176310981753, 60.58504642596431],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: '',
          iconImageSize: [60, 60],
          iconImageOffset: [-50, -40],
          iconContent: "2",
          iconContentOffset: [15, 15],
          iconContentLayout: MyIconContentLayout,

        },
        {

        }
      );
    mapProjects.geoObjects.add(myPlacemark).add(myPlacemark2);
  }
});
