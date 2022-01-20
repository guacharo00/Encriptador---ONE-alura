const btnEncriptar = document.querySelector(".btn-encript");
const btnDesencriptar = document.querySelector(".btn-decript");
const btnCopiar = document.querySelector(".btn_copy");
const textEncriptar = document.querySelector(".normal_text");
const textResult = document.querySelector(".encripted_text");

const reglas = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const pattern = "[a-zA,Z0-9]";

// Funcion de encriptaciones
const encriptarTexto = function (texto, btnType) {
  textResult.value = validator(texto, btnType);
  textEncriptar.value = "";
};

// Funcion desencriptar
const desencriptarTexto = function (texto) {
  // Validande el texto
  textResult.value = validator(texto);
  textEncriptar.value = "";
};

// Funcion de validacion
const validator = (texto, btnType) => {
  if (typeof texto === "string" && texto.match(pattern) && texto.length) {
    const newText = enDecript(texto, btnType);
    return newText;
  } else {
    throw Error("El argumento debe ser una cadena de caracteres");
  }
};

// Logica para encriptar desencriptar.
const enDecript = function (texto, btnType) {
  let newStr = "";
  if (btnType === "Encriptar") {
    newStr = texto
      .replace(/\e/g, `${reglas.e}`)
      .replace(/\i/g, `${reglas.i}`)
      .replace(/\a/g, `${reglas.a}`)
      .replace(/\o/g, `${reglas.o}`)
      .replace(/\u/g, `${reglas.u}`);
    return newStr;
  } else {
    newStr = texto
      .replace(/\enter/g, `e`)
      .replace(/\imes/g, `i`)
      .replace(/\ai/g, `a`)
      .replace(/\ober/g, `o`)
      .replace(/\ufat/g, `u`);
    return newStr;
  }
};

// Funcion de copiado
const copiar = function (content) {
  if (content.value.length) {
    content.select();
    document.execCommand("copy");
    content.value = "";
  } else {
    throw Error("No hay texto seleccionado");
  }
};

// agregar funcion al boton encriptar
btnEncriptar.addEventListener("click", (e) => {
  const btnType = e.target.innerHTML;

  const texto = textEncriptar.value;
  encriptarTexto(texto.toLowerCase(), btnType);
});

// agregar funcion al boton desencriptar
btnDesencriptar.addEventListener("click", (e) => {
  const texto = textEncriptar.value;
  desencriptarTexto(texto.toLowerCase());
});

// agregar funcion al boton copiar
btnCopiar.addEventListener("click", (e) => {
  // const texto = textResult.value;
  copiar(textResult);
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
