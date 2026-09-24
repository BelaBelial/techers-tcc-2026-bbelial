# Planner TCC 2026 - Alicerce do Sistema
> Tudo que vai ser implmentado vai constar neste arquivo, entao ele vai funcionar como um norte para as decisoes do TCC e os processos evolutivos de desenvolvimento.

$\rightarrow$ [Arquivo Orientador](https://app.notion.com/pChegou-a-Hora-do-seu-TCC-Escolha-o-seu-Desafio-Final-3bfddf6f2acc8060817bc88cf9db7e9c)

$\rightarrow$ [Orientacoes sobre modelagem e plano de desenvolvimento](https://app.notion.com/p/prof-joao/Modelagem-321a3966a3f4819fa320dd47e9269b44)

$\rightarrow$ [Source de orientacoes](https://dontpad.com/profjoaosexta16)

$\rightarrow$ [Modelagem de dados pronta](https://app.notion.com/p/2026-3deb8432ba1280938644cf9ab011f13e)

### Tree e Arquivos
- `scopo.md` - planer geral localizado na raiz da pasta do projeto

### Passos para o Desenvolvimento que constam neste arquivo: 
1. **Definir o proposito ou visao geral do sistema**
    - o que a aplicacao vai resolver/fazer
2. **Requisitos funcionais**
    - eh o que descreve as funcionalidades diretas do sistema e o que ele deve fazer
    - EX: cadastro de user, criacao de uma nota, criacao de uma tarefa, pesquisa de algum dado.
    - sem algumas dessas funcionalidades, o sistema nao tem sentido, entao tem as funcionalidades que sao as mais **importantes** de todas, e portanto mais essenciais, nao podendo ser negligenciadas
3. **Requisitos nao funcionais (modelagem)**
    - restricoes e limites/regras que nao sao necessariamente uma funcionalidade
    - EX: interface do frontend ser principalmente voltada para mobile (nao eh uma funcionalidade em si, mas sim um limite/qualidade), operacoes de CRUD demorarem no max 500ms para retornar a resposta (eh uma restricao, nao implica nenhuma funcionalidade)
4. **Modelos de casos de uso**

### Ideia inicial (refs e inspos)
Categoria 3 do Arquivo Orientador: *Portais, Catálogos e Coleções*
- Projetos voltados para organizacao e banco de dados mais completos, que fornece informacoes coletadas e organizadas
- Bibliotecas completas para consulta sobre algum universo especifico que envolva cultura geek/underground de preferencia, baseada em artigos, que usuarios podem publicar e que ja foram criadas pela autora do projeto (eu) 
    - algumas possiveis ideias de um tema que eu posso escolher sao: *animes, **musica**, filmes classicos, cubos magicos...*
    - eu devo escolher uma dessas e criar um site a partir disso
- Nessa lib, o usuario poderia publicar certos tipos de artigos sobre alguma banda especifica, ou sobre algum genero musical especifico
- A partir disso, todas as pessoas podem ser autoras de seus proprios artigos, que devem ser uppados em formato de Markdown, para assim serem disponiveis para todos os usuarios, que desejam ler os artigos.

# Ideia Concluida

### 1. Proposito e visao geral do sistema:
- O sistema vai ser uma especie de colecao de artigos sobre musicas do universo underground de metal e rock. Nesse sistema, o ideal eh que pessoas possam acessar se quiserem ler sobre algumas de suas bandas ou generos musicais favoritos. O que ela vai ler sao artigos, que serao publicados por outros users e pela autora do site tambem (eu). Ela tambem vai poder publicar artigos proprios sobre os temas musicais que desejar, por meio de fazer o upload de um arquivo/texto Markdown. Cada artigo desses vai ficar disponivel em um feed/galeria que vai conter todos eles, sendo possivel buscar artigos por palavras chave ou nome em uma barra de pesquisa tambem. A partir disso, artigos serao acumulados em um banco de dados e estarao disponiveis no site, criando uma colecao de muitos artigos ao longo do tempo. A ideia eh que esse sistema seja algo mais nichado e mais especifico, para usuarios undergrounds selecionados.

### 2. Requisitos funcionais
- Fazer a busca de artigos por nome ou por palavra chave (essencial)
- Publicar um artigo (essencial)
- Criar uma conta com nome e senha (essencial)

### 3. Requisitos nao funcionais
- Todos os artigos devem ser uppados em markdown (outro formato nao eh aceito)
- Para publicar um artigo, o user deve criar uma conta
- Soh eh possivel visualizar a galeria quando o user criar uma conta e entrar no site
- O site eh nativamente projetado para funcionar e ser acessado via computador, o que apresenta limitacoes de responsividade, sendo menos essencial a implementacao dela

### 4. Modelos de casos de uso

- Caso de Uso 1:
    - O user vai publicar um artigo
    - Precondition: ele deve ter uma conta
    - Fluxo da publicacao:
        - Clicar em botao de criar artigo
        - Siga e clique no botao de fazer upload 
        - Selecionar um arquivo de Markdown
        - Clicar em um botao de finalizar artigo
- Caso de Uso 2:
    - O user vai entrar no site
    - Se tiver uma conta vai clicar em login
    - Se nao tiver clica em sign in 
    - Fluxo para qualquer um dos dois:
        - Informar username
        - Informar senha
        - Clicar no botao que indica a finalizacao do processo (submit)
    - Se for uma conta nova, o site vai informar que a conta foi criada
    - Se nao o site vai abrir e o login foi efetuado