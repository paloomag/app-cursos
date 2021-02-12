import React from 'react';
import { View, Text, KeyboardAvoidingView, StyleSheet} from 'react-native';
/* import StatusBarColor from '../components/StatusBarColor' */
import api from '../services/API';

export default function Categoria ({navigation}) {
       
    return(
        <KeyboardAvoidingView style={styles.backgroud}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Categoria!</Text>
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
});
