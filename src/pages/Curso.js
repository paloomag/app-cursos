import React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import { IconButton, List } from 'react-native-paper';

import api from '../services/API';
import Video from 'react-native-video';

export default function Curso ({navigation}) {
       
    return(
        <KeyboardAvoidingView style={styles.backgroud}>
            <View style={styles.nav}>
                <Image style={styles.logo} source={require('../img/Logo.png')}/>
                <IconButton 
                icon="account-circle" color="white" style={styles.iconuser} onPress={() => navigation.navigate('Login')} />         
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
                <View>
                    <Text style={styles.tituloDestaque}> Título do curso </Text>
                    <Video
                    style={styles.backgroundVideo}
                    source={{
                    uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
                    }}
                    controls={true}
                    resizeMode="contain"
                    isLooping
                    />
                </View>
                
                <ScrollView>
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>1</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>2</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>3</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>4</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>5</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>6</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>7</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>8</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>9</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>10</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>11</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>12</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />
                    <List.Item
                    title='Titulo Exemplo'
                    description='Video - 05:00 minutos'
                    style={styles.itemList}
                    titleStyle={styles.textTitulo}
                    left={props =><Text style={styles.numberList}>13</Text>}
                    right={props =><TouchableOpacity onPress={() => navigation.navigate('Download')} style={styles.iconList}><MaterialCommunityIcons name="arrow-down-bold-circle" color="rgb(45,77,118)" size={26} /></TouchableOpacity> }
                    />

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
},
backgroundVideo: {
    alignSelf: 'center',
    width:350,
    height: 150,
    marginBottom:30,
  },
imgCurso:{
    width:150,
    height:100,
    resizeMode:'contain',
    borderRadius:15,
},
textTitulo:{
    fontSize:16,
},
list:{
    width:'100%',
},  
itemList:{
    backgroundColor:'#F1F1F1',
},
numberList:{
    fontSize:16,
    alignSelf:'center',
    margin:10,
},
iconList:{
    alignSelf:'center',
},
});
