import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, Button} from 'react-native';
import {} from "native-base";
//import { amatic-sc-700normal } from 'typeface-amatic-sc';
//import {} from "@expo-google-fonts/amatic-sc";


class Login2 extends Component {
    static navigationOptions = {
    };

    render() {
        return (

            <View style={{backgroundColor:'#B0DE35',
                flex:1,
                alignItems:'center',
                alignContent:'center',
            shadowOpacity:100,
                flexDirection:"column",justifyContent:'space-between',padding:40}}>
                <Text style={{
                    fontFamily:'AmaticSC-Bold',
                    fontSize:60,
                    textAlign:'center',
                    color:'black'

                }}
                >Log In</Text>
<View style={{
    backgroundColor: 'white',
    borderColor:'#017301',
    height:180,
    width:350,
    borderRadius:20,
    borderWidth:2,
}}>
    <Text style={{marginLeft:10,
        fontFamily:'Baloo2-Regular',
    fontSize:20}}>E-Mail:</Text>
    <TextInput style={{
        width:300,
        borderRadius:5,
        borderColor: 'black',
        borderWidth:1,
        alignSelf: "center",
        height:30,
    }}>


    </TextInput>
    <Text style={{marginLeft:10,
        fontFamily:'Baloo2-Regular',
        fontSize:20}}>Passwort:</Text>
    <TextInput style={{
        width:300,
        borderRadius:5,
        borderColor: 'black',
        borderWidth:1,
        alignSelf: "center",
        height:30,
    }}>
    </TextInput>
</View>

                <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('Startpage',
                    )} style={{backgroundColor: "green",

                    borderRadius: 30,
                borderColor:"green",
                    width:350,
                    alignItems:"center",
                    height:50,
                    justifyContent:"space-around"}}>
                    <Text style={{marginLeft:10,
                        fontFamily:'Baloo2-Regular',
                        fontSize:20}}>anmelden</Text>
                </TouchableOpacity>

                <View style={{
                    backgroundColor: 'white',
                    borderColor:'#017301',
                    height:50,
                    width:150,
                    borderRadius:100,
                    borderWidth:2,
                    alignItems:'center',
                    alignContent:'center'
                }}>
                    <Text style={{fontFamily:'AmaticSC-Bold',
                        fontSize:30,
                        color:'black',
                    marginBottom:5}}>NEU?</Text>
                </View>

                <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('Signin',
                    )} style={{backgroundColor: "green",

                    borderRadius: 30,
                    borderColor:"green",
                    width:350,
                    height:50,
                    alignItems:"center",
                    justifyContent:"space-around"
              }}>
                    <Text style={{
                        fontFamily:'Baloo2-Regular',
                        fontSize:20}}>Account erstellen</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('Gast',
                    )} style={{backgroundColor: "green",
                    borderRadius: 30,
                    borderColor:"black",
                    width:350,
                    height:50,
                    alignItems:"center",
                    justifyContent:"space-around"}}>
                    <Text style={{marginLeft:10,
                        fontFamily:'Baloo2-Regular',
                        fontSize:20}}>Als Gast anmelden</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
export default Login2;
