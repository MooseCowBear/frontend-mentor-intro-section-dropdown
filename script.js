//for opening, closing dropdowns

const featuresLink = document.getElementById("features");
features.addEventListener("click", () => {
    toggleDropdown(featuresLink.id);
});

const companyLink = document.getElementById("company");
companyLink.addEventListener("click", () => {
    toggleDropdown(companyLink.id);
});

function toggleDropdown(id) {
    const dropdown = document.querySelector(`#${id} ~ div`);
    console.log("dropdown is, ", dropdown);

    const downArrow = document.querySelector(`#${id} ~ .down`);
    const upArrow = document.querySelector(`#${id} ~ .up`);

    downArrow.classList.toggle("hide");
    upArrow.classList.toggle("hide");
    dropdown.classList.toggle("show");
}

//need modal opening and closing
const modal = document.querySelector(".modal");
const hamburger = document.querySelector(".hamburger.mobile");

hamburger.addEventListener("click", () => {
    modal.style.visibility = "visible";
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
    modal.style.visibility = "hidden";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.visibility = "hidden";
    }
});

let prevWidth = window.innerWidth;

window.addEventListener("resize", () => {
    const width = window.innerWidth;
    console.log("widnow resize", width, prevWidth);
    if (width > 620 && prevWidth <= 620){
        console.log("TURNING ON MODAL");
        modal.style.visibility = "visible";
        prevWidth = width;
        console.log(prevWidth);
    }
    else if (width <= 620 && prevWidth > 620) {
        console.log("TRUNGIN OFF MODAL");
        modal.style.visibility = "hidden";
        prevWidth = width;
    }
});
