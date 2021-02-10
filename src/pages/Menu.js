import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
/* import StatusBarColor from '../components/StatusBarColor' */
import api from '../services/API';
import { IconButton } from 'react-native-paper';

export default function Menu ({navigation}) {
       
    return(
        <KeyboardAvoidingView style={styles.backgroud}>
        {/*   
            <StatusBarColor hidden={true}/> */}

        <View style={styles.nav}>
          <Image style={styles.logo} source={require('../img/Logo.png')}/>     
          <IconButton 
          icon="camera" color="white" style={styles.iconuser} />         
        </View>
            <View style={styles.footer}>
                <Text  style={styles.textfooter} >Copyright © Clinitec 2020</Text>
            </View>

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
    color:'white',
},

});
