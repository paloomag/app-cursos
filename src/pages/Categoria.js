import React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Image, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../services/API';

export default function Categoria ({navigation}) {
       
    return(
        <KeyboardAvoidingView style={styles.backgroud}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ScrollView>
                    <Text style={styles.tituloDestaque}> Fibra Óptica </Text> 
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollImage}>
                    {/* FLATLIST COM API DISPONIBILIZADA PELA CLINITEC */}
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}> Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                    </ScrollView>

                    <Text style={styles.tituloDestaque}> Via Rádio </Text> 
                    
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollImage}>

                        {/* FLATLIST COM API DISPONIBILIZADA PELA CLINITEC */}
                        
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>

                    </ScrollView>

                    <Text style={styles.tituloDestaque}> Redes </Text> 
                    
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollImage}>

                        {/* FLATLIST COM API DISPONIBILIZADA PELA CLINITEC */}
                        
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>

                    </ScrollView>

                    <Text style={styles.tituloDestaque}> Suporte </Text> 
                    
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollImage}>

                        {/* FLATLIST COM API DISPONIBILIZADA PELA CLINITEC */}
                        
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>

                    </ScrollView>

                </ScrollView>
              
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
    curso:{
        alignItems:'center',
        marginRight:12,
    
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