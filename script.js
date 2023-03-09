//for opening, closing dropdowns
const featuresLink = document.getElementById("features");
featuresLink.addEventListener("click", () => {
    console.log("features link clicked");

    toggleDropdown(featuresLink);
});

const companyLink = document.getElementById("company");
companyLink.addEventListener("click", () => {
    console.log("company link clicked");

    toggleDropdown(companyLink);
});

function toggleDropdown(dropdownLink) {
    const dropdown = dropdownLink.querySelector("div");
    console.log("dropdown is, ", dropdown);

    const downArrow = dropdownLink.querySelector(".down");
    const upArrow = dropdownLink.querySelector(".up");

    downArrow.classList.toggle("hide");
    upArrow.classList.toggle("hide");
    dropdown.classList.toggle("show");
}

//need modal opening and closing
const modal = document.querySelector(".modal");
const hamburger = document.querySelector(".hamburger.mobile");

hamburger.addEventListener("click", () => {
    modal.style.display = "block";
});

const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
});