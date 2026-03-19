class Bagagem {
    /**
     * @param {string} dono
     * @param {string} cor
     * @param {number} peso
     */

    constructor(dono, cor, peso) {
        this.dono = dono;
        this.cor = cor;
        this.peso = peso;

        this.foi_despachada = false;
    }

    despachar() {
        this.foi_despachada = true;
        console.log(`A bagagem de ${this.dono} foi despachada`);
    }
}