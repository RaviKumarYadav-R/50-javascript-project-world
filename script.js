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
  {
    number: 26,
    name: "rps-game",
    imageLink: "26-rps-game.png",
  },
  {
    number: 27,
    name: "pomodoro-timer",
    imageLink: "27-pomodoro-timer.png",
  },
  {
    number: 28,
    name: "expense-tracker",
    imageLink: "28-expense-tracker.png",
  },
  {
    number: 29,
    name: "number-guessing",
    imageLink: "29-number-guessing.png",
  },
  {
    number: 30,
    name: "accordion",
    imageLink: "30-accordion.png",
  },
  {
    number: 31,
    name: "tabs-component",
    imageLink: "31-tabs-component.png",
  },
  {
    number: 32,
    name: "scroll-progress",
    imageLink: "32-scroll-progress.png",
  },
  // {
  //   number: 33,
  //   name: "copy-to-clipboard",
  //   imageLink: "33-copy-to-clipboard.png",
  // },
  // {
  //   number: 34,
  //   name: "char-counter",
  //   imageLink: "34-char-counter.png",
  // },
  // {
  //   number: 35,
  //   name: "star-rating",
  //   imageLink: "35-star-rating.png",
  // },
  // {
  //   number: 36,
  //   name: "random-user",
  //   imageLink: "36-random-user.png",
  // },
  // {
  //   number: 37,
  //   name: "drag-drop",
  //   imageLink: "37-drag-drop.png",
  // },
  // {
  //   number: 38,
  //   name: "stopwatch",
  //   imageLink: "38-stopwatch.png",
  // },
  // {
  //   number: 39,
  //   name: "file-upload",
  //   imageLink: "39-file-upload.png",
  // },
  // {
  //   number: 40,
  //   name: "infinite-scroll",
  //   imageLink: "40-infinite-scroll.png",
  // },
  // {
  //   number: 41,
  //   name: "sticky-notes",
  //   imageLink: "41-sticky-notes.png",
  // },
  // {
  //   number: 42,
  //   name: "qr-generator",
  //   imageLink: "42-qr-generator.png",
  // },
  // {
  //   number: 43,
  //   name: "file-drag-and-drop",
  //   imageLink: "43-file-drag-and-drop.png",
  // },
  // {
  //   number: 44,
  //   name: "drawing-app",
  //   imageLink: "44-drawing-app.png",
  // },
  // {
  //   number: 45,
  //   name: "login-ui",
  //   imageLink: "45-login-ui.png",
  // },
  // {
  //   number: 46,
  //   name: "response-navbar",
  //   imageLink: "46-response-navbar.png",
  // },
  // {
  //   number: 47,
  //   name: "github-finder",
  //   imageLink: "47-github-finder`.png",
  // },
  // {
  //   number: 48,
  //   name: "joke-generator",
  //   imageLink: "48-joke-generator.png",
  // },
  // {
  //   number: 49,
  //   name: "image-search",
  //   imageLink: "49-image-search.png",
  // },
  // {
  //   number: 50,
  //   name: "portfolio",
  //   imageLink: "50-portfolio.png",
  // },
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

// Add scroll progress bar functionality
window.addEventListener("scroll", function () {
  const scrollTop = document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = document.documentElement.clientHeight;
  const progressBar = document.getElementById("progress-bar");

  const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
  progressBar.style.width = scrollPercent + "%";
});
