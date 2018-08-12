import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import IntroScreen from '../screens/IntroScreen';
import HomeScreen from '../screens/HomeScreen';
import LoadingScreen from '../screens/LoadingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Navegadores do react-navigation
// Navegador da área principal
// organiza as áreas de trabalho do app
export const DashboardStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        title: 'Home',
      }),
    },

    Profile: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        title: 'Perfil',
      }),
    },

    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        title: 'Ajustes',
      }),
    },
  },
  {
    initialRouteName: 'Home',
    activeTintColor: 'midnightblue',
    inactiveTintColor: 'blue',
  }
);

// Navegador de inicialização do app
// mostra a introdução ou área principal de acordo com processamento
// em LoadingScreen
export const AppSwitchNavigator = createSwitchNavigator(
  {
    Loader: LoadingScreen,
    Intro: IntroScreen,
    Base: DashboardStackNavigator,
  },
  {
    initialRouteName: 'Loader',
    activeTintColor: 'mauve',
    inactiveTintColor: 'black',
    barStyle: {
      height: 0,
    },
  }
);
