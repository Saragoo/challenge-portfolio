document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Capturar os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação básica
    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Enviar os dados para o servidor
    fetch('http://localhost:3000/api/contato', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Informar que os dados serão enviados no formato JSON
        },
        body: JSON.stringify({ nome, email, mensagem }) // Converter os dados para JSON
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Erro ao enviar a mensagem');
    })
    .then(data => {
        alert(data.message); // Mensagem de sucesso vinda do servidor
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar a mensagem.');
    });
});
