class Voo {
    constructor(codigo, origem, destino) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.altitude = 0;
        this.status = "No Solo";
    }

    comunicarTorre() {
        return `Torre, aqui é o voo ${this.codigo} solicitando instruções.`;
    }

    decolar() {
        this.status = "Em Voo";
        this.altitude = 500;
        this.atualizarInterface();
    }

    pousar() {
        this.status = "Pousado";
        this.altitude = 0;
        this.atualizarInterface();
    }

    atualizarInterface() {
        
    }
}

class JatoExecutivo extends Voo {
    constructor(codigo, origem, destino) {
        super(codigo, origem, destino);
        this.modoSupersonico = false;
    }

    comunicarTorre() {
        return `Torre, voo VIP ${this.codigo} na escuta, prioridade de pouso.`;
    }

    ativarSupersonico() {
        if (this.status === "Em Voo") {
            this.modoSupersonico = true;
            this.altitude += 20000;
            this.atualizarInterface();
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
        const badge = document.getElementById('jato-status');
        
        if (this.status === "Em Voo") {
            img.classList.add('borda-voo', 'decolando');
            badge.style.backgroundColor = "#27ae60";
        } else {
            img.classList.remove('borda-voo', 'decolando');
            badge.style.backgroundColor = "#c0392b";
        }
    }
}

class VooCarga extends Voo {
    constructor(codigo, origem, destino, capacidadeMaxima) {
        super(codigo, origem, destino);
        this.capacidadeMaxima = capacidadeMaxima;
        this.cargaAtual = 0;
    }

    comunicarTorre() {
        return `Torre, cargueiro pesado ${this.codigo} se aproximando.`;
    }

    embarcarCarga(toneladas) {
        if (this.cargaAtual + toneladas <= this.capacidadeMaxima) {
            this.cargaAtual += toneladas;
            this.atualizarInterface();
            console.log("Carga embarcada com sucesso!");
        } else {
            alert("Erro: Capacidade máxima excedida!");
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
        const badge = document.getElementById('carga-status');

        if (this.status === "Em Voo") {
            img.classList.add('borda-voo', 'decolando');
            badge.style.backgroundColor = "#27ae60";
        } else {
            img.classList.remove('borda-voo', 'decolando');
            badge.style.backgroundColor = "#c0392b";
        }
    }
}

const meuJato = new JatoExecutivo("VIP-01", "Paris", "Dubai");
const meuCargueiro = new VooCarga("BELUGA-99", "Manaus", "São Paulo", 100);

function prepararEmbarque() {
    const tons = parseFloat(document.getElementById('input-toneladas').value);
    if (!isNaN(tons)) meuCargueiro.embarcarCarga(tons);
}

meuJato.atualizarInterface();
meuCargueiro.atualizarInterface();