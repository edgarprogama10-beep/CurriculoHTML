const botaoPortfolio = document.getElementById('portifolio'); // botão para carregar a página portfólio
if (botaoPortfolio) {
    botaoPortfolio.addEventListener('click', () => { // quando o botão portfólio for clicado
        window.location.href = 'portifolio.html';
    });
}
const botaoFormacao = document.getElementById('formacao'); // botão para navegar até formação
if (botaoFormacao) {
    botaoFormacao.addEventListener('click', () => { // quando o botão formação for clicado
        window.location.href = 'Formacao.html';
    });
}
const botaoContato = document.getElementById('contato'); // abre página de contato
if (botaoContato) {
    botaoContato.addEventListener('click', () => { // quando o botão contato for clicado
        window.location.href = 'contato.html';
    });
}

const voltartela = document.getElementById('indexSobre'); // volta à tela principal
if (voltartela) {
    voltartela.addEventListener('click', () => { // quando o botão voltar for clicado
        window.location.href = 'indexSobre.html';
    });
}