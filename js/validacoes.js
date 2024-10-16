// Função para validar o formato do e-mail

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Função para validar o formulário
function validateForm(email, assunto, conteudo) {
  let isValid = true;

  // Limpa mensagens de erro anteriores
  document.getElementById("emailError").textContent = "";
  document.getElementById("assuntoError").textContent = "";
  document.getElementById("conteudoError").textContent = "";

  // Validação do email
  if (!validateEmail(email)) {
    document.getElementById("emailError").textContent = "Por favor, insira um e-mail válido!";
    isValid = false;
  }

  // Validação do assunto
  if (!assunto.trim()) {
    document.getElementById("assuntoError").textContent = "O assunto não pode estar vazio!";
    isValid = false;
  }

  // Validação do conteúdo
  if (!conteudo.trim()) {
    document.getElementById("conteudoError").textContent = "O conteúdo não pode estar vazio!";
    isValid = false;
  }

  return isValid; // Retorna verdadeiro se todas as validações forem bem-sucedidas
}
