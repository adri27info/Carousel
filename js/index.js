const botones = document.querySelectorAll("button");
const imagenes = [
  {
    id: "paisaje1",
    src: "img/paisaje1.jpg",
  },
  {
    id: "paisaje2",
    src: "img/paisaje2.jpg",
  },
  {
    id: "paisaje3",
    src: "img/paisaje3.jpg",
  },
];

botones.forEach((element) => {
  element.addEventListener("click", comprobarImagen);
});

function comprobarImagen(boton) {
  let btn = document.getElementById(boton.target.id);
  let hijosPadreBtn = boton.target.parentNode.childNodes;
  let imagen = "";
  let idImagen = "";

  for (let index = 0; index < hijosPadreBtn.length; index++) {
    if (hijosPadreBtn[index].tagName === "IMG") {
      imagen = hijosPadreBtn[index];
    }
  }

  idImagen = parseInt(imagen.id.replace("paisaje", ""));
  cambiarImagen(btn, idImagen);
}

function cambiarImagen(btn, idImagen) {
  let boton = btn.id;
  let id = idImagen - 1;
  comprobarOrdenImagen(idImagen, boton, id);
}

function comprobarOrdenImagen(idImagen, boton, id) {
  if (boton === "left") {
    if (idImagen === 1) {
      document.getElementById("paisaje" + idImagen).src = imagenes[imagenes.length - 1].src;
      document.getElementById("paisaje" + idImagen).id = imagenes[imagenes.length - 1].id;
      document.getElementById("boton" + idImagen).classList.remove("activo");
      document.getElementById("boton3").classList.add("activo");
    } else {
      document.getElementById("paisaje" + idImagen).src = imagenes[id - 1].src;
      document.getElementById("paisaje" + idImagen).id = imagenes[id - 1].id;
      document.getElementById("boton" + idImagen).classList.remove("activo");
      document.getElementById("boton" + id).classList.add("activo");
    }
  } else if (boton === "right") {
    if (idImagen === imagenes.length) {
      document.getElementById("paisaje" + idImagen).src = imagenes[0].src;
      document.getElementById("paisaje" + idImagen).id = imagenes[0].id;
      document.getElementById("boton" + idImagen).classList.remove("activo");
      document.getElementById("boton1").classList.add("activo");
    } else {
      document.getElementById("paisaje" + idImagen).src = imagenes[idImagen].src;
      document.getElementById("paisaje" + idImagen).id = "paisaje" + (idImagen + 1);
      document.getElementById("boton" + (id + 1)).classList.remove("activo");
      document.getElementById("boton" + (idImagen + 1)).classList.add("activo");
    }
  }
}
