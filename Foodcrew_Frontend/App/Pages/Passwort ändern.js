import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

class Passwort extends Component{
    static navigationOptions = {
    };

    render() {
        return (

            <View style={{
                flex: 1,
                backgroundColor: '#fff'

            }}>

                <View style={{
                    height: 70,
                    width: '100%',
                    backgroundColor: '#fff'

                }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Einstellungen')} 
                    >

                            <Image
                            source={require('../Resources/Images/pfeil.png')}
                            style={{
                            height: 40,
                            width: 50,
                            resizeMode: 'stretch',
                            marginTop: 20,
                            marginLeft: 20
                            }}
                            />

                    </TouchableOpacity>

                </View>

                <View style={{
                    height: 100,
                    width: '100%',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                            <Image
                            source={require('../Resources/Images/profilbild.png')}
                            style={{
                            height: 100,
                            width: 100,
                            resizeMode: 'stretch',
                            }}
                            />



                </View>

                <View style={{
                    height: 60,
                    width: '100%',
                    justifyContent: 'center'

                }}>

                            <Text style={{
                            fontFamily:'sans-serif-condensed',
                            fontSize:25,
                            textAlign:'center',
                            color:'#B5915F',
                            marginTop: 20
                            }}>
                                PASSWORT ÄNDERN
                            </Text>


                </View>


                    <View style={{
                        height: 330,
                        width:'90%',
                        marginLeft: '5%',
                        backgroundColor: '#fff',
                        borderColor: '#E4BC88',
                        borderRadius: 15,
                        borderWidth: 2,
                        alignItems: 'center',

                    }}>

                        <View style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: '#fff',
                            justifyContent: 'center',
                            marginTop: 10

                        }}>

                            <Text style={{
                            fontFamily:'',
                            fontSize:20,
                            textAlign:'left',
                            color:'black',
                            marginLeft: 20
                            }}>
                                Passwort (alt):
                            </Text>

                        </View>

                        <View style={{
                            height: 60,
                            width: '100%',
                            backgroundColor: '#fff',
                            justifyContent: 'center'

                        }}>

                            <TextInput 
                            style={{
                            height: '70%',
                            width: '90%',
                            borderColor: 'black',
                            borderRadius: 15,
                            borderWidth: 1,
                            textAlign: 'left',
                            fontSize: 20,
                            marginLeft: '5%',
                            color:'black'
                            }}
                            placeholder="alt">


                            </TextInput>


                        </View>

                        <View style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: '#fff',
                            justifyContent: 'center'

                        }}>

                            <Text style={{
                            fontFamily:'',
                            fontSize:20,
                            textAlign:'left',
                            color:'black',
                            marginLeft: 20
                            }}>
                                Passwort (neu):
                            </Text>

                        </View>

                        <View style={{
                            height: 60,
                            width: '100%',
                            backgroundColor: '#fff',
                            justifyContent: 'center'

                        }}>

                            <TextInput 
                            style={{
                            height: '70%',
                            width: '90%',
                            borderColor: 'black',
                            borderRadius: 15,
                            borderWidth: 1,
                            textAlign: 'left',
                            fontSize: 20,
                            marginLeft: '5%',
                            color:'black'
                            }}
                            placeholder="neu">


                            </TextInput>


                        </View>


                        <View style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: '#fff',
                            justifyContent: 'center'

                        }}>

                            <Text style={{
                            fontFamily:'',
                            fontSize:20,
                            textAlign:'left',
                            color:'black',
                            marginLeft: 20
                            }}>
                                Passwort (neu):
                            </Text>

                        </View>

                        <View style={{
                            height: 60,
                            width: '100%',
                            backgroundColor: '#fff',
                        }}>

                            <TextInput 
                            style={{
                            height: '70%',
                            width: '90%',
                            borderColor: 'black',
                            borderRadius: 15,
                            borderWidth: 1,
                            textAlign: 'left',
                            fontSize: 20,
                            marginLeft: '5%',
                            color:'black'
                            }}
                            placeholder="neu (wiederholen)">


                            </TextInput>

                            

                        </View>



                    </View>

                    <View style={{
                        height: 80,
                        width: '100%',
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Einstellungen')} 
                        style={{
                            width: '50%',
                            height: '60%',
                            backgroundColor: 'rgba(181, 145, 95, 0.3)',
                            borderRadius: 15
                        }}>
                            
                            <Text style={{
                            fontFamily:'',
                            fontSize:25,
                            textAlign:'center',
                            marginTop: '3%',
                            color:'black'
                            }}>
                                Fertig
                            </Text>
                    
                    </TouchableOpacity>

                    </View>


            </View>

        );

    };

}

export default Passwort;