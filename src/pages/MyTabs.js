import 'react-native-gesture-handler';
import * as React from 'react';
import {Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, View} from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Destaques from './Destaques';
import CursoAtual from './CursoAtual';
import Categoria from './Categoria';
import { IconButton } from 'react-native-paper';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

export default function Menu ({navigation}) {
       
    return(
        <SafeAreaView style={styles.backgroud}>
             <View style={styles.nav}>
                <Image style={styles.logo} source={require('../img/Logo.png')}/>
                <IconButton 
                icon="account-circle" color="white" style={styles.iconuser} />         
            </View>

            <View style={styles.viewSearch}>
                <TextInput
                style={styles.input}
                placeholder="Procurar"
                autoCorrect={false}
                autoCapitalize="none"
                />
                <TouchableOpacity style={styles.icon}>
                    <MaterialCommunityIcons name="magnify" color="rgb(45,77,118)" size={26} /> 
                </TouchableOpacity>
            </View>

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
