document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const sections = document.querySelectorAll(".content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(e) {
            e.preventDefault();

            // Remove active class from all tabs and sections
            tabs.forEach(t => t.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));

            // Add active class to clicked tab and corresponding section
            this.classList.add("active");
            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection.classList.add("active");

            // Scroll smoothly to the target section
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
