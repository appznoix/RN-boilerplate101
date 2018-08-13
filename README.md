# App Kick Start para React Native (agosto/18)
Se você está procurando um atalho/exemplo para criar um app feito em React Native com Expo, React Navigation, Native Base e outros recursos chegou ao lugar certo :-)

## Proposta
Use este código como ponto de partida para criar outros apps feitos em React Native ou como exemplo para suas próprias criações.

## Experiência do Usuário (UX)
O inicia com um slider de introdução que só é mostrado na primeira vez que o app é usado, e algumas páginas de exemplo com navegação simples para você adaptar ao seu projeto pessoal.

## Pré-requisitos
Confira se tem estes pacotes ou instale-os:

[Node.js](https://nodejs.org/en/download/). Node.js é um runtime, um tipo de servidor que roda o javascript do app.

[Expo.io](https://expo.io). Expo é um conjunto de ferramentas de desenvolvimento que aceleram o processo de criação de apps em React Native (CRNA).

[Expo Client](https://expo.io/tools#client) no seu Smartphone ou iPhone. Também pode instalar no emulador de android ou simulador de Ios. É neste dispositivo que você vai rodar e testar seu app.

## Instale o comando expo-cli
Abra o terminal e instale o EXPO-CLI

`npm i -g expo-cli`

Este comando (e outros) podem demorar para terminar a execução. Tenha paciência!

**Recursos Opcionais**

[Git](https://git-scm.com/), que é um sistema de controle de versão distribuído. Se estiver usando Windows, instale o [Git for Windows](https://gitforwindows.org/).

[Visual Studio Code](https://code.visualstudio.com/) -- Este git (projeto) contém dependências de desenvolvimento voltadas para VSCode, mas você pode usar o editor de sua preferência.

## Como usar

**1) Crie um projeto vazio no Expo**

Abra o terminal e digite:

```
cd /PASTA/DOS/PROJETOS/
expo init MEUPROJETO
cd MEUPROJETO
expo start
```

**Nota:** Altere os termos em MAIÚSCULAS para os nomes que usa em seu sistema.

**Nota:** Escolha o projeto vazio quando rodar `expo init`. Basta dar `Enter`.

Aguarde uma janela do navegador abrir. Este é o servidor em que o app roda durante o desenvolvimento. Feche esta aba, volte ao terminal e interrompa a execução (`Ctrl+C` no Windows).

**2) Baixe e inicialize o app**

Neste [repo](https://github.com/appznoix/RN-boilerplate101), clique no botão verde "Clone or download" e baixe a arquivo .zip.

Abra o .zip e extraia os arquivos para a pasta do projeto, substituindo os arquivos originais pelos novos que vc extraiu.

De volta ao terminal:

`cd /PASTA/DOS/PROJETOS/MEUPROJETO // se já não estiver na pasta do app`

**Opcional** Se for usar eslint, digite:

`npm i -g eslint`

Em seguida:

```
npm i
expo start
```

Após alguns minutos - a velocidade depende do sistema - uma abra você verá um QRcode (Android) e um endereço para usar no Expo Client e rodar o app.

*Pronto!!!*

Agora é com você. Personalize o código de acordo com as necessidades de seu aplicativo.

## Observação
Estamos só começando. Avise se encontrar algum bug e informe se tiver a solução.
