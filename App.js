import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet, Image,TextInput,TouchableOpacity } from 'react-native';
import StatusBarColor from './components/StatusBarColor';
import { IconButton } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyTabs from './pages/Tabs';
import api from './services/API'

export default function App({navigation}) {
  const token = global.Session
  return (
    <View style={styles.backgroud}>

      <StatusBarColor backgroundColor='rgb(45,77,118)' barStyle='light-content'/>

      <View style={styles.nav}>
          <Image style={styles.logo} source={require('./img/Logo2.png')}/>     
          <IconButton 
          icon="account-circle" color="white" style={styles.iconuser} onPress={async() =>{
            const response = await api.get("autenticacao/encerrasessao/clinicam/"+token)
            navigation.navigate('Login')
          }
            
          } 
          />         
      </View>

{/*       <View style={styles.viewSearch}>
        <TextInput
        style={styles.input}
        placeholder="Procurar"
        />
          <TouchableOpacity style={styles.icon}>
              <MaterialCommunityIcons name="magnify" color="rgb(45,77,118)" size={20} /> 
          </TouchableOpacity>
      </View> */}
      <MyTabs/>

    <View style={styles.footer}>
        <Text>Copyright © Clinitec 2020</Text>
    </View>
    
  </View>
  );
};

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
    marginBottom: 0,
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
    top: 12,
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

});