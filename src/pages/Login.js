import React, { useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Image, Animated, Alert, handleLogin } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
/* import StatusBarColor from '../components/StatusBarColor' */
import api from '../services/API';

export default function Login ({navigation}) {
       
    const [offset] = useState(new Animated.ValueXY({x:0, y:95}));
    const [opacity] = useState(new  Animated.Value(0));
    
    useEffect(()=>{
        Animated.parallel([
        Animated.spring(offset.y,{
            toValue:0,
            speed:3,
            bounciness:20,
            useNativeDriver: true,
        }),
        Animated.timing(opacity,{
            toValue:1,
            duration:2,
            useNativeDriver: true,
        })
        ]).start();
    }, []);
/* 
    const [user, setUser] = useState();
    const [pass, setPass] = useState();
    
    async function handleLogin() {
        if(!user||!pass){
            Alert.alert("Campo Vazio", "Preencha todos os campos")
        }else{
            const response = await api.get(`/autenticacao/autentica/clinicam/${user}/${pass}`);
            const subscriberId = 'e4bbe5b7a4c1eb55652965aee885dd59bd2ee7f4'; //response.data;
            console.log(subscriberId)
            if(subscriberId.access==false){
                Alert.alert('Usuário ou senha inválida')
            }else{
                const autoriza = await api.get(`/autenticacao/autoriza/clinicam/${subscriberId}`);
                if(!autoriza){
                    Alert.alert('Usuário não autorizado')
                }else{
                    const response = await api.post(`/autenticacao/gerasessao/clinicam/${subscriberId}`);
                    const token = response.data;
                    global.Session = token[0].ses_token;
                    navigation.navigate('App');
                }
                
            } 
        }
    } */

    return(
        <LinearGradient start={{x: 0.0, y: 0.85}} end={{x: 2.0, y: 1.2}}
        locations={[0,0.5,0.6]}
        colors={['#133E54', '#FF872D', '#FF872D']}
        style={styles.linearGradient}>
                
            <KeyboardAvoidingView style={styles.backgroud}>
            {/*   
                <StatusBarColor hidden={true}/> */}

                <View style={styles.centerlogo}>
                    <Image style={styles.logo} source={require('../img/Logo.png')}/>
                </View>

                <Animated.View style={[styles.inputs,{
                    transform:[
                        {translateY:  offset.y}
                    ]
                }]}>

                <Text style={styles.textologin}> Insira seu usuário e senha para acessar os cursos! </Text>

                <TextInput 
                style={styles.input}
                placeholder="Usuário"
                autoCorrect={false}
                autoCapitalize="none"
                /* value={user}
                onChangeText={setUser} */
                />

                <TextInput 
                style={styles.input}
                placeholder="Senha"
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={true}
                /* value={pass}
                onChangeText={setPass} */
                />

                <TouchableOpacity 
                    style={styles.botao}
                    onPress={handleLogin}>
                    <Text style={styles.textobotao}>Entrar</Text>
                </TouchableOpacity>

                </Animated.View>

                <View style={styles.footer}>
                    <Text  style={styles.textfooter} >Copyright © Clinitec 2020</Text>
                </View>

            </KeyboardAvoidingView>
        </LinearGradient>
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
