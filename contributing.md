# Definicao das regras de contribuicao (Github, Git, rotas e commits) - Guia de Contribuicao

CONTEM:
- Fluxo de trabalho (commit, branches)
- Comandos Git a serem usados e mensagens de commits

> Source: [Documento Orientador](https://drive.google.com/file/d/1qn06BrPyiJWv9VWs2oK44y4W4KxaSAbi/view)

## Fluxo de Trabalho:
Para cada processo de commit, add e cricao de branches, deve ter uma padronizacao especifica, que sera detalhada abaixo.
- Para fazer o desenvolvimento de uma funcionalidade que nao esta pronta, deve-se criar uma branch adjacente, que nao eh diretamente na `\main`
- Quando essa funcionalidade estiver toda pronta, deve ter um merge na branch main
- Portanto, na **`\main`** deve conter apenas codigo estavel e funcionando, para nao causar divergencias e problema na estrutura inteira do projeto
- Quando for criar uma branch para modificar ou criar uma nova feature, o nome dela deve ser padronizado, sendo: `feature/nome-da-feature`
    - `git checkout -b feature/<nome_da_branch>`
- Cada mensagem de commit deve comecar com uma palavra chave que descreve o que o commit adiciona no repositorio.
    - Essas palavras chaves sao as globalmente padronizadas mesmo: feat (novo atributo adicionado), fix (concertar algo), docs (adicionar alguma documentacao)

## Verificar via terminal:
Para visualizar como o repositorio se encontra e qual eh a organizacao atual de commits e branches, antes de submeter:
> `git log --graph --oneline --all > recibo-aula.txt`