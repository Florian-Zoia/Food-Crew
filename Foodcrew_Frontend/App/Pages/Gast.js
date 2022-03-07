import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, Button} from 'react-native';
import {} from "native-base";
//import { amatic-sc-700normal } from 'typeface-amatic-sc';
//import {} from "@expo-google-fonts/amatic-sc";


class Gast extends Component {
    static navigationOptions = {
    };

    render() {
        return (

            <View style={{backgroundColor:'#B0DE35',
                flex:1,
                alignItems:'center',
                alignContent:'center',
                shadowOpacity:100,}}>
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
                        fontSize:20}}>Username:</Text>
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
                        fontSize:20}}>Allergien:</Text>
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
                    width:250,
                    alignItems:"center",
                    height:50,
                    justifyContent:"space-around",
                marginTop:50}}>
                    <Text style={{marginLeft:10,
                        fontFamily:'Baloo2-Regular',
                        fontSize:20}}>anmelden</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default Gast;
