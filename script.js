// Fecha
const footer = document.querySelector("footer");
const fecha = new Date().getFullYear();
const footer_text = `
  <p class="footer_text">
  Creado por <span>Luis Fructuoso</span> &copy;Todos los derechos
  reservados (${fecha})
  </p>
`;
footer.innerHTML = footer_text;
// Auto ajuste del textarea
const textarea = document.querySelectorAll("textarea");
textarea.forEach((area, i) => {
  area.addEventListener("keyup", (e) => {
    console.log(e.target.scrollHeight);
    area.style.height = `${e.target.scrollHeight}px`;
  });
});
