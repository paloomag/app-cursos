import React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Image, Animated, Alert, handleLogin } from 'react-native';
/* import StatusBarColor from '../components/StatusBarColor' */
import api from '../services/API';

export default function Menu ({navigation}) {
       
    return(
        <KeyboardAvoidingView style={styles.backgroud}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Destaques!</Text>
        </View>
    </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
},
backgroud:{
    alignItems:'center',
    width:'100%',
    height:'100%',
},

centerlogo:{
    alignItems:'center',
    width: '100%',
    height:'40%' ,
    justifyContent:'center',
},
logo:{
    width:250,
    height:100,
    resizeMode:'contain',
    marginBottom:35,
},
botao:{
    backgroundColor:'#FF9700',
    width:'90%',
    height: 35,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
},
textobotao:{
    color:'#FFF',
    fontSize:12
},
textologin:{
    textAlign:'center',
    marginBottom:30,
},
inputs:{
    position:'relative',
    bottom:70,
    padding:20,
    width:'90%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F1F1F1',
    borderRadius:5,
    marginVertical:10,
},

input:{
    backgroundColor:'#FFF',
    width:'90%',
    marginBottom:15,
    color:'#222',
    fontSize:12,
    borderRadius:5,
    padding:5,
    justifyContent:'center',
},
footer:{
    alignItems:'center',
    position:'absolute',
    bottom:0,
    width:'100%',
    height:'10%',
    justifyContent:'center',
},
textfooter:{
    color:'white',
},

});
