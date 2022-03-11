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
                    flex: 5,
                    backgroundColor: '#fff'
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

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Einstellungen')} 
                        >
                        <Image
                        source={require('../Resources/Images/profilbild leer.png')}
                        style={{
                        height: 100.28,
                        width: 100,
                        resizeMode: 'stretch',
                        marginTop: 67,
                        marginLeft: 42
                    }}
                    />

                    </TouchableOpacity>

                    <View style={{
                        width: '80%',
                        height: '80%',
                        alignitems: 'center',
                        justifycontent: 'center',
                        backgroundColor: 'rgba(250,250,250,1)',
                        marginLeft: '10%',
                        marginTop: '5%',
                        borderColor: '#ffffff',
                        borderWidth: 2,
                        borderRadius: 15
                        }}>

                        <Text style={{
                            fontFamily:'',
                            fontSize:30,
                            textAlign:'right',
                            marginTop: '10%',
                            color:'#000000',
                            fontFamily: 'sans-serif-light'
                            }}>
                            Max Muster
                        </Text>
                    </View>
                </View

                <View style={{
                    flex: 1,
                    alignitems: 'center',
                    justifycontent: 'center'
                    }}>

                    <Text style={{
                        fontFamily:'',
                        fontSize:50,
                        textAlign:'center',
                        marginTop: '10%',
                        color:'#B5915F',
                        fontFamily: 'sans-serif-condensed'
                        }}>
                        NEUES KOCHERLEBNIS
                    </Text>
                </View>

                <View style={{
                    height: 130,
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
                                fontFamily: 'sans-serif-light'
                                }}>
                                ^Planen:
                            </Text>

                            <View style={{
                                flex: 1,
                                backgroundColor: '#fff',
                                alignItems: 'center',
                                justifyContent: 'center'
                                }}>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisplanen')} 
                                    style={{
                                    width: '80%',
                                    height: '50%',
                                    backgroundColor: 'rgba(181, 145, 95, 0.3)',
                                    borderRadius: 15
                                    }}>
                            
                                    <Text style={{
                                        fontFamily:'sans-serif-light',
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
                        height: 130,
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
                                marginLeft: 12,
                                color:'black',
                                fontFamily: 'sans-serif-light'
                                }}>
                                ^Teilnehmen:
                            </Text>

                            <View style={{
                                flex: 1,
                                backgroundColor: '#fff',
                                alignItems: 'center',
                                justifyContent: 'center'
                                }}>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Freundeeinladen')} 
                                    style={{
                                    width: '80%',
                                    height: '50%',
                                    backgroundColor: 'rgba(181, 145, 95, 0.3)',
                                    borderRadius: 15
                                    }}>
                            
                                    <Text style={{
                                        fontFamily:'sans-serif-light',
                                        fontSize:30,
                                        textAlign:'center',
                                        marginTop: '5%',
                                        color:'black'
                                        }}>
                                        Code eingeben
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </View>
        );
    };
}


export default NeuesKocherlebnis;