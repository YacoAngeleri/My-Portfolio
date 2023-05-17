//Inicializacion de variables
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
const showOnPx = 100;
const botonVolverInicio = document.querySelector(".back-to-top");

//Funciones para cambiar de idioma modificando el contenido de cada linea de texto
function english() {
  document.getElementById("ingles").style.display = "none";
  document.getElementById("español").style.display = "inline";
  cargo.innerHTML = "Front-End Developer Junior";
  educacion.innerHTML = "Education:";
  am.innerHTML = "Bachelor of Multimedia Arts";
  año_am.innerHTML = "2022 / Present (First year finished)";
  universidad.innerHTML = "National University Of The Arts";
  curso.innerHTML = "Front-end developer course";
  año_curso.innerHTML = "2023 / Present";
  empresa_curso.innerHTML =
    "ONE - Oracle Next Education in association with Alura Latam.";
  colegio.innerHTML = "Bachelor of Popular Theater";
  numero_colegio.innerHTML = "School n° 788";
  titulo_pagina.innerHTML = "Proyects:";
  encriptador.innerHTML = "Text Encryptor";
  repositorio.innerHTML = "GitHub Repository";
  github.innerHTML = "GitHub Repository";
  titulo_conocimientos.innerHTML = "Skills:";
}

function spanish() {
  document.getElementById("ingles").style.display = "inline";
  document.getElementById("español").style.display = "none";
  cargo.innerHTML = "Desarrolador Front-End Junior";
  educacion.innerHTML = "Educación:";
  am.innerHTML = "Licenciatura de Artes Multimediales";
  año_am.innerHTML = "2022 / Presente (Primer año finalizado)";
  universidad.innerHTML = "Universidad Nacional De Las Artes";
  curso.innerHTML = "Curso de desarrollador Front-End";
  año_curso.innerHTML = "2023 / Presente";
  empresa_curso.innerHTML = "ONE - Oracle Next Education junto a Alura Latam.";
  colegio.innerHTML = "Bachiller en Teatro Popular";
  numero_colegio.innerHTML = "Colegio n° 788";
  titulo_pagina.innerHTML = "Proyectos:";
  encriptador.innerHTML = "Encriptador De Texto";
  repositorio.innerHTML = "Repositorio de GitHub";
  github.innerHTML = "Repositorio de GitHub";
  titulo_conocimientos.innerHTML = "Habilidades:";
}


//Boton para volver al inicio al scrollear
const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    botonVolverInicio.classList.remove("hidden");
  } else {
    botonVolverInicio.classList.add("hidden");
  }
});

const goToTop = () => {
    document.body.scrollIntoView({
      behavior: "smooth",
    });
  };

botonVolverInicio.addEventListener("click", goToTop);

//Boton dark mode
document.getElementById('id-sun').onclick = function(){
  document.getElementById('body').style.background = "radial-gradient(rgb(103, 184, 211), rgb(78, 160, 187), rgb(54, 129, 154), rgb(35, 100, 122), rgb(26, 84, 103), rgb(19, 71, 89), rgb(14, 63, 79), rgb(10, 52, 67), rgb(6, 40, 52))";
  document.getElementById('ingles').style.background = "rgb(64, 155, 186)";
  document.getElementById('ingles').style.color = "rgb(0,0,0)";
  document.getElementById('español').style.background = "rgb(64, 155, 186)";
  document.getElementById('español').style.color = "rgb(0,0,0)";
  document.getElementById('container-educacion').style.background = "rgb(41, 112, 136)";
  document.getElementById('container-paginas').style.background = "rgb(41, 112, 136)";
  document.getElementById('container-habilidades').style.background = "rgb(41, 112, 136)";
  document.getElementById('card').style.background = "rgb(24, 92, 115)";
  document.getElementById('card2').style.background = "rgb(24, 92, 115)";
  document.getElementById('card3').style.background = "rgb(24, 92, 115)";
  document.getElementById('container-curriculum').style.background = "rgb(41, 112, 136)";
  document.getElementById('id-moon').classList.remove('active');
  this.classList.add('active');
}
document.getElementById('id-moon').onclick = function(){
  document.getElementById('id-sun').classList.remove('active');
  document.getElementById('body').style.background = "radial-gradient(rgb(78, 78, 78), rgb(65, 64, 64), rgb(51, 51, 51), rgb(29, 29, 29), rgb(17, 17, 17), rgb(8, 8, 8), rgb(0, 0, 0))";
  document.getElementById('ingles').style.background = "rgb(65, 64, 64)";
  document.getElementById('ingles').style.color = "rgb(185, 185, 185)";
  document.getElementById('español').style.background = "rgb(65, 64, 64)";
  document.getElementById('español').style.color = "rgb(185, 185, 185)";
  document.getElementById('container-educacion').style.background = "rgb(65, 64, 64)";
  document.getElementById('container-paginas').style.background = "rgb(65, 64, 64)";
  document.getElementById('container-habilidades').style.background = "rgb(65, 64, 64)";
  document.getElementById('card').style.background = "rgb(51, 51, 51)";
  document.getElementById('card2').style.background = "rgb(51, 51, 51)";
  document.getElementById('card3').style.background = "rgb(51, 51, 51)";
  document.getElementById('container-curriculum').style.background = "rgb(65, 64, 64)";
  this.classList.add('active')
}