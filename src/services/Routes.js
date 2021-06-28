import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../pages/Menu';
import Login from '../pages/Login';
import Curso from '../pages/Curso';
import Categoria from '../pages/Categoria';
import MyTabs from '../pages/MyTabs';
import Loading from '../pages/Loading';
import PageCompra from '../pages/PageCompra';
import Download from '../pages/Download';
import AmostraGratis from '../pages/AmostraGratis';
import CursoAmostra from '../pages/CursoAmostra';
import CompraApi from '../pages/CompraApi';

export default function Routes() {
    const Stack = createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Curso" component={Curso}/>
                <Stack.Screen name="CursoAmostra" component={CursoAmostra}/>
                <Stack.Screen name="Categoria" component={Categoria}/>
                <Stack.Screen name="MyTabs" component={MyTabs}/>
                <Stack.Screen name="Loading" component={Loading}/>
                <Stack.Screen name="PageCompra" component={PageCompra}/>
                <Stack.Screen name="Download" component={Download}/>
                <Stack.Screen name="CompraApi" component={CompraApi}/>
                <Stack.Screen name="AmostraGratis" component={AmostraGratis}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}