import React, { Component } from 'react';
import { View, Image, Dimensions, AsyncStorage, StyleSheet } from 'react-native';
import { Container, Header, Content, Body, Right, Button, Icon, Title, Text } from 'native-base';

import ANIMATION from '../assets/animations/caitlin-thumbs-up-1.gif';

const SCREEN_WIDTH = Dimensions.get('window').width;

/**
 * Tela principal do app
 */
class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Body>
          <Title>Appxnoix :-)</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => navigation.navigate('Settings')}>
            <Icon name="more" />
          </Button>
        </Right>
      </Header>
    ),
  });

  async componentDidMount() {
    try {
      await AsyncStorage.setItem('notFirstTime', 'yes');
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Container style={styles.contentStyle}>
        <Content>
          <Image source={ANIMATION} style={styles.imageStyle} />
          <View style={{ padding: 10 }}>
            <Text style={styles.textStyle}>
              O ponto de entrada é app.js. Criamos algumas páginas para ajudar. Boa jornada!!!
            </Text>
            <Button full rounded primary onPress={() => this.props.navigation.navigate('Profile')}>
              <Text>Perfil</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },
  textStyle: {
    color: '#1f1f1f',
    marginBottom: 12,
    fontFamily: 'Lato_light',
    fontSize: 18,
    textAlign: 'center',
  },

  imageStyle: {
    maxWidth: SCREEN_WIDTH,
    resizeMode: 'cover',
  },
});
