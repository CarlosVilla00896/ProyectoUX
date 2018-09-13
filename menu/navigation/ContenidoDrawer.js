
import React, { Component } from 'react';
import {NavigationActions, DrawerItems} from 'react-navigation';
import { Text, View, StyleSheet, ImageBackground, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native'
import { white } from 'ansi-colors';

import { Container, Header, Content } from 'native-base';
import Icon from '/Users/PC/Documents/GitHub/ProyectoUX/node_modules/@expo/vector-icons/Entypo';
import Icon2 from '/Users/PC/Documents/GitHub/ProyectoUX/node_modules/@expo/vector-icons/FontAwesome';
import Icon3 from '/Users/PC/Documents/GitHub/ProyectoUX/node_modules/@expo/vector-icons/Ionicons';

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
                    <Image source = {require('/Users/PC/Documents/GitHub/ProyectoUX/images/logo.jpg')} style={styles.image}></Image>
            </View>
            <View style={styles.screenContainer}>
                <View style={styles.screenStyle}>
                    <Icon name= "home" />
                    <Text style = {styles.screenTextStyle} onPress={this.navigateToScreen('Acerca')}>Acerca de</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Icon type="Entypo"  name = "news"/>
                    <Text style = {styles.screenTextStyle} onPress={this.navigateToScreen('Noticias')}>Noticias</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Icon name = 'camera'/>
                    <Text style = {styles.screenTextStyle} onPress={this.navigateToScreen('Galeria')}>Galerias</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Icon2 type = "FontAwesome" name = 'video-camera'/>
                    <Text style = {styles.screenTextStyle} onPress={this.navigateToScreen('Videos')}>Videos</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Icon3 type = "Ionicons" android = 'md-people'/>
                    <Text style = {styles.screenTextStyle} onPress={this.navigateToScreen('Aliados')}>Aliados</Text>
                </View>
                <View style={styles.screenStyle}>
                    <Icon3 type = "Ionicons" ios = 'ios-contact' android = "md-contact"/>
                    <Text style = {styles.screenTextStyle} onPress={this.navigateToScreen('Contacto')}>Contacto</Text>
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
        height: 150,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
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
        alignItems: 'center',
    },
    screenTextStyle:{
        // fontSize: 20,
        // marginLeft: 20,
        fontWeight: 'bold',
        paddingLeft: 5,
    },
    headerStyle:{
        height: 220,
    },
    image: {
        height: 120,
        width: 120,
        borderRadius: 80,
    }
});