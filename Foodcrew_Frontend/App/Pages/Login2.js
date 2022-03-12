import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, Button} from 'react-native';

class Login2 extends Component {
    static navigationOptions = {
    };

    render() {
        return (

            <View style={{backgroundColor:'#d3e3a8',
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
                    height:160,
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
                        height:40,
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
                        height:40,
                    }}>
                    </TextInput>
                </View>

                <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('NeuesKocherlebnis',
                    )} style={{backgroundColor: "#B0DE35",

                    borderRadius: 30,
                    borderColor:"#B0DE35",
                    width:310,
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
                    )} style={{backgroundColor: "#B0DE35",

                    borderRadius: 30,
                    borderColor:"green",
                    width:310,
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
                    )} style={{backgroundColor: "#B0DE35",
                    borderRadius: 30,
                    borderColor:"black",
                    width:310,
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
