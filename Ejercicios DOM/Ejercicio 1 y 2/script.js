let peso = document.getElementById("peso");
let estatura = document.getElementById("estatura");
let resultado = document.getElementById("resultado");

let botonCalcular = document.getElementById("btnCalcular");
botonCalcular.addEventListener("click", function () {
  console.log("Calculando");
  let pesoValue = peso.value;
  let estaturaValue = estatura.value / 100;
  let resultadoValue = pesoValue / (estaturaValue * estaturaValue);
  resultado.value = resultadoValue;
});

let COP = document.getElementById("COP");
let USD = document.getElementById("USD");

COP.addEventListener("input", function () {
  let valor = COP.value / 3988;
  USD.value = valor.toFixed(4);
  
});

USD.addEventListener("input", function () {
  let valor = USD.value * 3988;
  COP.value = valor;
});
