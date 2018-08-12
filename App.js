import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { AppSwitchNavigator } from './components/Router';

// Componente Básico: carrega as fontes e em seguida o
// navegador do App
export default class App extends Component {
  // Carrega as fontes e determina se é a primeira vez que o app é acionado.
  // Checando estado se carregou as fontes.
  state = {
    fontLoaded: false,
  };

  // carrega as fontes do Expo e baixadas da web e atribue nomes a elas antes de montar o componente
  async componentWillMount() {
    // carrega as fontes de acordo com as necessidades do Native Base
    await Font.loadAsync({
      /* eslint-disable */
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Roboto_black: require('./assets/fonts/Roboto-Black.ttf'),
      Lato_light: require('./assets/fonts/Lato-Light.ttf'),
      MaterialIcons: require('native-base/Fonts/MaterialIcons.ttf')
      /* eslint-enable */
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    // Enquanto carrega as fontes, mostra o componente AppLoading
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }
    // Então mostra o navegador do app
    return <AppSwitchNavigator />;
  }
}
