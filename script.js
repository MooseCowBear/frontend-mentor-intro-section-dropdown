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