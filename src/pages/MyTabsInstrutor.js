import 'react-native-gesture-handler';
import * as React from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Destaques from './Destaques';
import CursoAtual from './CursoAtual';
import Categoria from './Categoria';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function Menu ({navigation}) {
       
    return(
        <SafeAreaView style={styles.backgroud}>
            <Tab.Navigator
             barStyle={{ backgroundColor: 'rgb(45,77,118)' }}
             shifting={true}>
                <Tab.Screen name="Destaques" 
                component={Destaques}
                options={{
                    tabBarLabel: 'Destaques',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="star-outline" color={color} size={26} />
                    ),
                  }} />

                <Tab.Screen name="CursoAtual" 
                component={CursoAtual} 
                 options={{
                    tabBarLabel: 'Meus Cursos',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="play-circle-outline" color={color} size={26} />
                    ),
                  }} />
                  
                <Tab.Screen name="Categoria" 
                component={Categoria}
                options={{
                    tabBarLabel: 'Categorias',
                    tabBarIcon: ({ color }) => (
                      <MaterialCommunityIcons name="shape-outline" color={color} size={26} />
                    ),
                  }} />
                
            </Tab.Navigator>
        </SafeAreaView>          
    );
}
const styles = StyleSheet.create({

    backgroud:{
        width:'100%',
        height:'100%',
    },
    
    nav:{
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor:'rgb(45,77,118)',
        width: '100%',
        height:'8%' ,
    },
  
    logo:{
        width:150,
        height:100,
        resizeMode:'contain',
    },
    iconuser:{
        alignSelf:'flex-end',
        position:'absolute',
        fontSize:25,
    },
    viewSearch:{
        marginTop: 0,
        backgroundColor:'#FFF',
        elevation:2.5,
        borderRadius:0,
        marginVertical: 10,
        width: '100%',
        flexDirection: 'row',
        alignSelf:'center'
    },
    input:{
        width:'90%',
        padding:8,
        paddingLeft:20,
        fontSize:15,
    },
    icon:{
        position:'absolute',
        right: 20,
        top: 10,
    },  
});
