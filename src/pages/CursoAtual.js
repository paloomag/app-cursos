import React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Image, SafeAreaView} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../services/API';

export default function CursoAtual ({navigation}) {
       
    return(
        <KeyboardAvoidingView style={styles.backgroud}>
                <Text style={styles.tituloDestaque}> Continue assistindo </Text> 
                <ScrollView>
                    <View style={styles.list}>
                        <TouchableOpacity>
                            <List.Item
                            title='Titulo Exemplo'
                            description='Descrição Exemplo'
                            style={styles.itemList}
                            titleStyle={styles.textTitulo}
                            left={props =><Image style={styles.imgCurso} 
                            source={require('../img/imgCurso.png')}/>}
                            />
                        </TouchableOpacity>
                       
                        <TouchableOpacity>
                            <List.Item
                            title='Titulo Exemplo'
                            description='Descrição Exemplo'
                            style={styles.itemList}
                            titleStyle={styles.textTitulo}
                            left={props =><Image style={styles.imgCurso} 
                            source={require('../img/imgCurso.png')}/>}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <List.Item
                            title='Titulo Exemplo'
                            description='Descrição Exemplo'
                            style={styles.itemList}
                            titleStyle={styles.textTitulo}
                            left={props =><Image style={styles.imgCurso} 
                            source={require('../img/imgCurso.png')}/>}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <List.Item
                            title='Titulo Exemplo'
                            description='Descrição Exemplo'
                            style={styles.itemList}
                            titleStyle={styles.textTitulo}
                            left={props =><Image style={styles.imgCurso} 
                            source={require('../img/imgCurso.png')}/>}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <List.Item
                            title='Titulo Exemplo'
                            description='Descrição Exemplo'
                            style={styles.itemList}
                            titleStyle={styles.textTitulo}
                            left={props =><Image style={styles.imgCurso} 
                            source={require('../img/imgCurso.png')}/>}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <List.Item
                            title='Titulo Exemplo'
                            description='Descrição Exemplo'
                            style={styles.itemList}
                            titleStyle={styles.textTitulo}
                            left={props =><Image style={styles.imgCurso} 
                            source={require('../img/imgCurso.png')}/>}
                            />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
backgroud:{
    width:'100%',
    height:'100%',
},
tituloDestaque:{
    fontSize:18,
    alignSelf:'center',
    marginBottom:20,
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
itemList:{
    backgroundColor:'#F1F1F1',
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
