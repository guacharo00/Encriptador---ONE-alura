const btnEncriptar = document.querySelector(".btn-encript");
const textEncriptar = document.querySelector(".normal_text");
const textResult = document.querySelector(".encripted_text");

const reglas = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

// Funcion de encriptaciones
const encriptarTexto = function (texto) {
  // Validande el texto
  if (typeof texto === "string") {
    if (texto.length) {
      // Reemplazando caracteres
      const newStr = texto
        .replace(/\e/g, `${reglas.e}`)
        .replace(/\i/g, `${reglas.i}`)
        .replace(/\a/g, `${reglas.a}`)
        .replace(/\o/g, `${reglas.o}`)
        .replace(/\u/g, `${reglas.u}`);
      textResult.value = newStr;
      textEncriptar.value = "";
    } else {
      throw Error("El texto debe tener almenos un caracter");
    }
  } else {
    throw Error("El argumento debe ser una cadena de caracteres");
  }
};

// agregar funcion al boton
btnEncriptar.addEventListener("click", (e) => {
  const texto = textEncriptar.value;

  encriptarTexto(texto);
});

// Fecha en footer
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
