// Variáveis globais de https://dashboard.emailjs.com/admin: window._publicKey, window._serviceId, window._templateId); colocadas em dadosEmail.js

document.addEventListener("DOMContentLoaded", function () {
  // Inicialize o EmailJS com seu User ID
  emailjs.init(window._publicKey);

  function sendEmail(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos inputs
    const email = document.getElementById("email").value;
    const assunto = document.getElementById("assunto").value;
    const conteudo = document.getElementById("conteudo").value;

    // Validação
    const isValid = validateForm(email, assunto, conteudo);

    if (!isValid) {
      return; // Se não for válido, não continua o envio
    }

    // Chama o EmailJS para enviar o email
    emailjs
      .send(window._serviceId, window._templateId, {
        from_email: email,
        subject: assunto,
        message: conteudo,
      })
      .then(
        function (response) {
          console.log("Email enviado com sucesso!", response.status, response.text);
          alert("Email enviado com sucesso!");

          // Limpa os inputs após o envio
          document.getElementById("email").value = "";
          document.getElementById("assunto").value = "";
          document.getElementById("conteudo").value = "";

          // Limpa mensagens de erro após o envio
          document.getElementById("emailError").textContent = "";
          document.getElementById("assuntoError").textContent = "";
          document.getElementById("conteudoError").textContent = "";
        },
        function (error) {
          console.error("Erro ao enviar o email:", error);
          alert("Erro ao enviar o email. Tente novamente.");
        }
      );
  }

  // Adiciona o evento de clique ao botão de envio
  document.getElementById("btnEnviar").addEventListener("click", sendEmail);
});
