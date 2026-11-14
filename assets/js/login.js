/*
descricao: Situacao de Aprendizagem 2.
nome_arquivo: login.js
nome_exercicio: SA2 - Tela de Login
nome_aluno: Renan Croffi
email_aluno: renan.croffi@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/

// Usuario de teste. Nao tem servidor, entao o login compara com estes valores.
let emailCorreto = "marina.oliveira@exemplo.com";
let senhaCorreta = "novaweb123";

function validarLogin() {
  let email = document.forms["login"]["email"].value;
  let senha = document.forms["login"]["senha"].value;

  if (email.trim() == "") {
    alert("E-mail deve ser preenchido");
    return false;
  }
  if (!email.includes("@")) {
    alert("E-mail deve ter @");
    return false;
  }
  if (senha == "") {
    alert("Senha deve ser preenchida");
    return false;
  }
  if (senha.length < 6) {
    alert("Senha deve ter pelo menos 6 caracteres");
    return false;
  }

  if (email.trim() != emailCorreto || senha != senhaCorreta) {
    alert("E-mail ou senha incorretos");
    return false;
  }

  // Tudo certo: abre o perfil.
  // O return false impede o envio do formulario, senao a senha iria na URL.
  window.location.href = "perfil.html";
  return false;
}
