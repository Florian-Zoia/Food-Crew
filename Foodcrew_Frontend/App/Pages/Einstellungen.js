import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

class Einstellungen extends Component{
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

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Einkaufsliste')} 
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

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Einkaufsliste')} 
                    >

                            <Image
                            source={require('../Resources/Images/Profilplus.png')}
                            style={{
                            height: 100,
                            width: 100,
                            resizeMode: 'stretch',
                            }}
                            />

                    </TouchableOpacity>



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
                                PERSÖNLICHE ANGABEN
                            </Text>


                </View>


                    <View style={{
                        height: 320,
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
                                Name:
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
                            placeholder="Max Muster">


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
                                E-Mail:
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
                            placeholder="maxmuster@gmail.com">


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
                                Passwort:
                            </Text>

                        </View>

                        <View style={{
                            height: 50,
                            width: '100%',
                            backgroundColor: '#fff',
                            flexDirection: 'row',
                        }}>

                            <View style={{
                                flex: 2,
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
                                xxx
                            </Text>

                            </View>

                            <View style={{
                                flex: 1,
                                backgroundColor: '#fff',
                                alignItems: 'center',
                                justifyContent: 'center' 
                            }}>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Passwort')} 
                                style={{
                                width: '70%',
                                height: '50%',
                                backgroundColor: 'rgba(181, 145, 95, 0.3)',
                                borderRadius: 15
                                }}>
                            
                                <Text style={{
                                fontFamily:'',
                                fontSize:15,
                                textAlign:'center',
                                marginTop: '3%',
                                color:'black'
                                }}>
                                Ändern
                                </Text>
                    
                            </TouchableOpacity>
                            </View>

                        </View>



                    </View>

                    <View style={{
                        height: 80,
                        width: '100%',
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'flex-end'
                    }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Einkaufsliste')} 
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

export default Einstellungen;