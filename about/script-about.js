window.addEventListener("load", () => {
    const slides = document.querySelectorAll(".slide-left, .slide-right");

    slides.forEach((section, index) => {
        setTimeout(() => {
            section.style.transform = "translateX(0)";
            section.style.opacity = "1";
        }, index * 500); // 500ms delay between each section
    });
});

