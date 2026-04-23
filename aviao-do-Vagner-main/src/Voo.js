export default class Voo {
    #combustivel = 100;

    constructor(codigo, origem, destino) {
        if (!codigo) throw new Error("Erro de Segurança: Todo voo precisa de um código.");
        if (origem === destino) throw new Error(`Operação Negada: O voo ${codigo} não pode ter origem igual ao destino!`);

        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.altitude = 0;
        this.status = "No Solo";
    }

    get lerCombustivel() {
        return this.#combustivel;
    }

    set abastecer(quantidade) {
        if (quantidade < 0) return;
        this.#combustivel = Math.min(this.#combustivel + quantidade, 100);
        this.atualizarInterface();
    }

    gastarCombustivel(valor) {
        this.#combustivel = Math.max(this.#combustivel - valor, 0);
        if (this.#combustivel === 0) this.pousar();
        this.atualizarInterface();
    }

    comunicarTorre() {
        return `Torre, voo ${this.codigo}. Combustível: ${this.#combustivel}%`;
    }

    decolar() {
        if (this.#combustivel > 10) {
            this.status = "Em Voo";
            this.altitude = 500;
            this.atualizarInterface();
        } else {
            throw new Error("Alerta: Combustível insuficiente para decolagem!");
        }
    }

    pousar() {
        this.status = "Pousado";
        this.altitude = 0;
        this.atualizarInterface();
    }

    atualizarInterface() {}
}

export class JatoExecutivo extends Voo {
    constructor(codigo, origem, destino) {
        super(codigo, origem, destino);
        this.modoSupersonico = false;
    }

    ativarSupersonico() {
        if (this.status !== "Em Voo") throw new Error("Erro: Decole o jato antes de ativar o supersônico!");
        this.modoSupersonico = true;
        this.altitude += 20000;
        this.gastarCombustivel(20);
    }

    atualizarInterface() {
        document.getElementById('jato-codigo').innerText = this.codigo;
        document.getElementById('jato-altitude').innerText = this.altitude;
        document.getElementById('jato-status').innerText = this.status;
        document.getElementById('jato-modo').innerText = this.modoSupersonico ? "SUPERSÔNICO" : "Normal";
        document.getElementById('jato-comunicacao').innerText = this.comunicarTorre();
        
        const img = document.getElementById('img-jato');
        if (this.status === "Em Voo") {
            img.classList.add('borda-voo', 'decolando');
        } else {
            img.classList.remove('borda-voo', 'decolando');
        }
    }
}

export class VooCarga extends Voo {
    constructor(codigo, origem, destino, capacidadeMaxima) {
        super(codigo, origem, destino);
        this.capacidadeMaxima = capacidadeMaxima;
        this.cargaAtual = 0;
    }

    embarcarCarga(toneladas) {
        if (toneladas < 0) throw new Error("Erro: Quantidade de carga inválida.");
        if (this.cargaAtual + toneladas > this.capacidadeMaxima) throw new Error("Erro: Limite de carga excedido!");
        this.cargaAtual += toneladas;
        this.atualizarInterface();
    }

    atualizarInterface() {
        document.getElementById('carga-codigo').innerText = this.codigo;
        document.getElementById('carga-altitude').innerText = this.altitude;
        document.getElementById('carga-status').innerText = this.status;
        document.getElementById('carga-atual').innerText = this.cargaAtual;
        document.getElementById('carga-max').innerText = this.capacidadeMaxima;
        document.getElementById('carga-comunicacao').innerText = this.comunicarTorre();

        const img = document.getElementById('img-carga');
        if (this.status === "Em Voo") {
            img.classList.add('borda-voo', 'decolando');
        } else {
            img.classList.remove('borda-voo', 'decolando');
        }
    }
}