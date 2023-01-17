const controles = document.getElementById("controls");
const btn = document.querySelector(".btn");
const cssTexto = document.querySelector(".text-code");

controles.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,

  texto(valor) {
    this.element.innerText = valor;
  },
  color(valor) {
    this.element.style.color = valor;
  },
  backgroundColor(valor) {
    this.element.style.backgroundColor = valor;
  },
  height(valor) {
    this.element.style.height = valor + "px";
  },
  width(valor) {
    this.element.style.width = valor + "px";
  },
  border(valor) {
    this.element.style.border = valor;
  },
  borderRadius(valor) {
    this.element.style.borderRadius = valor + "px";
  },
  fontFamily(valor) {
    this.element.style.fontFamily = valor;
  },
  fontSize(valor) {
    this.element.style.fontSize = valor + "rem";
  }
};

function handleChange(event) {
  const nome = event.target.name;
  const valor = event.target.value;

  handleStyle[nome](valor);
  saveValues(nome, valor);
  showCss();
}

function saveValues(nome, valor) {
  localStorage[nome] = valor;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach(propertie => {
    handleStyle[propertie](localStorage[propertie]);
    controles.elements[propertie].value = localStorage[propertie];
  });
  showCss();
}

setValues();

function showCss() {
  cssTexto.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}
