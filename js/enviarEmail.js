// Função para enviar o email

// Variáveis globais de https://dashboard.emailjs.com/admin: window._publicKey, window._serviceId, window._templateId); colocadas em dadosEmail.js

// Inicialize o EmailJS com seu User ID
emailjs.init(window._publicKey);

function sendEmail(event) {
  event.preventDefault(); // Evita o envio padrão do formulário

  // Obtém os valores dos inputs
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("assunto").value;
  const conteudo = document.getElementById("conteudo").value;

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
      },
      function (error) {
        console.error("Erro ao enviar o email:", error);
        alert("Erro ao enviar o email. Tente novamente.");
      }
    );
}

// Adiciona o evento de clique ao botão de envio
document.querySelector(".enviarEmail button").addEventListener("click", sendEmail);
