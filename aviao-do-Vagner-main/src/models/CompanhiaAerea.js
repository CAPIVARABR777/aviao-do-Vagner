class CompanhiaAerea {
    /**
     * @param {string} nome
     * @param {string} pais
     */

    constructor(nome, pais) {
        this.nome = nome;
        this.pais = pais;

        this.ativa = false;
    }

    iniciarOperacoes() {
        this.ativa = true;
        console.log(`A companhia ${this.nome} ta funcionando`);
    }
}