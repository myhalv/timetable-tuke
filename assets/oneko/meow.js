// SPDX-License-Identifier: MIT-0

const meow = function () {
  var script = document.createElement("script");
  script.src = "/timetable-tuke/assets/oneko/oneko.js";
  script.type = "text/javascript";
  script.onerror = function () {
    console.error("Cat not found.");
  };
  document.head.appendChild(script);
};

window.meow = meow;