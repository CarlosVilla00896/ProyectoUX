import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

import { NavDrawer } from './menu/navigation/NavDrawer';
import { Header } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/Ionicons';

import Logo from './menu/Header/Logo'
// import { AppFontLoader } from './Utils/AppFontLoader'

export default class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
        loading: true
    };
}

async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      // <AppFontLoader>
        <View style={{flex: 1}}>
        <Header
          placement="left"
          leftComponent={<Logo></Logo>}
          centerComponent={{ text: 'Ruta 5 Honduras', style: { color: '#fff' } }}
          // rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <NavDrawer />
      </View>
      // </AppFontLoader>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerc:{
    color: '#fff',
  }
});
