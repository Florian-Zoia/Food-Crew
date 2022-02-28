import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
//import { amatic-sc-700normal } from 'typeface-amatic-sc';
//import {} from "@expo-google-fonts/amatic-sc";


class Login extends Component {
    static navigationOptions = {
    };



    render() {
        return (

            <View style={{backgroundColor:'#017301',
            flex:1,
            alignItems:'center',
            alignContent:'center'}}>

                <Text style={{
                    fontFamily:'',
                    fontSize:60,
                    textAlign:'center',
                    marginTop:150,
                    color:'white'

                }}
                >FOODCREW</Text>
                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('Kocherlebnisstarten',
                        )
                    }
                    style={{
                    alignItems:'center',
                }}
                >
                <Image
                    source={require('../Resources/Images/StartEmoji.png')}
                />
                </TouchableOpacity
                >
                <Text style={{
                    fontFamily:'',
                    fontSize:24,
                    textAlign:'center',
                    color:'white'

                }}
                >tastes like fun</Text>
            </View>

        );
    }
}
export default Login;
