const textarea = document.querySelectorAll("textarea");
textarea.forEach((area, i) => {
  area.addEventListener("keyup", (e) => {
    console.log(e.target.scrollHeight);
    area.style.height = `${e.target.scrollHeight}px`;
  });
});
