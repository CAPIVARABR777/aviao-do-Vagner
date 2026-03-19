class PortaoEmbarque {
    /**
     * @param {string} nome
     * @param {string} localizacao
    */
    constructor(nome, localizacao){
        this.nome = nome;
        this.localizacao = localizacao;

        this.aberto = false;
    }

    AbrirPortao() {
        this.aberto = true;
        console.log(`o portão ${this.nome} abriu`);
    }
}