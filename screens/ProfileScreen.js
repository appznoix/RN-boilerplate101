import React, { Component } from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  View,
  Text,
  Left,
  Button,
  Icon,
  Right,
  Body,
} from 'native-base';

/**
 * Tela de exemplo. Use como ponto de partida para criação de suas telas.
 * Esta tela simula uma tela de perfil de usuário.
 */
class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Seu Perfil</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => navigation.navigate('Settings')}>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
    ),
  });
  render() {
    return (
      <Container>
        <Content padder>
          <View>
            <Text>Perfil!</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default ProfileScreen;
