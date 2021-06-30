# HiringCodersTestes

## Módulo 01 - Introdução

Objetivo de um programador: desenvolver um software para <strong>outras pessoas</strong>. Ele deve <strong>entender a necessidade do usuário</strong> e transformar essa necessidade em uma aplicação.

> Software só é software se ajuda alguém.

Sobre o mercado: todo negócio precisará em algum ponto mudar para o digital.

Exemplos de áreas em que se pode atuar:

- Desenvolvedores;
- Analistas de infraestrutura;
- Analistas de Requisitos;
- Testadores;
- Profissionais UI/UX;
- DevOps;
- Telecomunicações.

É possível prestas serviços para qualquer país sem sair de casa.

O que um desenvolvedor faz?

- BackEnd
  - Dados
- FrontEnd
- Aplicativos

Ferramentas:

- GIT
- Metodologias Ágeis
- SoftSkills

Dev Junior:

- Deve saber um pouco de cada coisa como Back, Front, Git e metodologias ágeis. Com o tempo e avanço na carreira você será capaz de escolher sua área de especialização.

Linguagens de programação, forma de se comunicar com a máquina:

- Java;
- PHP;
- Python...

Bibliotecas: São pequenos trechos ou estruturas de código que podem ser reutilizados.

Frameworks: bibliotecas com manual de uso. Você precisa gastar tempo para aprender a utilizá-lo. O foco aqui é ganhar produtividade, segurança e rapidez.
Exemplos:

- FrontEnd
  - Angular;
  - React;

Editores de texto: local onde você irá escrever seus códigos.
Exemplos:

- Visual Studio Code

IDE: Ambiente Integrado de Desenvolvimento. Toda IDE também é um editor de texto. Junção de um editor de texto com ferramentas para auxiliar no desenvolvimento do código.
Exemplos:

- VSCode + Plugins
- Eclipse

## Módulo 02 - Lógica de programação

Algoritmo: Sequência finita de passos ordenados, cujo objetivo é a resolução de um problema através da transformação da informação (dados).

Ao passar uma informação para o computador é necessário ser o mais específico possível. Vale lembrar, que ele tem 0 conhecimento prévio.
[ ]
As intruções que são dadas para o computador podem ser separadas em blocos e executadas de forma repetiva sem precisar repití-las. Algumas condições também podem ser executadas mediante uma condição.

Todo programa ou partes de programa pode ser dividido em:

- Entrada;
  - Toda informação que precisa ser fornecido ao computador.
- Processamento;
  - Sequência de passos a ser cumprida para transformar a entrada na saída.
- Saída.
  - Aquilo que se espera obter ao final do programa.

Variáveis:

- Podem ser usadas para Qualificar e Quantificar informações:
  - Qualificação:
    - Inteiros
    - Reais
    - Cadeias
  - Quantificação:
    - Tamanho

Comparações:

- Elas são feitas com base em operadores relacionais(==, >, <, etc)

Operador AND e OR - Reavaliar a Tabela verdade

IF simples e composto - Reavaliar como usar.

Repetições:

- São a principal forma de fazer o computador executar a mesma instrução diversas vezes
- É preciso determinar quando o loop irá acabar
- Os comandos usados são FOR e WHILE
  - Em geral, usamos o WHILE quando não sabemos o número exato de repitições que serão executadas, porém sabemos a condição para término dessas execuções.
  - Para usar o FOR, temos que saber quantas repetições serão executadas

## Módulo 03 - GIT

GIT: Sistema de controle de versão distribuído = Desempenho, Segurança e Flexibilidade.

Principais ferramentas de GIT:

- GitHub - OpenSource
- BitBucket -
- GitLab - Mais customizável e privado

Principais comandos na linha de comando:

- 'git init' --> Cria um repositório na pasta que estiver selecionada na linha de comando;
- 'git add [nome do arquivo]' --> Adiciona o arquivo indicado a pasta do git. Exemplo: 'git add index.html'. Para adicionar mais de um arquivo é só separar o nome deles com espaço.
- 'git add .' --> Adiciona todos os arquivos que foram modificados desde a última adição a pasta do git;
- 'git commit -m "comentário"' --> Cria uma marca na linha do tempo do código para qual será possível retornar caso seja necessário. Essa marca será identificada pelo comentário inserido;
- 'git commit -am "comentário"' --> adiciona todas as alterações feitas desde o último 'git add' e ao mesmo tempo gera um commit com o comentário inserido
- 'git log' --> mostra os commits que foram feitos, quem fez e o comentário atrelado a cada um deles;
- 'git status' --> mostra todas as modificações que foram feitas mas não passaram por um commit e também indica a branch em que você está;
- 'git branch' --> gerencia as linhas de tempo alternativas;
- 'git checkout [nome da branch]' --> permite navegar entre as linhas de tempo alternativas, irá te levar para branch inserida no comando;
- 'git checkout [código identificador de um commit]' --> Permite voltar a um commit anterior, desfazendo todas as alterações que foram feitas posteriormente. Caso seja feita alguma modificação e essa modificação seja enviada, as modificações posteriores ao commit serão apagadas;
- 'git checkout -b [nome da branch]' --> Cria uma nova branch e migra pra ela automaticamente;
- 'git merge [nome da branch a ser adicionada]' --> une a linha do tempo informada com a que você está no momento;
- 'git push' --> envia as alterações para um repositório remoto(github);
- 'git clone [link do repositório]' --> pega um repositório que está guardado no seu repositório remoto e trás para o repositório local da sua máquina;
- 'git pull' --> sincroniza o repositório local com o repositório remoto.

OBS: Ao executar um merge, caso as branchs tenham mudanças em lugares distintos executadas em momentos diferentes, o git não saberá como juntar essas alterações e o desenvolvedor terá que resolver essa questão. Para ajudar, o git irá indicar quais são essas alterações, a quais branchs elas pertencem e quando foram realizadas. Para evitar problemas, <strong>sempre execute commits e merges curtos</strong>, dessa forma, será mais fácil resolver problemas com conflito.

Arquivo '.gitignore': Faz com que todos os arquivos que estão listados dentro dele sejam ignorados pelo git ao realizar adições ou commits.

FORK: Cópia do projeto original onde poderão ser feitas alterações sem afetar o original.
