function enviarEmail(){
    const nome = document.getElementById("nome").value.trim(); // pega o nome digitado
    const email = document.getElementById("email").value.trim(); // pega o e-mail digitado
    const mensagem = document.getElementById("mensagem").value.trim(); // pega a mensagem do usuário
    const status = document.getElementById("status"); // elemento para mostrar status de envio
    if(nome === "" ||
       email === "" ||
       mensagem === ""){
        status.innerHTML = "Preencha todos os campos."; // verifica se algum campo ficou vazio
        status.style.color = "red";
        return; // para a função aqui, não continua se algo estiver em branco
    }
    if(!email.includes("@") ||
       !email.includes(".")){
        status.innerHTML = "Digite um e-mail válido."; // verifica se o e-mail tem os símbolos básicos
        status.style.color = "orange";
        return; // para a função se o e-mail não parecer válido
    }
    status.innerHTML = "Mensagem enviada com sucesso!"; // informa que a mensagem foi aceita
    status.style.color = "lime";
    const assunto = "Contato do Site";
    const corpo =
`Nome: ${nome}
E-mail: ${email}
Mensagem:
${mensagem}`;
    window.location.href = `mailto:edgarprogama10@gmail.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`; // abre o aplicativo de e-mail com os dados preenchidos
    document.getElementById("nome").value = ""; // limpa o campo nome depois do envio
    document.getElementById("email").value = ""; // limpa o campo e-mail
    document.getElementById("mensagem").value = ""; // limpa a área de mensagem
}