import piano_sons from "./piano.js";
import Instrumento from "./instrumento.js";

// Variáveis
const container_teclas = document.getElementById('container-botoes');
const pathSonsPiano = './sounds/piano_sounds';
const drumTitle = document.getElementById('drum-title');
const guitarTitle = document.getElementById('guitar-title');

//Instanciações
const piano = new Instrumento(piano_sons, container_teclas, pathSonsPiano);

//Chamadas de funções

drumTitle.addEventListener('click', ()=>{
    window.location.href ='./index.html'
})

guitarTitle.addEventListener('click', ()=>{
    window.location.href='./guitar.html'
})

piano.exibirTeclas();
piano.listenerClick();

window.addEventListener('keydown', piano.ativarTecla);





