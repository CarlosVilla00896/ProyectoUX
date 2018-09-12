import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {Container, Button,Body,Title,Right,Header,Left} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Contacto extends React.Component {
    render(){
        return(
            <Container>
                <Header>
                <Left>
                    <Button transparent>
                    <Icon name='ios-menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Contacto</Title>
                </Body>
                </Header>
                <View style={styles.container}>
                <Text></Text>
                
                </View>
            </Container>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
  });