document.addEventListener("DOMContentLoaded", function () {
    const countries = [
        { name: "Laos", flag: "https://flagcdn.com/w40/la.png" },
        { name: "Thailand", flag: "https://flagcdn.com/w40/th.png" },
        { name: "USA", flag: "https://flagcdn.com/w40/us.png" }
    ];

    const selectBox = document.querySelector(".custom-select");
    const selectedOption = document.querySelector(".selected-option");
    const optionsList = document.querySelector(".options");

    // Default country (Laos)
    updateSelectedCountry(countries[0]);

    // Toggle dropdown when clicked, and close if already open
    selectBox.addEventListener("click", (e) => {
        // Check if the dropdown is already open
        const isActive = selectBox.classList.contains("active");
        // Toggle the dropdown state (open/close)
        selectBox.classList.toggle("active", !isActive);
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
        if (!selectBox.contains(e.target)) selectBox.classList.remove("active");
    });

    // Populate dropdown
    optionsList.innerHTML = countries.map(country =>
        `<li data-name="${country.name}" data-flag="${country.flag}">
            <img src="${country.flag}" alt="${country.name} flag"> ${country.name}
        </li>`
    ).join("");

    // Handle country selection & auto-close dropdown
    optionsList.addEventListener("click", (e) => {
        const li = e.target.closest("li");
        if (!li) return;
        updateSelectedCountry({ name: li.dataset.name, flag: li.dataset.flag });

        // Auto-close dropdown after selection
        selectBox.classList.remove("active");
    });

    function updateSelectedCountry(country) {
        selectedOption.innerHTML = `<img src="${country.flag}" alt="${country.name} flag"> ${country.name} <span class="arrow"></span>`;
    }
});
