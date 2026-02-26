class Voo {
    constructor(codigo, origem, destino) {
        this.codigo = codigo;
        this.origem = origem;
        this.destino = destino;
        this.altitude = 0;
        this.status = "No Solo";
    }

    atualizarInterface() {
        document.getElementById('display-codigo').innerText = this.codigo;
        document.getElementById('display-origem').innerText = this.origem;
        document.getElementById('display-destino').innerText = this.destino;
        document.getElementById('display-altitude').innerText = this.altitude;
        
        const elementoStatus = document.getElementById('display-status');
        const img = document.getElementById('img-aviao');

        elementoStatus.innerText = this.status;

        if (this.status === "No Solo" || this.status === "Pousado") {
            elementoStatus.style.backgroundColor = "#c0392b";
            img.classList.remove('borda-voo');
        } else {
            elementoStatus.style.backgroundColor = "#27ae60";
            img.classList.add('borda-voo');
        }
    }

    decolar() {
        this.status = "Em Voo";
        this.altitude = 500;
        this.atualizarInterface();
        document.getElementById('img-aviao').classList.add('decolando');
    }

    subir() {
        if (this.status === "Em Voo") {
            this.altitude += 1000;
            this.atualizarInterface();
        } else {
            alert("Decole primeiro!");
        }
    }

    pousar() {
        this.status = "Pousado";
        this.altitude = 0;
        document.getElementById('img-aviao').classList.remove('decolando');
        this.atualizarInterface();
    }
}

const meuVoo = new Voo("AD-2026", "São Paulo", "Nova York");
meuVoo.atualizarInterface();