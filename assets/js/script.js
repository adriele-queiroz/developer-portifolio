document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Impedir o envio padrão do formulário
    event.preventDefault();

    // Obter os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Criar a URL do WhatsApp com os dados do formulário
    const urlStr = `https://wa.me//5547997372182?text=Olá, meu nome é ${name} e meu email é ${email}. Mensagem: ${message}`;
    
    // Redirecionar o usuário para o link do WhatsApp
    window.location.href = urlStr;
});