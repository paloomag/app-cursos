import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet, Image, SafeAreaView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../services/API';
import { IconButton } from 'react-native-paper';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MyTabs from './MyTabs';

export default function Menu ({navigation}) {
       
    return(
        <SafeAreaView style={styles.backgroud}>
            <MyTabs/>
        </SafeAreaView>
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
});