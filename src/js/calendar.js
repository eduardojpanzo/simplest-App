//Var and Elements
const calendarElement = document.querySelector(".calendar");
const monthElement = calendarElement.querySelector("#month");
const monthsElement = calendarElement.querySelector(".months");
const weekdaysElement = calendarElement.querySelector(".body .weekdays");

let currentDate = new Date();
let currentLang = "pt";

let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };

//Execution and Events

/*Theme Swicth*/
document.querySelector(".switch.theme").addEventListener("click", () => {
  document.querySelector("html").classList.toggle("dark");
  document.querySelector(".theme .switch-indent").classList.toggle("active");
});

/*Lang Swicth*/
document.querySelector(".switch.lang").addEventListener("click", () => {
  currentLang = document
    .querySelector(".lang .switch-indent")
    .classList.toggle("active")
    ? "en"
    : "pt";

  changeLang();
});

/*change year*/
document.querySelector(".year #prev").addEventListener("click", () => {
  --currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
});
document.querySelector(".year #next").addEventListener("click", () => {
  ++currentYear.value;
  generateCalendar(currentMonth.value, currentYear.value);
});

//--------MONTH
monthElement.onclick = () => {
  monthsElement.classList.add("show");
};

// Go to today
document.querySelector(".header #today.today").addEventListener("click", () => {
  const today = new Date();
  currentMonth.value = today.getMonth();
  currentYear.value = today.getFullYear();
  generateCalendar(currentMonth.value, currentYear.value);
});

//Functions
const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
  (year % 100 === 0 && year % 400 === 0);

const getFebDays = (year) => (isLeapYear(year) ? 29 : 28);

const daysOfMonth = () => [
  31,
  getFebDays(year),
  31,
  30,
  31,
  30,
  31,
  31,
  30,
  31,
  30,
  31,
];

function generateCalendar(month, year) {
  document.querySelector("#year").innerHTML = year;
  monthElement.innerHTML = getMonthNames(currentLang)[month];

  setDaysInCalendar(month, year);
}

function getWeekDays(lang = "pt") {
  return lang === "pt"
    ? ["Dom", "Seg", "ter", "Qua", "Qui", "Sex", "Sab"]
    : ["Sun", "Mon", "Tue", "wed", "Thu", "Fri", "Sat"];
}

function setWeekDays(lang = "pt") {
  weekdaysElement.innerHTML = "";
  getWeekDays(lang).map((day, i) => {
    weekdaysElement.innerHTML += `<div>${day}</div>`;
  });
}

function getMonthNames(lang = "pt") {
  return lang === "pt"
    ? [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ]
    : [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "september",
        "October",
        "November",
        "December",
      ];
}

function setMonthsNames(lang = "pt") {
  monthsElement.innerHTML = "";

  getMonthNames(lang).forEach((e, index) => {
    const month = document.createElement("div");
    month.innerHTML = `<div>${e}</div>`;

    month.addEventListener("click", () => {
      monthsElement.classList.remove("show");
      currentMonth.value = index;
      generateCalendar(currentMonth.value, currentYear.value);
    });

    monthsElement.appendChild(month);
  });
}

function setDaysInCalendar(month, year) {
  const daysElement = document.querySelector(".body .days");
  daysElement.innerHTML = "";

  const firstDay = new Date(year, month, 1);

  for (let i = 0; i <= daysOfMonth()[month] + firstDay.getDay() - 1; i++) {
    const day = document.createElement("div");
    if (i >= firstDay.getDay()) {
      day.innerHTML = i - firstDay.getDay() + 1;
      day.classList.add("date");
      if (
        i - firstDay.getDay() + 1 === currentDate.getDate() &&
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth()
      ) {
        day.classList.add("today");
      }
    }

    daysElement.appendChild(day);
  }
}

function changeLang() {
  generateCalendar(currentMonth.value, currentYear.value);
  setMonthsNames(currentLang);
  setWeekDays(currentLang);
}

// Initialization
generateCalendar(currentMonth.value, currentYear.value);
setMonthsNames(currentLang);
setWeekDays(currentLang);
