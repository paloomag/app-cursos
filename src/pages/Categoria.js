import React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Image, ScrollView, ImageBackground, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../services/API';

export default function Categoria ({navigation}) {
       
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
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={require('../img/back2.jpg')} style={styles.backgroundImage}>
                    <ScrollView>
                        <Text style={styles.tituloDestaque}> Fibra Óptica </Text> 
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollImage}>
                        {/* FLATLIST COM API DISPONIBILIZADA PELA CLINITEC */}
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}> Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                        </ScrollView>

                        <Text style={styles.tituloDestaque}> Via Rádio </Text> 
                        
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollImage}>

                            {/* FLATLIST COM API DISPONIBILIZADA PELA CLINITEC */}
                            
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>

                        </ScrollView>

                        <Text style={styles.tituloDestaque}> Redes </Text> 
                        
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollImage}>

                            {/* FLATLIST COM API DISPONIBILIZADA PELA CLINITEC */}
                            
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>

                        </ScrollView>

                        <Text style={styles.tituloDestaque}> Suporte </Text> 
                        
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollImage}>

                            {/* FLATLIST COM API DISPONIBILIZADA PELA CLINITEC */}
                            
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                                <Image style={styles.imgCurso} source={require('../img/curso.jpg')}/>
                                <Text style={styles.textArea}>Área do curso</Text>
                                <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                                <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                            </TouchableOpacity>

                        </ScrollView>

                    </ScrollView>
                </ImageBackground>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
backgroud:{
    alignItems:'center',
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
curso:{
    alignItems:'center',
    marginRight:12,
    marginBottom:20,

},
imgCurso:{
    width:150,
    height:150,
    resizeMode:'contain',
    borderRadius:15,
},
textTitulo:{
    fontSize:15,
    
},
textDescricao:{
    fontSize:13,
},
textArea:{
    fontSize:12,
    fontWeight:'bold',
    marginTop:-20,
},
tituloDestaque:{
    fontSize:18,
    alignSelf:'center',
    marginTop:20,
},
scrollImage:{
    marginLeft:10,
},
});