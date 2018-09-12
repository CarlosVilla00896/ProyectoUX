import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createDrawerNavigator} from 'react-navigation';
import Acerca from '../../pantallas/Acerca';
import Noticias from '../../pantallas/Noticias';
import Galeria from '../../pantallas/Galeria';
import Videos from '../../pantallas/Videos';
import Aliados from '../../pantallas/Aliados';
import Contacto from '../../pantallas/Contacto';
import ContenidoDrawer from './ContenidoDrawer';


export const NavDrawer = createDrawerNavigator (
    
    {
        Acerca:{ screen: Acerca },
        Noticias:{ screen: Noticias },
        Galeria:{ screen: Galeria },
        Videos:{ screen: Videos },
        Aliados:{ screen: Aliados }, 
        Contacto:{ screen: Contacto }

    },
    {
       contentComponent: ContenidoDrawer
    });