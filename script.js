const projects = [
  {
    number: 1,
    name: "digital-clock",
    imageLink: "01-digital-clock.png",
  },
];

const projectSection = document.querySelector(".project-section");
projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `<div class="image">
          <img src="./images/${project.imageLink}" alt="${project.name}" />
        </div>

        <div class="project-content">
          <h3>${formateName(project.name)}</h3>
          <a href="./${project.name}/">Live Preview</a>
        </div>`;

  projectSection.appendChild(projectCard);
});

function formateName(proName) {
  return proName
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
