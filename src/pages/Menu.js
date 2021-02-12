import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
/* import StatusBarColor from '../components/StatusBarColor' */
import api from '../services/API';
import { IconButton } from 'react-native-paper';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Destaques from './Destaques';
import CursoAtual from './CursoAtual';
import Categoria from './Categoria';

const Tab = createMaterialBottomTabNavigator();


export default function Menu ({navigation}) {
       
    return(
        <KeyboardAvoidingView style={styles.backgroud}>
        
            <View style={styles.nav}>
                <Image style={styles.logo} source={require('../img/Logo.png')}/>
                <IconButton 
                icon="camera" color="white" style={styles.iconuser} />         
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

            <View style={styles.footer}>
                <Text  style={styles.textfooter} >Copyright © Clinitec 2020</Text>
            </View>
                <Tab.Navigator>
                    <Tab.Screen name="Destaques" component={Destaques} />
                    <Tab.Screen name="CursoAtual" component={CursoAtual} />
                    <Tab.Screen name="Categoria" component={Categoria} />
                </Tab.Navigator>     
        </KeyboardAvoidingView>
        
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
    footer:{
        alignItems:'center',
        position:'absolute',
        bottom:0,
        backgroundColor:'#F1F1F1',
        width:'100%',
        height:'5%',
        justifyContent:'center',
    },
textfooter:{
    color:'black',
},

});
