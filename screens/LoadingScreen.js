import React, { Component } from 'react';
import { AsyncStorage, View, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';

/**
 * Componente de carga inicial do app
 * Nele é definido se o usuário vai para
 * a introdução/tutorial ou direto para a
 * área de trabalho
 */
class LoadingScreen extends Component {
  async componentWillMount() {
    this.firstTimeAsync();
  }

  // Carrega flag do AsyncStorage. No primeiro uso não vai haver nada
  // pra carregar, então mostra o slider. Caso contrário, mostra a área
  // principal do app
  firstTimeAsync = async () => {
    const notFirstTime = await AsyncStorage.getItem('notFirstTime');
    // Isso navega (switch) para a área principal ou a introdução
    // e esta tela de entrada é desmontada e descartada.
    this.props.navigation.navigate(notFirstTime ? 'Base' : 'Intro');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingScreen;
