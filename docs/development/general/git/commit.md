# Formato

Este projeto segue o padrão de `Conventional Commits`, com base na configuração.

O formato do commit deve sempre ser conforme abaixo, e pode ser conferido no arquivo `commitlint.config.js`.

```sh
# Commit simples
type(scope): description

# Commit completo
type(scope): description
<line-break>
additional description
```

---

# Composição

- As variações de `type` disponíveis são:
    - `feat`: Nova funcionalidade da aplicação;
    - `fix`: Correção de problema ou bug;
    - `chore`: Alteração de processos de build, bibliotecas, ou código não-invasivo a qualquer funcionalidade;
    - `test`: Implementação de testes;
    - `docs`: Inclusão ou alteração de documentações;
    - `refactor`: Refatoração ou melhoria de código de funcionalidade já existente;

- O `scope` deve ser definido junto com sua equipe, mas geralmente é um identificador simples da alteração que está entrando em efeito, ou o número do card do JIRA.

- O `description` é uma descrição breve, em inglês, da sua alteração.

- O `<line-break>` é uma quebra de linha em branco, caso vá adicionar um `additional description` com detalhes adicionais.

---

# Regras

- `type`, `scope` e `description` são mandatórios.

- `additional description` é opcional, utilizar commit simples quando puder.

- Deve ser sempre em *lowercase* e em *inglês* (tome cuidado com a ortografia).

---

# Exemplos

```sh
# Simples
feat(cards): adding services screen

# Simples
feat(pix): wrong contacts being loaded

# Completo
feat(home): adding deeplinks

these deeplinks were configured to automatically redirect the user to specific screens
```