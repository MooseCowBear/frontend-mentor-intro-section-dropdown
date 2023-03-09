//for opening desktop dropdowns
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



