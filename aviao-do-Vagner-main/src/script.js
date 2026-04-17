class Voo {
    #combustivel = 100;

    constructor(codigo, origem, destino) {
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
        if (quantidade < 0) {
            console.log("Erro");
        } else if (this.#combustivel + quantidade > 100) {
            this.#combustivel = 100;
        } else {
            this.#combustivel += quantidade;
        }
        this.atualizarInterface();
    }

    gastarCombustivel(valor) {
        if (this.#combustivel - valor < 0) {
            this.#combustivel = 0;
            this.pousar();
        } else {
            this.#combustivel -= valor;
        }
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
            alert("Combustível insuficiente!");
        }
    }

    pousar() {
        this.status = "Pousado";
        this.altitude = 0;
        this.atualizarInterface();
    }

    atualizarInterface() {}
}

class JatoExecutivo extends Voo {
    constructor(codigo, origem, destino) {
        super(codigo, origem, destino);
        this.modoSupersonico = false;
    }

    ativarSupersonico() {
        if (this.status === "Em Voo") {
            this.modoSupersonico = true;
            this.altitude += 20000;
            this.gastarCombustivel(20);
        } else {
            alert("Decole primeiro!");
        }
    }

    desativarSupersonico() {
        this.modoSupersonico = false;
        if (this.altitude > 5000) this.altitude -= 15000;
        this.atualizarInterface();
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

class VooCarga extends Voo {
    constructor(codigo, origem, destino, capacidadeMaxima) {
        super(codigo, origem, destino);
        this.capacidadeMaxima = capacidadeMaxima;
        this.cargaAtual = 0;
    }

    embarcarCarga(toneladas) {
        if (this.cargaAtual + toneladas <= this.capacidadeMaxima) {
            this.cargaAtual += toneladas;
            this.atualizarInterface();
        } else {
            alert("Erro: Limite excedido!");
        }
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

const meuJato = new JatoExecutivo("VIP-01", "Paris", "Dubai");
const meuCargueiro = new VooCarga("BELUGA-99", "Manaus", "São Paulo", 100);

function gastarJato() { 
    meuJato.gastarCombustivel(10); 
}

function abastecerJato() { 
    meuJato.abastecer = 10; 
}

function prepararEmbarque() {
    const tons = parseFloat(document.getElementById('input-toneladas').value);
    if (!isNaN(tons)) meuCargueiro.embarcarCarga(tons);
}

meuJato.atualizarInterface();
meuCargueiro.atualizarInterface();