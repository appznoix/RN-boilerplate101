# App Kick Start para React Native (agosto/18)
Se você está procurando um atalho/exemplo para criar um app em React Native, usando Expo, React Navigation, Native Base chegou ao lugar certo :-)

## Proposta
Use este app como ponto de partida para outros apps feitos em React Native ou como exemplo para suas próprias criações.

## Composição
O app apresenta um slider de introdução que só é mostrado na primeira vez que o app é usado, e algumas páginas de exemplo para você modificar.

## Pré-requisitos
Confira se estes pacotes estão instalados:

Instale o [Node.js](https://nodejs.org/en/download/). Node.js é um runtime, um tipo de servidor que roda o javascript do app.

Instale o [Expo.io](https://expo.io). Expo é um conjunto de ferramentas de desenvolvimento que aceleram o processo de criação de apps em React Native (CRNA).

Instale o [Expo Client](https://expo.io/tools#client) no seu Smartphone ou iPhone. Também pode instalar no emulador de android ou simulador de Ios. É neste dispositivo que você vai rodar e testar seu app.

Abra o terminal e instale o EXPO-CLI

`npm i -g expo-cli`

Este comando (e outros) podem demorar para terminar a execução. Tenha paciência!

**Recursos Opcionais**

Instale o [Git](https://git-scm.com/) que é um sistema de controle de versão distribuído. Se estiver usando Windows, instale o [Git for Windows](https://gitforwindows.org/).

Instale o [Visual Studio Code](https://code.visualstudio.com/) -- Este git (projeto) contém dependências de desenvolvimento voltadas para VSCode, mas você pode usar o editor de sua preferência.

## Como usar

**Criar um projeto vazio**

Use o Expo para criar um projeto vazio. Abra o terminal e digite:

```
cd /PASTA/DOS/PROJETOS/
expo init MEUPROJETO
cd MEUPROJETO
expo start
```

**Nota:** Os termos em MAIÚSCULAS devem ser modificados, de acordo com os nomes que você usa em seus projetos.

**Nota:** Escolha o projeto vazio quando rodar `expo init`

Em alguns instantes uma janela do navegador deverá abrir, pra mostrar que o app esta rodando. Volte ao terminal e interrompa a execução (`ctrl+C` no Windows).

**Baixar e inicializar o app**

No site do github, clique no botão verde "Clone or download" para baixar um arquivo .zip contendo o código do app.

Descompacte o .zip na pasta do projeto, substituindo os arquivos originais pelos baixados.

De volta ao terminal:
`cd /PASTA/DOS/PROJETOS/MEUPROJETO // se já não estiver na pasta do app`

**Opcional** Para usar eslint, digite:

`npm install -g eslint`

Em seguida:

```
npm i
expo start
```
Após alguns instantes você verá um QRcode e um endereço para usar no Expo Client e rodar o app.

Pronto!!!

A partir daí, personalize o código de acordo com as necessidades de seu aplicativo.

## Observação
Estamos só começando. Avise se encontrar algum bug e informe se tiver a solução.
