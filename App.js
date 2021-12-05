import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';


import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {ListRifa} from "./src/listRifa";
import {AddRifa} from "./src/addRifa/index";
import {DetailsRifa} from "./src/detailsRifa";


const Tab = createBottomTabNavigator();
const listStack = createStackNavigator();
const addStack = createStackNavigator();

Icon.loadFont();

function listRifaStack() {
    return (
        <listStack.Navigator 
        screenOptions={{ headerStyle: { backgroundColor: '#008B8B' } }}
        >
            <listStack.Screen name="ListaRifas" component={ListRifa} />
            <listStack.Screen name="Detalhes da Rifa" component={DetailsRifa} />
        </listStack.Navigator>
    );
}

function addRifaStack() {
    return (
        <addStack.Navigator 
        screenOptions={{ headerStyle: { backgroundColor: '#008B8B' } }}
        >
            <addStack.Screen name="AdicionarRifa" component={AddRifa} />
            <addStack.Screen name="Detalhes da Rifa" component={DetailsRifa} />

        </addStack.Navigator>
    );
}

function MyTabs() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown:  false,
        tabBarIcon: ({ color, size }) => {
            let iconName;
            if(route.name == "Lista de Rifas"){
                iconName='list'
            }else
            iconName='plus'

        return (
            <Icon name={iconName} size={20} color={'#008B8B' } />
        );
        },
  })}
        >
            <Tab.Screen name="Lista de Rifas" component={listRifaStack} />
            <Tab.Screen name="Adicionar Rifa" component={addRifaStack} />
        </Tab.Navigator>
    );
}
export default function App() {
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
