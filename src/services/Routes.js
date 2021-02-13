import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../pages/Menu';
import Login from '../pages/Login';
import Curso from '../pages/Curso';
import Categoria from '../pages/Categoria';
import MyTabs from '../pages/MyTabs';

export default function Routes() {
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Curso" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Curso" component={Curso}/>
                <Stack.Screen name="Categoria" component={Categoria}/>
                <Stack.Screen name="MyTabs" component={MyTabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}