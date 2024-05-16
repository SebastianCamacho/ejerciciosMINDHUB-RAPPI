let nota = {};
let Notas = [];
let notasFiltro=[];

let ContainerNotas = document.getElementById("cards");

let inputTitulo = document.getElementById("inputTitulo");
let inputNota = document.getElementById("txtAreaNota");

let checkRealizadas = document.getElementById("switchR");


let botonLimpiar = document.getElementById("btnLimpiar");
botonLimpiar.addEventListener("click", function () {
  console.log("limpiando");
  inputTitulo.value = " ";
  inputNota.value = " ";
});

let botonAgregar = document.getElementById("btnAgregar");
botonAgregar.addEventListener("click", function () {
  if (inputTitulo.value.length <= 0 || inputNota.value.length <= 0) {
    alert("Los campos no pueden estar vacios");
  } else {
  nota = {
    titulo: inputTitulo.value,
    descripcion: inputNota.value,
    checkState: false,
  };
  Notas.push(nota);
  mostrarNotas(Notas);
  inputTitulo.value = "";
  inputNota.value = "";
  console.log(Notas);
  }
});

function mostrarNotas(nt) {
  borrarTodo()
  let i = 0;
  nt.forEach((n) => {
    const newCard = createCard(n.titulo, n.descripcion, i, n.checkState);
    ContainerNotas.appendChild(newCard);
    i++;
  });
}

function borrarTodo() {
  while (ContainerNotas.firstChild != null) {
    ContainerNotas.removeChild(ContainerNotas.firstChild);
  }
}

function createCard(title, content, index, state) {
  let col = document.createElement("div");
  col.classList.add(
    "col-10",
    "col-sm-5",
    "col-lg-4",
    "col-xl-3",
    "mb-2",
    "pr-1",
    "align-self-stretch"
  );

  let card = document.createElement("div");
  card.classList.add("card", "h-100");

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "d-flex", "flex-column", "h-100");

  let formCheck = document.createElement("div");
  formCheck.classList.add("form-check");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = state;
  checkbox.classList.add("form-check-input");
  checkbox.id = "checkTitulo" + index;

  let label = document.createElement("label");
  label.classList.add("form-check-label");
  label.setAttribute("for", checkbox.id);

  let strong = document.createElement("strong");
  strong.textContent = title; // Update title with the provided argument

  let cardText = document.createElement("p");
  cardText.classList.add("card-text");
  cardText.textContent = content.toString(); // Update content with the provided argument

  let button = document.createElement("a");
  button.classList.add("btn", "btn-danger", "mt-auto");
  button.id = "btnBorrar" + index;
  button.textContent = "Borrar Nota";

  // Nest the elements within the card structure
  formCheck.appendChild(checkbox);
  formCheck.appendChild(label);
  label.appendChild(strong);
  cardBody.appendChild(formCheck);
  cardBody.appendChild(cardText);
  cardBody.appendChild(button);
  card.appendChild(cardBody);
  col.appendChild(card);

  //AÑADIR EVENTOS
  //TACHAR
  checkbox.addEventListener("change", function () {
    console.log(index);
    if (checkbox.checked) {
      cardText.classList.add("rayado");
      Notas[index].checkState = true;
    } else {
      cardText.classList.remove("rayado");
      Notas[index].checkState = false;
    }
    console.log(Notas);
  });
  //BORRAR
  button.addEventListener("click", function () {
    ContainerNotas.removeChild(col);

    if(inputBuscar.value != ""){
      console.log("input con informacion notas filtradas")
      eliminarNota(notasFiltro[index])
      mostrarNotas(notasFiltro);
    }else{
      console.log("input vacio notas sin filtro")

      Notas.splice(index, 1);
      console.log(Notas);
      mostrarNotas(Notas);
    }

   
  });
  //OCULTAR
  checkRealizadas.addEventListener("change", function () {
    console.log("Entrando al evento");
    if (checkRealizadas.checked && !checkbox.checked) {
      console.log("Chekeado");
      col.classList.add("d-none");
    } else {
      console.log("Sin checkear nota" + title);
      col.classList.remove("d-none");
    }
  });

  return col;
}

function eliminarNota(notaAEliminar) {
  // Eliminar del array principal
  let indicePrincipal = Notas.indexOf(notaAEliminar);
  if (indicePrincipal > -1) {
      Notas.splice(indicePrincipal, 1);
  }

  // Eliminar del array filtrado
  let indiceFiltrado = notasFiltro.indexOf(notaAEliminar);
  if (indiceFiltrado > -1) {
    notasFiltro.splice(indiceFiltrado, 1);
  }
}

let inputBuscar = document.getElementById("buscar");

console.log(inputBuscar);

inputBuscar.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  notasFiltro = Notas.filter((nota) =>
    nota.titulo.toLowerCase().includes(e.target.value.toLowerCase())
  );

  if (e.target.value != "") {
    mostrarNotas(notasFiltro);
  } else {
    mostrarNotas(Notas);
  }
});
