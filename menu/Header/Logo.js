import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Logo extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={require('/Users/PC/Documents/GitHub/ProyectoUX/images/logo.jpg')}></Image>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        borderRadius: 90,
    },
  });