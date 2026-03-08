window.addEventListener("load", () => {
    const ideas = document.getElementById("ideas");
    const impact = document.getElementById("impact");

    setTimeout(() => {
        ideas.style.opacity = "1";
        ideas.style.transform = "translateY(0)";
    }, 300);

    setTimeout(() => {
        impact.style.opacity = "1";
        impact.style.transform = "translateY(0)";
    }, 800);
});

const cover = document.getElementById("paperCover");

cover.addEventListener("click", () => {
    cover.classList.add("open");
});