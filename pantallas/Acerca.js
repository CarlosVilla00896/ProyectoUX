import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground } from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ScreenA extends React.Component {
    render(){
        return(
            <ImageBackground source={require('/Users/PC/Documents/GitHub/ProyectoUX/images/foto.jpg')} style={{width: '100%', height: '100%'}}>
                <Text style = {styles.largeText}>
                        Acerca de nosotros
                </Text>
                <Text style = {styles.smallText} > 
                    Gracias por visitar Ruta5, el blog de los hondureños en el extranjero.
                    Ruta5 se creó en el año 2014 con el propósito de ser un laboratorio de 
                    reportajes de investigación, que destaca semanalmente historias de éxito de nuestros compatriotas hondureños alrededor del mundo.
                    Asimismo, temas de turismo, cultura, productos nostálgicos, remesas, empresas de éxito,
                    extranjeros en Honduras, centroamericanos exitosos y otros temas más. 
                    Nuestra misión es promover el desarrollo y el crecimiento económico 
                    y a la vez llegar a tantos lugares como sea posible con nuestros contenidos positivos.
                    Si quieres compartirnos una historia de éxito escríbenos al email rutacincohn@gmail.com 
                    o interactúa con nosotros a través de nuestras 
                    redes sociales: instagram y twitter, facebook o Linkedin.
                </Text>
            </ImageBackground>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        flex: 1,
    },
    largeText: {
        fontSize: 18,
        // selectionColor: blue;
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: 20,
    },
    smallText: {
        fontSize: 12,
        textAlign: 'left',
        textAlignVertical: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'center',
        fontWeight: '400',
    },
    image:{
        resizeMode: 'contain',
        width: 450,
        height: 500,
        borderRadius: 40,
    }
  });