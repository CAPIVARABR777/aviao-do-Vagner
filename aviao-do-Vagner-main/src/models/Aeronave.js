class Aeronave {
    /**
     * @param {string} nome
     * @param {string} cor
     * @param {string} tamanho
     */

    constructor(nome, cor, tamanho){
        this.nome = nome;
        this.cor = cor;
        this.tamanho = tamanho;

        this.decolou = false;
    }

       Vaidecolar() {
        this.decolou = true;
        console.log(`o aviao ${this.nome} decolou`);
    }
}