const titles = document.querySelectorAll("h2");

titles.forEach((title) => {
  if (title.textContent.toLowerCase().includes("booking")) {
    console.log("yes", title);

    const rgx = new RegExp(/[0-2][0-9]:[0-9]{2}/);

    const main = document.querySelector('[role="main"]');
    main.innerText.match(rgx);
  }
});
