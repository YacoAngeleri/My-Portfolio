const color = "gray";
const color1 = "black";
const BackgroundSun = "rgb(41, 112, 136)";
const BackgroundMoon = "rgb(65, 64, 64)";
const BackgroundTitutloSecSun = "rgb(15, 79, 100)"
const BackgroundTitutloSecMoon = "rgb(41, 46, 48)"
const BackgroundSecSun = "rgb(24, 92, 115)";
const BackgroundSecMoon = "rgb(51, 51, 51)";
const BackgroundlanguagueSun = "rgb(64, 155, 186)";
const BackgroundlanguagueMoon = "rgb(185, 185, 185)";


//Boton dark mode
document.getElementById('id-sun').onclick = function(){
    document.getElementById('id-sun').style.background = color1;
    document.getElementById('acercaDeMi').style.color = color1;
    document.getElementById('educacionTitulo').style.color = color1;
    document.getElementById('exp').style.color = color1;
    document.getElementById('skill').style.color = color1;
    document.getElementById('curriculumTitulo').style.color = color1;
    document.getElementById('contacto').style.color = color1;
    document.getElementById('body').style.background = "radial-gradient(rgb(103, 184, 211), rgb(78, 160, 187), rgb(54, 129, 154), rgb(35, 100, 122), rgb(26, 84, 103), rgb(19, 71, 89), rgb(14, 63, 79), rgb(10, 52, 67), rgb(6, 40, 52))";
    document.getElementById('ingles').style.background = BackgroundlanguagueSun;
    document.getElementById('ingles').style.color = color1;
    document.getElementById('español').style.background = BackgroundlanguagueSun;
    document.getElementById('español').style.color = color1;
    document.getElementById('container-about-me').style.background = BackgroundSun;
    document.getElementById('container-educacion').style.background = BackgroundSun;
    document.getElementById('container-paginas').style.background = BackgroundSun;
    document.getElementById('container-habilidades').style.background = BackgroundSun;
    document.getElementById('container-habilidades').style.background = BackgroundSun;
    document.getElementById('am').style.background = BackgroundTitutloSecSun;
    document.getElementById('cursoOracle').style.background = BackgroundTitutloSecSun;
    document.getElementById('cursoOP').style.background = BackgroundTitutloSecSun;
    document.getElementById('colegio').style.background = BackgroundTitutloSecSun;
    document.getElementById('encriptador').style.background = BackgroundTitutloSecSun;
    document.getElementById('rafaNadal').style.background = BackgroundTitutloSecSun;
    document.getElementById('habilidades-principales').style.background = BackgroundTitutloSecSun;
    document.getElementById('habilidades-principiante').style.background = BackgroundTitutloSecSun;
    document.getElementById('curriculumSpanish').style.background = BackgroundTitutloSecSun;
    document.getElementById('curriculumEnglish').style.background = BackgroundTitutloSecSun;
    document.getElementById('nameForm').style.background = BackgroundTitutloSecSun;
    document.getElementById('emailForm').style.background = BackgroundTitutloSecSun;
    document.getElementById('asuntoForm').style.background = BackgroundTitutloSecSun;
    document.getElementById('mensajeForm').style.background = BackgroundTitutloSecSun;
    document.getElementById('card').style.background = BackgroundSecSun;
    document.getElementById('card1').style.background = BackgroundSecSun;
    document.getElementById('card2').style.background = BackgroundSecSun;
    document.getElementById('card3').style.background = BackgroundSecSun;
    document.getElementById('card4').style.background = BackgroundSecSun;
    document.getElementById('container-curriculum').style.background = BackgroundSun;
    document.getElementById('container-formulario').style.background = BackgroundSun;
    document.getElementById('sendForm').style.background = BackgroundlanguagueSun;
    document.getElementById('btn-back-to-top').style.background = "#141c38";
    document.getElementById('id-moon').classList.remove('active'); 
    this.classList.add('active');
  }
  document.getElementById('id-moon').onclick = function(){
    document.getElementById('acercaDeMi').style.color = color;
    document.getElementById('educacionTitulo').style.color = color;
    document.getElementById('exp').style.color = color;
    document.getElementById('skill').style.color = color;
    document.getElementById('curriculumTitulo').style.color = color;
    document.getElementById('contacto').style.color = color;
    document.getElementById('id-sun').classList.remove('active');
    document.getElementById('id-sun').style.background = "rgb(30, 30, 30)";
    document.getElementById('body').style.background = "radial-gradient(rgb(78, 78, 78), rgb(65, 64, 64), rgb(51, 51, 51), rgb(29, 29, 29), rgb(17, 17, 17), rgb(8, 8, 8), rgb(0, 0, 0))";
    document.getElementById('ingles').style.background = BackgroundMoon;
    document.getElementById('ingles').style.color = BackgroundlanguagueMoon;
    document.getElementById('español').style.background = BackgroundMoon;
    document.getElementById('español').style.color = BackgroundlanguagueMoon;
    document.getElementById('container-about-me').style.background = BackgroundMoon;
    document.getElementById('container-educacion').style.background = BackgroundMoon;
    document.getElementById('container-paginas').style.background = BackgroundMoon;
    document.getElementById('container-habilidades').style.background = BackgroundMoon;
    document.getElementById('am').style.background = BackgroundTitutloSecMoon;
    document.getElementById('cursoOracle').style.background = BackgroundTitutloSecMoon;
    document.getElementById('cursoOP').style.background = BackgroundTitutloSecMoon;
    document.getElementById('colegio').style.background = BackgroundTitutloSecMoon;
    document.getElementById('encriptador').style.background = BackgroundTitutloSecMoon;
    document.getElementById('rafaNadal').style.background = BackgroundTitutloSecMoon;
    document.getElementById('habilidades-principales').style.background = BackgroundTitutloSecMoon;
    document.getElementById('habilidades-principiante').style.background = BackgroundTitutloSecMoon;
    document.getElementById('curriculumSpanish').style.background = BackgroundTitutloSecMoon;
    document.getElementById('curriculumEnglish').style.background = BackgroundTitutloSecMoon;
    document.getElementById('nameForm').style.background = BackgroundTitutloSecMoon;
    document.getElementById('emailForm').style.background = BackgroundTitutloSecMoon;
    document.getElementById('asuntoForm').style.background = BackgroundTitutloSecMoon;
    document.getElementById('mensajeForm').style.background = BackgroundTitutloSecMoon;
    document.getElementById('card').style.background = BackgroundSecMoon;
    document.getElementById('card1').style.background = BackgroundSecMoon;
    document.getElementById('card2').style.background = BackgroundSecMoon;
    document.getElementById('card3').style.background = BackgroundSecMoon;
    document.getElementById('card4').style.background = BackgroundSecMoon;
    document.getElementById('container-curriculum').style.background = BackgroundMoon;
    document.getElementById('container-formulario').style.background = BackgroundMoon;
    document.getElementById('sendForm').style.background = BackgroundSecMoon; 
    document.getElementById('btn-back-to-top').style.background = BackgroundMoon;
    this.classList.add('active')
  }
  