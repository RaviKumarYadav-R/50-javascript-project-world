const projects = [
  {
    number: 1,
    name: "digital-clock",
    imageLink: "01-digital-clock.png",
    shortDescription: "A simple digital clock that displays the current time.",
  },
  {
    number: 2,
    name: "todo-list",
    imageLink: "02-todo-list.png",
    shortDescription: "A basic to-do list app to manage daily tasks.",
  },
  {
    number: 3,
    name: "calculator",
    imageLink: "03-calculator.png",
    shortDescription:
      "A simple calculator app that performs basic arithmetic operations.",
  },
  {
    number: 4,
    name: "quiz-app",
    imageLink: "04-quiz-app.png",
    shortDescription:
      "An interactive quiz app that tests your knowledge on various topics.",
  },
  {
    number: 5,
    name: "weather-app",
    imageLink: "05-weather-app.png",
    shortDescription:
      "A weather app that shows current weather conditions based on your location.",
  },
  {
    number: 6,
    name: "tip-calculator",
    imageLink: "06-tip-calculator.png",
    shortDescription:
      "A tip calculator that helps you calculate the tip amount based on the bill total and tip percentage.",
  },
  {
    number: 7,
    name: "countdown-timer",
    imageLink: "07-countdown-timer.png",
    shortDescription: "A countdown timer that counts down to a time.",
  },
  {
    number: 8,
    name: "image-slider",
    imageLink: "08-image-slider.png",
    shortDescription:
      "An image slider that allows you to view images in a slideshow format.",
  },
  {
    number: 9,
    name: "quote-generator",
    imageLink: "09-quote-generator.png",
    shortDescription:
      "A quote generator that displays a random quote each time you refresh the page or click on button.",
  },
  {
    number: 10,
    name: "notes-app",
    imageLink: "10-notes-app.png",
    shortDescription:
      "A simple notes app that allows you to create, edit, and delete notes.",
  },
  {
    number: 11,
    name: "bmi-calculator",
    imageLink: "11-bmi-calculator.png",
    shortDescription:
      "A BMI calculator that calculates your Body Mass Index based on your height and weight.",
  },
  {
    number: 12,
    name: "password-generator",
    imageLink: "12-password-generator.png",
    shortDescription:
      "A password generator that creates strong passwords based on user-defined criteria.",
  },
  {
    number: 13,
    name: "form-validation",
    imageLink: "13-form-validation.png",
    shortDescription:
      "A form validation app that checks user input for correctness before submission.",
  },
  {
    number: 14,
    name: "popup-modal",
    imageLink: "14-popup-modal.png",
    shortDescription:
      "A popup modal that can be triggered by a button click, displaying additional information or options.",
  },
  {
    number: 15,
    name: "theme-toggle",
    imageLink: "15-theme-toggle.png",
    shortDescription:
      "A theme toggle app that allows users to switch between light and dark modes.",
  },
  {
    number: 16,
    name: "drum-kit",
    imageLink: "16-drum-kit.png",
    shortDescription:
      "A drum kit app that plays different sounds when you click on the drum pads or press corresponding keys.",
  },
  {
    number: 17,
    name: "music-player",
    imageLink: "17-music-player.png",
    shortDescription:
      "A simple music player that allows you to play, pause, and skip through a playlist of songs.",
  },
  {
    number: 18,
    name: "bg-color-switcher",
    imageLink: "18-bg-color-switcher.png",
    shortDescription:
      "A background color switcher that changes the background color of the page when you click a button.",
  },
  {
    number: 19,
    name: "scroll-animation",
    imageLink: "19-scroll-animation.png",
    shortDescription:
      "A scroll animation app that triggers animations as you scroll down the page.",
  },
  {
    number: 20,
    name: "sticky-navbar",
    imageLink: "20-sticky-navbar.png",
    shortDescription:
      "A sticky navbar that remains fixed at the top of the page when you scroll down.",
  },
  {
    number: 21,
    name: "currency-converter",
    imageLink: "21-currency-converter.png",
    shortDescription:
      "A currency converter that allows you to convert between different currencies using real-time exchange rates.",
  },
  {
    number: 22,
    name: "localstorage-app",
    imageLink: "22-localstorage-app.png",
    shortDescription:
      "An app that demonstrates how to use localStorage to save and retrieve data in the browser.",
  },
  {
    number: 23,
    name: "hangman-game",
    imageLink: "23-hangman-game.png",
    shortDescription:
      "A hangman game where you guess letters to reveal a hidden word before running out of attempts.",
  },
  {
    number: 24,
    name: "memory-game",
    imageLink: "24-memory-game.png",
    shortDescription:
      "A memory game where you match pairs of cards by flipping them over.",
  },
  {
    number: 25,
    name: "typing-speed-test",
    imageLink: "25-typing-speed-test.png",
    shortDescription:
      "A typing speed test that measures how fast you can type a given text.",
  },
  {
    number: 26,
    name: "rps-game",
    imageLink: "26-rps-game.png",
    shortDescription:
      "A rock-paper-scissors game where you play against the computer.",
  },
  {
    number: 27,
    name: "pomodoro-timer",
    imageLink: "27-pomodoro-timer.png",
    shortDescription:
      "A Pomodoro timer that helps you manage your time by breaking work into intervals, traditionally 25 minutes in length, separated by short breaks.",
  },
  {
    number: 28,
    name: "expense-tracker",
    imageLink: "28-expense-tracker.png",
    shortDescription:
      "An expense tracker that allows you to log and categorize your expenses, helping you manage your budget effectively.",
  },
  {
    number: 29,
    name: "number-guessing",
    imageLink: "29-number-guessing.png",
    shortDescription:
      "A number guessing game where you try to guess a randomly generated number within a certain range.",
  },
  {
    number: 30,
    name: "accordion",
    imageLink: "30-accordion.png",
    shortDescription:
      "An accordion component that expands and collapses sections of content when clicked.",
  },
  {
    number: 31,
    name: "tabs-component",
    imageLink: "31-tabs-component.png",
    shortDescription:
      "A tabs component that allows you to switch between different sections of content by clicking on the corresponding tab.",
  },
  {
    number: 32,
    name: "scroll-progress",
    imageLink: "32-scroll-progress.png",
    shortDescription:
      "A scroll progress indicator that shows how far down the page you have scrolled.",
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

const projectSection = document.querySelector(".projects-section");
projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("project-card");

  projectCard.innerHTML = `  <div class="project-image">
          <img
            src="./images/${project.imageLink}"
            alt="${formateName(project.name)}"
          />
        </div>
        <div class="project-info">
          <h3>Project :${project.number} ${formateName(project.name)}</h3>
          <p>
            ${
              project.shortDescription ||
              "No description available for this project."
            }
          </p>
          <div class="technology">
            <span class="tech">HTML</span>
            <span class="tech">CSS</span>
            <span class="tech">JavaScript</span>
          </div>
          <a href="./${
            project.name
          }" target="_blank" class="see-project">See Project <i class="fa-solid fa-arrow-right"></i></a>`;

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
