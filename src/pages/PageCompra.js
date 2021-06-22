import React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Image, ImageBackground, TextInput} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { IconButton, List } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../services/API';

export default function CursoAtual ({navigation}) {
       
    return(
        <KeyboardAvoidingView style={styles.backgroud}>
            <View style={styles.nav}>
                <Image style={styles.logo} source={require('../img/Logo.png')}/>
                <IconButton 
                icon="account-circle" color="white" style={styles.iconuser} onPress={() => navigation.navigate('Login')}  />         
            </View>

            <View style={styles.viewSearch}>
                <TextInput
                style={styles.input}
                placeholder="Procurar"
                autoCorrect={false}
                autoCapitalize="none"
                />
                <TouchableOpacity style={styles.icon}>
                    <MaterialCommunityIcons name="magnify" color="rgb(45,77,118)" size={20} /> 
                </TouchableOpacity>
            </View>
            <ImageBackground source={require('../img/back2.jpg')} style={styles.backgroundImage}>
                <Text style={styles.tituloDestaque}> Compre e assista em qualquer lugar, a qualquer hora! </Text> 
                <ScrollView>
                    <View style={styles.list}>
                        <TouchableOpacity  onPress={() => navigation.navigate('Curso')}>
                            <List.Item
                            title='Titulo Exemplo'
                            description='Descrição Exemplo'
                            titleStyle={styles.textTitulo}
                            left={props =><Image style={styles.imgCurso} 
                            source={require('../img/imgCurso.png')}/>}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>    
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
backgroud:{
    width:'100%',
    height:'100%',
},
backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
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
tituloDestaque:{
    fontSize:18,
    alignSelf:'center',
    marginBottom:20,
    marginTop:20,
},
curso:{
    alignItems:'center',
    marginRight:12,
    marginLeft:10,
    alignItems:'flex-start',

},
imgCurso:{
    width:150,
    height:100,
    resizeMode:'contain',
    borderRadius:15,
},
textTitulo:{
    fontSize:15,
},
list:{
    width:'100%',
},  
btnlist:{
    backgroundColor:"rgb(45,77,118)",
    width:'80%',
    height:'5%',
    alignItems:'center',
    borderRadius:5,
    padding:15,
},
btncenter:{
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
    alignSelf:'center',
},
});
