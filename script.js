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
  {
    number: 6,
    name: "tip-calculator",
    imageLink: "06-tip-calculator.png",
  },
  {
    number: 7,
    name: "countdown-timer",
    imageLink: "07-countdown-timer.png",
  },
  {
    number: 8,
    name: "image-slider",
    imageLink: "08-image-slider.png",
  },
  {
    number: 9,
    name: "quote-generator",
    imageLink: "09-quote-generator.png",
  },
  {
    number: 10,
    name: "notes-app",
    imageLink: "10-notes-app.png",
  },
  {
    number: 11,
    name: "bmi-calculator",
    imageLink: "11-bmi-calculator.png",
  },
  {
    number: 12,
    name: "password-generator",
    imageLink: "12-password-generator.png",
  },
  {
    number: 13,
    name: "form-validation",
    imageLink: "13-form-validation.png",
  },
  {
    number: 14,
    name: "popup-modal",
    imageLink: "14-popup-modal.png",
  },
  {
    number: 15,
    name: "theme-toggle",
    imageLink: "15-theme-toggle.png",
  },
  {
    number: 16,
    name: "drum-kit",
    imageLink: "16-drum-kit.png",
  },
  {
    number: 17,
    name: "music-player",
    imageLink: "17-music-player.png",
  },
  {
    number: 18,
    name: "bg-color-switcher",
    imageLink: "18-bg-color-switcher.png",
  },
  {
    number: 19,
    name: "scroll-animation",
    imageLink: "19-scroll-animation.png",
  },
  {
    number: 20,
    name: "sticky-navbar",
    imageLink: "20-sticky-navbar.png",
  },
  {
    number: 21,
    name: "currency-converter",
    imageLink: "21-currency-converter.png",
  },
  {
    number: 22,
    name: "localstorage-app",
    imageLink: "22-localstorage-app.png",
  },
  {
    number: 23,
    name: "hangman-game",
    imageLink: "23-hangman-game.png",
  },
  {
    number: 24,
    name: "memory-game",
    imageLink: "24-memory-game.png",
  },
  {
    number: 25,
    name: "typing-speed-test",
    imageLink: "25-typing-speed-test.png",
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
