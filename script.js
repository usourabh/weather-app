const loadPlacesinDropdown = () => {
  try {
    const citySelector = document.querySelector("#selectHeader");
    const lowerCaseText = citySelector.value.toLowerCase();

    if (lowerCaseText == "city") {
      fetch("db.json")
        .then((response) => {
          return response.json();
        })
        .then((singleData) => {
          const allCities = Object.keys(singleData);
          allCities.forEach((place) => {
            console.log();
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (lowerCaseText == "state") {
    } else if (lowerCaseText == "district") {
    }
  } catch (e) {
    console.warn(e);
  }
};
