//Starting with the tabs with document.addEventListener
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tabs ul li a");
    const panels = document.querySelectorAll("[role='tabpanel']");

    //To set the first tab and panel as active
    tabs[0].classList.add("active");
    panels[0].classList.add("active");

    tabs.forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();

            //To remove active classes from all tabs and panels
            tabs.forEach(t => t.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            //To add active class to the clicked tab
            this.classList.add("active");

            //To show the corresponding panel
            const targetPanel = document.querySelector(this.getAttribute("href"));
            targetPanel.classList.add("active");
        });
    });
});
/* Used https://www.w3schools.com/js/js_functions.asp to know about javascript and took some ideas */
