class TorreControle {
    /**
     * @param {string} nome
     * @param {string} localizacao
    */

    constructor(nome, localizacao,) {
        this.nome = nome;
        this.localizacao = localizacao;

        this.ativo = false;
    }

    ativar() {
        this.ativo = true;
        console.log(`A torre de controle ${this.nome} está ativa`);
    }

}