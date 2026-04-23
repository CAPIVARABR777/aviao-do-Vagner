import Voo, { JatoExecutivo, VooCarga } from './Voo.js';

const meuJato = new JatoExecutivo("VIP-01", "Paris", "Dubai");
const meuCargueiro = new VooCarga("BELUGA-99", "Manaus", "São Paulo", 100);

function executarComSeguranca(operacao, elementoFeedback) {
    try {
        operacao();
        const msg = document.getElementById(elementoFeedback);
        msg.style.color = "#27ae60";
    } catch (erro) {
        const msg = document.getElementById(elementoFeedback);
        msg.innerText = erro.message;
        msg.style.color = "#e74c3c";
        console.error("Falha no Sistema: " + erro.message);
    }
}

window.decolarJato = () => executarComSeguranca(() => meuJato.decolar(), 'jato-comunicacao');
window.ativarSuper = () => executarComSeguranca(() => meuJato.ativarSupersonico(), 'jato-comunicacao');
window.abastecerJato = () => meuJato.abastecer = 10;
window.gastarJato = () => meuJato.gastarCombustivel(10);
window.pousarJato = () => meuJato.pousar();

window.prepararEmbarque = () => {
    const tons = parseFloat(document.getElementById('input-toneladas').value);
    executarComSeguranca(() => meuCargueiro.embarcarCarga(tons), 'carga-comunicacao');
};

window.decolarCarga = () => executarComSeguranca(() => meuCargueiro.decolar(), 'carga-comunicacao');
window.pousarCarga = () => meuCargueiro.pousar();

meuJato.atualizarInterface();
meuCargueiro.atualizarInterface();