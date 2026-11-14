/*
descricao: Situacao de Aprendizagem 2.
nome_arquivo: perfil.js
nome_exercicio: SA2 - Tela de Perfil
nome_aluno: Renan Croffi
email_aluno: renan.croffi@aluno.cps.sp.gov.br
turma: WEBI-ISW028-A
*/


function travarCampos(travar) {
  document.getElementById('nome').readOnly = travar;
  document.getElementById('email').readOnly = travar;
  document.getElementById('telefone').readOnly = travar;
}


function editarPerfil() {
  travarCampos(false);
  document.getElementById('nome').focus();
}

function cancelarEdicao() {
  let nome = document.getElementById('nome');
  let email = document.getElementById('email');
  let telefone = document.getElementById('telefone');

  nome.value = nome.defaultValue;
  email.value = email.defaultValue;
  telefone.value = telefone.defaultValue;
  travarCampos(true);
}


function salvarPerfil() {
  let nome = document.getElementById('nome');
  let email = document.getElementById('email');
  let telefone = document.getElementById('telefone');

  nome.defaultValue = nome.value;
  email.defaultValue = email.value;
  telefone.defaultValue = telefone.value;
  travarCampos(true);
  return false;
}


function escolherFoto() {
  document.getElementById('arquivo-foto').click();
}


function trocarFoto() {
  let entrada = document.getElementById('arquivo-foto');
  let arquivo = entrada.files[0];

  if (arquivo == undefined) {
    return;
  }
  if (!arquivo.type.startsWith('image/')) {
    alert('Escolha um arquivo de imagem');
    return;
  }

  document.getElementById('avatar').src = URL.createObjectURL(arquivo);
}
