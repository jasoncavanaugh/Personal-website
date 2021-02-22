const projectTabs = document.querySelectorAll("[data-tab-target]");
const projectTabContents = document.querySelectorAll("[data-tab-content]");

for (let i = 0; i  < projectTabs.length; i++) {
    projectTabs[i].addEventListener("click", () => {
        const target = document.querySelector(projectTabs[i].dataset.tabTarget);
        for (let j = 0; j < projectTabContents.length; j++) {
            projectTabContents[j].classList.remove("active");
            projectTabs[j].classList.remove("active");
        }
        target.classList.add("active");
        projectTabs[i].classList.add("active");
    });
}