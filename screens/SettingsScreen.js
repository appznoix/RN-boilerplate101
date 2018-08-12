import React, { Component } from 'react';
import { AsyncStorage, View, StatusBar } from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Left,
  Button,
  Icon,
  Right,
  Body,
} from 'native-base';

/**
 * Tela de exemplo. Use como ponto de partida para criação de suas telas.
 * Esta tela simula uma tela de configurações
 */
class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Ajustes</Title>
        </Body>
        <Right />
      </Header>
    ),
  });

  // Limpa AsyncStorage e navega para a introdução
  signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Intro');
  };

  // Exibe botão para reiniciar o app
  render() {
    return (
      <Container>
        <Content padder>
          <View>
            <Text>Ajustes!</Text>
            <Button full rounded primary onPress={this.signOutAsync}>
              <Text>Reiniciar!</Text>
            </Button>
            <StatusBar barStyle="default" />
          </View>
        </Content>
      </Container>
    );
  }
}

export default SettingsScreen;
