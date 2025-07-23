const projects = [
  {
    number: 1,
    name: "digital-clock",
    imageLink: "01-digital-clock.png",
  },
  {
    number: 2,
    name: "todo-list",
    imageLink: "02-todo-list.png",
  },
  {
    number: 3,
    name: "calculator",
    imageLink: "03-calculator.png",
  },
  {
    number: 4,
    name: "quiz-app",
    imageLink: "04-quiz-app.png",
  },
  {
    number: 5,
    name: "weather-app",
    imageLink: "05-weather-app.png",
  },
];

const projectSection = document.querySelector(".project-section");
projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `<div class="image">
          <img src="./images/${project.imageLink}" alt="${
    project.name
  } loading="lazy" />
          <span>${project.number}</span>
        </div>

        <div class="project-content">
          <h3>${formateName(project.name)}</h3>
          <a target="_blank" href="./${project.name}/">Live Preview</a>
        </div>`;

  projectSection.appendChild(projectCard);
});

function formateName(proName) {
  return proName
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
