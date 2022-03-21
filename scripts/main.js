const email = document.getElementById("email");
const message = document.getElementById("message");
const resposta = document.getElementById("resposta");

function enviarMensagem(event) {
  event.preventDefault();
  if (validarMensagem()) {
    if (validarEmail(email.value) && validarEmailComprimento(email)) {
      resposta.innerHTML =
        "Obrigado pelo contato, " +
        email.value.substring(0, email.value.indexOf("@")) +
        "!";
    } else {
      resposta.innerHTML = "Erro no envio: Endereço de e-mail inválido!";
    }
  } else {
    resposta.innerHTML = "Erro no envio: Insira uma mensagem!";
  }
}

function validarMensagem() {
  if (message.value) {
    return true;
  } else {
    return false;
  }
}

function validarEmail(email) {
  const re = /[A-Za-z0-9.]+@[a-z0-9]+\.\S+/;
  return re.test(email);
}

function validarEmailComprimento(email) {
  const user = email.value.substring(0, email.value.indexOf("@"));
  const domain = email.value.substring(
    email.value.indexOf("@") + 1,
    email.value.indexOf(".")
  );
  if (
    user.length >= 1 &&
    user.length <= 32 &&
    domain.length >= 1 &&
    domain.length <= 16
  ) {
    return true;
  } else {
    return false;
  }
}
