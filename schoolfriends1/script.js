function getWedgeAngle(numWedges, isSelected, otherIsSelected) {
  let ratio;
  if (isSelected) {
    ratio = 2;
  } else if (otherIsSelected) {
    ratio = (numWedges - 1) * 2;
  } else {
    ratio = numWedges;
  }
  return 360 / ratio;
}

function checkForSelected(wedges) {
  let i = 0;
  wedges.forEach(wedge => {
    i += wedge.classList.contains("wedge--selected") ? 1 : 0;
  });
  return i > 0; // return true if more than zero selected wedges
}

function update() {
  const container = document.querySelector(".container");
  const wedges = container.querySelectorAll(".wedge");
  const width = window.getComputedStyle(container).getPropertyValue("--width");
  const hasSelected = checkForSelected(wedges);
  let rotAngleDeg = 0;

  wedges.forEach((wedge, index) => {
    const isSelected = wedge.classList.contains("wedge--selected");

    // doing some math to get the angle for each wedge
    const wedgeAngleDeg = getWedgeAngle(wedges.length, isSelected, hasSelected);
    const wedgeHalfAngleRad = wedgeAngleDeg * Math.PI / 360;
    const natHeight = wedge.firstElementChild.naturalHeight;
    const natWidth = wedge.firstElementChild.naturalWidth;
    const actualHeight = natHeight / natWidth * width;
    const wedgeHalfWidth = actualHeight * Math.tan(wedgeHalfAngleRad);

    // setting css variables - css clip-path creates wedge shape
    wedge.style.setProperty(
    "--wedge-point-l",
    width / 2 - wedgeHalfWidth + "vw");

    wedge.style.setProperty(
    "--wedge-point-r",
    width / 2 + wedgeHalfWidth + "vw");


    // wedge rotation incorporates both the cumulative rotation and its own width, to allow it to fit between adjacent wedges even if widths are different
    wedge.style.setProperty("--rot-angle", rotAngleDeg + wedgeAngleDeg / 2 + "deg");
    rotAngleDeg += wedgeAngleDeg;
  });
}

function setup() {
  const wedges = document.querySelectorAll(".container .wedge");
  wedges.forEach(wedge => {
    wedge.addEventListener("click", function () {
      if (wedge.classList.contains("wedge--selected")) {
        wedge.classList.remove("wedge--selected");
      } else {
        wedges.forEach(wedge => {
          wedge.classList.remove("wedge--selected");
        });
        this.classList.add("wedge--selected");
      }
      update();
    });
  });
}

setup();
setInterval(update, 600);