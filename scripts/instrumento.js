'use strict';


class Instrumento {
    constructor(sons, div_containerBotoes, pathSons) {
        this.sons = sons;
        this.div_containerBotoes = div_containerBotoes;
        this.pathSons = pathSons;
    }

    getPathSons() {
        return this.pathSons;
    }

    getSons() {
        return this.sons;
    }

    getDivContainerBotoes() {
        return this.div_containerBotoes;
    }


    criarTeclas_div= (texto, container) =>{
        const  div = document.createElement('div');
        div.classList.add('key');
        div.textContent = texto;
        div.id = texto;
        container.appendChild(div);
    }

    exibirTeclas = () =>{
        Object.keys(this.getSons()).forEach(tecla => this.criarTeclas_div(tecla, this.getDivContainerBotoes()));
    }

    tocarSom = (tecla_letra) =>{
        const audio = new Audio(`${this.getPathSons()}/${this.getSons()[tecla_letra]}`);
        audio.play();
    }

    ativarTecla = (event) =>{
        let tecla_letra;
        if(event.type == 'click') {
            tecla_letra = event.target.id;
        } else {
            tecla_letra = event.key.toUpperCase();
        }
    
        const letraPermitida = this.getSons().hasOwnProperty(tecla_letra);
        if(letraPermitida) {
            this.adicionarEfeito(tecla_letra);
            this.tocarSom(tecla_letra);
        }
    }

    adicionarEfeito = (tecla) =>{
        const tecla_letra = document.getElementById(tecla);
        tecla_letra.classList.add('active');
    
        setTimeout(()=>{
            tecla_letra.classList.remove('active');
        }, 150);
    }

    listenerClick() {
        this.getDivContainerBotoes().addEventListener('click', this.ativarTecla);
    }
}

export default Instrumento;


