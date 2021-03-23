const { shell } = require("electron");
const querystring = require("querystring");

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#search-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = form.query.value;
    shell.openExternal("https://www.google.com/search?q=" + query);
  });
});
