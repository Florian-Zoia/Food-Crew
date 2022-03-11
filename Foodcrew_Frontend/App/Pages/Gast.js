import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, Button} from 'react-native';


class Gast extends Component {
    static navigationOptions = {
    };

    render() {
        return (

            <View style={{backgroundColor:'#d3e3a8',
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
                    height:160,
                    width:350,
                    borderRadius:20,
                    borderWidth:2,
                    marginTop:50,
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
                    this.props.navigation.navigate('Kocherlebnisplanen',
                    )} style={{backgroundColor: "#B0DE35",

                    borderRadius: 30,
                    borderColor:"green",
                    width:310,
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
