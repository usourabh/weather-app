const loadPlacesinDropdown = (e) => {
  try {
    const citySelector = document.querySelector("#selectHeader");
    const lowerCaseText = citySelector.value.toLowerCase();

    if (lowerCaseText == "city") {
      // console.log("hello");
      fetch("db.json")
        .then((response) => {
          return response.json();
        })
        .then((singleData) => {
          console.log(typeof singleData);
          // const a = Object.keys(singleData);
          // console.log(a);
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
