import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ScreenA extends React.Component {
    render(){
        return(
            <Container>
                <View style={styles.container}>
                <Text> 
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
                
                </View>
            </Container>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
   
      
      alignItems: 'center',
      justifyContent: 'center',
    },
  });