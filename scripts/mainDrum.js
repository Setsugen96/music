import drum_sons from "./drum.js"; 
import Instrumento from "./instrumento.js";

// Variáveis
const container_teclas = document.getElementById('container-botoes');
const pathSonsDrum = './sounds/drum_sounds';
const guitarTitle = document.getElementById('guitar-title');
const pianoTitle = document.getElementById('piano-title');

//Instanciações
const drum = new Instrumento(drum_sons, container_teclas, pathSonsDrum);

//Chamadas de funções

guitarTitle.addEventListener('click', ()=>{
    window.location.href ='./guitar.html'
})


pianoTitle.addEventListener('click', ()=>{
    window.location.href ='./piano.html'
})

drum.exibirTeclas();
drum.listenerClick();

window.addEventListener('keydown', drum.ativarTecla);






