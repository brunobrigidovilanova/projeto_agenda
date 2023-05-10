const form = document.getElementById('form-atividade');
const contatos = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaAgenda();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if (contatos.includes(inputTelefoneContato.value)) {
    alert(`O telefone de contato: ${inputTelefoneContato.value} ja foi inserido`);
    } else {
    contatos.push(inputTelefoneContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefoneContato.value}</td>`;
    linha += '</tr>';
    
    linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaAgenda() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

