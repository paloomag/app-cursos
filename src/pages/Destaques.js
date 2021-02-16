import React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Image, ScrollView, ImageBackground} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../services/API';

export default function Destaque ({navigation}) {
       
    return(
        <KeyboardAvoidingView style={styles.backgroud}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={require('../img/back2.jpg')} style={styles.backgroundImage}>
                    <Text style={styles.tituloDestaque}><MaterialCommunityIcons name="new-box" color="#FF872D" size={26} /> Novos Cursos   </Text> 
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollImage}>
                    
                        {/* FLATLIST COM API DISPONIBILIZADA PELA CLINITEC */}
                        
                        <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')} >
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}  onPress={() => navigation.navigate('Curso')}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso}  onPress={() => navigation.navigate('Curso')}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                    </ScrollView>

                    <Text style={styles.tituloDestaque}><MaterialCommunityIcons name="lightbulb-on" color="#FF872D" size={22} /> Veja também   </Text> 
                    
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollImage}>

                        {/* FLATLIST COM API DISPONIBILIZADA PELA CLINITEC */}
                        
                        <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.curso} onPress={() => navigation.navigate('Curso')}>
                            <Image style={styles.imgCurso} source={require('../img/imgCurso.png')}/>
                            <Text style={styles.textArea}>Área do curso</Text>
                            <Text style={styles.textTitulo}> Titulo Exemplo</Text>
                            <Text style={styles.textDescricao}> Descrição Exemplo</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </ImageBackground>
            </View>
            <View style={styles.footer}>
                <Text style={styles.textfooter}> Copyright © Clinitec 2020 </Text>
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
},
scrollImage:{
    marginLeft:10,
},
footer:{
    alignItems:'center',
    position:'absolute',
    bottom:0,
    width:'100%',
    height:'10%',
    justifyContent:'center',
},
});
