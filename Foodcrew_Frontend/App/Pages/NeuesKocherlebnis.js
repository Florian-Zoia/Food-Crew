import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet} from 'react-native';

class NeuesKocherlebnis extends Component{
    static navigationOptions = {

    };

    render() {
        return (
            <View style={{
                flex: 1,
                alignitems: 'center',
                justifycontent: 'center'
                }}>

                <View style={{
                    flex: 1.5,
                    alignitems: 'center',
                    justifycontent: 'center',
                    backgroundColor: 'rgba(250,250,250,1)',
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    borderRadius: 15
                }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Einstellungen')}
                    >
                        <Image
                            source={require('../Resources/Images/Einstellungen.png')}
                            style={{
                                height: 50,
                                width: 50,
                                resizeMode: 'stretch',
                                marginTop: 8,
                                marginLeft: 328
                            }}
                        />

                    </TouchableOpacity>
                    <View style={{
                        alignItems:"center",

                    }}>
                        <View style={{
                            alignItems:"center",
                            flexDirection:"row",

                        }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Einstellungen')}>
                                <Image
                                    source={require('../Resources/Images/profilbildLeer.png')}
                                    style={{
                                        height: 100.28,
                                        width: 100,
                                    }}
                                /></TouchableOpacity>

                            <Text style={{
                                marginLeft:5,
                                fontFamily:'',
                                fontSize:30,
                                color:'#000000',
                            }}>
                                Max Muster
                            </Text>
                        </View>
                    </View>
                    </View>
                <View style={{
                    flex: 4,
                    backgroundColor: '#fff'
                }} >

                <View style={{
                    alignitems: 'center',
                    justifycontent: 'center'
                }}>

                    <Text style={{
                        fontFamily:'AmaticSC-Bold',
                        fontSize:50,
                        textAlign:'center',
                        color:'#B5915F',
                    }}>
                        NEUES KOCHERLEBNIS
                    </Text>
                </View>

                <View style={{
                    height:150,
                    width: '100%',
                    backgroundColor: '#fff',
                    AlignItems: 'center',
                    justifyContent: 'center'
                    }}>
                    <View style={{
                        height: '90%',
                        width: '80%',
                        borderColor: '#E4BC88',
                        borderWidth: 2,
                        borderRadius: 15,
                        marginLeft: '10%'
                        }}>
                            <Text style={{
                                fontFamily:'',
                                fontSize:30,
                                textAlign:'left',
                                marginLeft: 25,
                                color:'black',
                                }}>
                                Planen:
                            </Text>

                            <View style={{
                                backgroundColor: '#fff',
                                alignItems: 'center',
                                justifyContent: 'center'
                                }}>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisplanen')}
                                    style={{
                                    width: '70%',
                                    backgroundColor: 'rgba(181, 145, 95, 0.3)',
                                    borderRadius: 15
                                    }}>

                                    <Text style={{
                                        fontFamily:'Baloo2-Regular',
                                        fontSize:30,
                                        textAlign:'center',
                                        marginTop: '5%',
                                        color:'black'
                                        }}>
                                        frei
                                    </Text>
                                </TouchableOpacity>
                            </View>
                    </View>



                    </View>
                    <View style={{
                        height:150,
                        width: '100%',
                        backgroundColor: '#fff',
                        AlignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            height: '90%',
                            width: '80%',
                            borderColor: '#E4BC88',
                            borderWidth: 2,
                            borderRadius: 15,
                            marginLeft: '10%'
                        }}>
                            <Text style={{
                                fontFamily:'',
                                fontSize:30,
                                textAlign:'left',
                                marginLeft: 25,
                                color:'black',
                            }}>
                                Teilnehmen:
                            </Text>

                            <View style={{
                                backgroundColor: '#fff',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisplanen')}
                                                  style={{
                                                      width: '70%',
                                                      backgroundColor: 'rgba(181, 145, 95, 0.3)',
                                                      borderRadius: 15
                                                  }}>

                                    <Text style={{
                                        fontFamily:'Baloo2-Regular',
                                        fontSize:30,
                                        textAlign:'center',
                                        marginTop: '5%',
                                        color:'black'
                                    }}>
                                        Code Eingeben
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>



                    </View>
                </View>
            </View>

        );
    };
}


export default NeuesKocherlebnis;