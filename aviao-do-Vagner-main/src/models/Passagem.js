class Passagem {
    /**
     * @param {string} numero
     * @param {string} vencimento
     */

    constructor(numero, vencimento){
        this.numero = numero;
        this.vencimento = vencimento;

        this.foiussado = false;
    }

       FoiUssadaPraEntrar() {
        this.foiussado = true;
        console.log(`passagem ${this.numero} foi ussada`);
    }
}