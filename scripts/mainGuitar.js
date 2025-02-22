import guitar_sons from "./guitarra.js";
import Instrumento from "./instrumento.js";

// Variáveis
const container_teclas = document.getElementById('container-botoes');
const pathSonsGuitar = './sounds/guitar_sounds';
const drumTitle = document.getElementById('drum-title');
const pianoTitle = document.getElementById('piano-title');

//Instanciações
const guitar = new Instrumento(guitar_sons, container_teclas, pathSonsGuitar );

//Chamadas de funções

drumTitle.addEventListener('click', ()=>{
    window.location.href ='./index.html'
})

pianoTitle.addEventListener('click', ()=>{
    window.location.href ='./piano.html'
})

guitar.exibirTeclas();
guitar.listenerClick();



window.addEventListener('keydown', guitar.ativarTecla);



