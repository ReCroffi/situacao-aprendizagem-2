# SA2 - NovaWeb: login e perfil

Situação de Aprendizagem 2 de Desenvolvimento Web I (FATEC Olímpia, prof. Rodrigo Attique).
Trabalho individual. Duas telas feitas a partir dos wireframes do Figma: login e perfil do usuário.

## Como abrir

Abra o `index.html` no navegador. O login de teste é:

- E-mail: `marina.oliveira@exemplo.com`
- Senha: `novaweb123`

Se o login der certo, abre o `perfil.html`. No perfil, "Sair da conta" volta ao login.

## Pastas

```
index.html          tela de login
perfil.html         tela de perfil
assets/css/         styles.css (um só arquivo para as duas telas)
assets/js/          login.js e perfil.js
assets/img/         avatar.webp
assets/wireframes/  PNGs do Figma
```

## O que cada tela faz

- **Login:** confere e-mail e senha. Mostra um aviso se algo estiver errado.
- **Perfil:** os campos abrem travados. O botão Editar libera, Cancelar volta ao valor salvo, Salvar trava de novo. O botão Alterar foto troca o avatar. A busca da topbar é só visual.

## Decisões técnicas

1. **Cores em variáveis no `:root`.** Todas as telas usam as mesmas cores. Mudar uma cor é mexer em um lugar só.
2. **Classes novas para o perfil, sem mexer nas regras do login.** Assim o login não muda quando o perfil muda.
3. **`readonly` em vez de `disabled` nos campos.** O campo travado ainda recebe foco e vai no envio do formulário.
4. **Avatar em WebP, 176 × 176.** A imagem aparece em 88 × 88. O dobro mantém a nitidez em telas de alta densidade. O arquivo tem cerca de 1 KB.
5. **CSS próprio, sem Bootstrap.** O projeto é pequeno e o enunciado pede estilização com CSS.
6. **`alert` nas validações.** É o que usamos nas aulas.

## Problemas encontrados

1. **Regras do login não serviam no perfil.** A `.sidebar` tem 360 px e o perfil precisa de 240 px. O `.fimpagina` tinha `margin-top: auto`, que brigava com o "Sair da conta". Resolvi com classes extras (`sidebar-perfil`, `sair`) em vez de mudar o que já funcionava.
2. **Senha na URL.** O formulário usa `method="get"`. Sem cuidado, a senha aparece na barra de endereço. A função `validarLogin` devolve `false` e abre o perfil pelo JS.
3. **Cancelar voltava para o valor antigo.** O Cancelar usa o `defaultValue`. Depois de salvar, o `defaultValue` ainda era o texto original. Agora o Salvar atualiza o `defaultValue`.
4. **O navegador valida antes do JS.** Os campos têm `required` e o e-mail é `type="email"`. Por isso, com campo vazio, aparece o aviso do navegador e o `alert` não roda.

## Limites

- O login compara com um e-mail e uma senha escritos no `login.js`. Qualquer pessoa pode ver. Num sistema real isso é feito no servidor.
- O Salvar não grava nada. Recarregar a página volta aos dados originais.
- O cadastro e a página de consulta com tabela ficaram fora do escopo.
- Links com `#` (Cadastre-se, Esqueci minha senha, Segurança, Preferências, Ajuda) são só visuais.

## Imagem

O avatar é uma silhueta simples, gerada com ImageMagick. Não usa foto de ninguém.
