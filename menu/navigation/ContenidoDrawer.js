
import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground,Header } from 'react-native'
import { white } from 'ansi-colors';

export default class ContenidoDrawer extends React.Component {
    
    navigateToScreen = ( route ) =>(
        () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
    })

  render() {
    
    return (
        <View style={styles.container}>
           
            <View style={styles.headerContainer}> 
                    <Text style={styles.headerText}>Ruta 5, Honduras</Text>
            </View>
            <View style={styles.screenContainer}>
                <View style={styles.screenStyle}>
                    <Text onPress={this.navigateToScreen('Acerca')}>Acerca de</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text onPress={this.navigateToScreen('Noticias')}>Noticias</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text onPress={this.navigateToScreen('Galeria')}>Galerias</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text onPress={this.navigateToScreen('Videos')}>Videos</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text onPress={this.navigateToScreen('Aliados')}>Aliados</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Text onPress={this.navigateToScreen('Contacto')}>Contacto</Text>
                </View>
                
            </View>
            
        </View>
    
    )
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20, 
        
             
    },
    headerContainer: {
        height: 70,
        

    },
    headerText: {
        color: '#fff8f8',
        paddingLeft: 15
    },
    screenContainer: {
        paddingTop: 20,
        paddingLeft: 15

    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20
    },
    headerStyle:{
        height: 220,
    },

});