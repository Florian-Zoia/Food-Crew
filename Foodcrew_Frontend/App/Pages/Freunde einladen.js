import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet} from 'react-native';

class Freundeeinladen extends Component{
    static navigationOptions = {
    };

    render() {
        return (

            <View style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>
            
            <View style={{
                flex: 5,
                backgroundColor: '#fff'
            }}>

                <View 
                style={{
                width: '80%',
                height: '80%',
                alignitems: 'center',
                justifycontent: 'center',
                backgroundColor: 'rgba(228,188,136,0.1)',
                marginLeft: '10%',
                marginTop: '5%',
                borderColor: '#E4BC88',
                borderWidth: 2,
                borderRadius: 15
                }}>

                    <Text style={{
                    fontFamily:'',
                    fontSize:30,
                    textAlign:'center',
                    marginTop: '10%',
                    color:'#B5915F',
                    fontFamily: 'sans-serif-condensed'
                    }}>
                    NEUES KOCHERLEBNIS
                    </Text>

                </View>

            </View>

            <View style={{
                flex: 1,
                backgroundColor: '#fff',
            }}></View>

            <View style={{
                flex: 2,
                backgroundColor: '#fff',
            }}>

                    <Text style={{
                    fontFamily:'',
                    fontSize:25,
                    textAlign:'left',
                    marginTop: '2.5%',
                    marginLeft: '10%',
                    color:'black',
                    }}>
                    Code hier eingeben:
                    </Text>

            </View>

            <View style={{
                flex: 2,
                backgroundColor: '#fff',
                alignitems: 'center',
                justifyContent: 'center'
            }}>

                <TextInput 
                    style={{
                        height: '80%',
                        width: '80%',
                        borderColor: '#B5915F',
                        borderRadius: 15,
                        borderWidth: 2,
                        textAlign: 'center',
                        fontSize: 20,
                        marginLeft: '10%'
                    }}
                    placeholder="ID eingeben">


                </TextInput>


            </View>
            
            <View style={{
                flex: 8,
                backgroundColor: '#fff'
            }}>

            
            </View>

            <View style={{
                flex: 4,
                flexDirection: 'row',
                backgroundColor: '#000fff'
            }}>

                    <View style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        
                        
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} 
                        style={{
                            width: '80%',
                            height: '50%',
                            backgroundColor: 'rgba(181, 145, 95, 0.5)',
                            borderRadius: 15
                        }}>
                            
                            <Text style={{
                            fontFamily:'',
                            fontSize:25,
                            textAlign:'center',
                            marginTop: '5%',
                            color:'black'
                            }}>
                                Fertig
                            </Text>
                    
                    </TouchableOpacity>


                    </View>

                    <View style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                        style={{
                            width: '80%',
                            height: '50%',
                            backgroundColor: 'rgba(181, 145, 95, 0.3)',
                            borderRadius: 15
                        }}>
                            
                            <Text style={{
                            fontFamily:'',
                            fontSize:25,
                            textAlign:'center',
                            marginTop: '5%',
                            color:'black'
                            }}>
                                Abbrechen
                            </Text>
                    
                    </TouchableOpacity>

                    </View>
            
            </View>

            </View>

        );

    };

}

export default Freundeeinladen;