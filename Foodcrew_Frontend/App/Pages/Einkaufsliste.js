import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

class Einkaufsliste extends Component{
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

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisplanen')} 
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
                    height: 50,
                    width: '100%',
                    backgroundColor: '#fff'
                }}>

                    <Text style={{
                    fontFamily:'',
                    fontSize:35,
                    textAlign:'center',
                    color:'black',
                    fontFamily: 'sans-serif-condensed'
                    }}>
                    EINKAUFSLISTE
                    </Text>

                </View>

                
                
                <View style={{
                    height: 2,
                    width: '80%',
                    marginLeft: '10%',
                    backgroundColor: '#E4BC88'
                }}></View>


                <ScrollView horizontal={false} vertical={true}>
                
                <View style={{
                    flexDirection: 'row',
                    height: 40,
                    width: '100%',
                    backgroundColor: '#fff',
                    marginTop: 20
                }}>

                    <View style={{
                        flex:2,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <View style={{
                            height: 30,
                            width: 30,
                            borderColor: '#E4BC88',
                            borderRadius: 15,
                            borderWidth: 2,
                        }}></View>

                    </View>

                    <View style={{
                        flex:8,
                        backgroundColor: '#fff',
                        justifyContent: 'center'
                    }}>

                            <Text style={{
                            fontFamily:'sans-serif-light',
                            fontSize:20,
                            textAlign:'left',
                            color:'black'
                            }}>
                                500g Nudeln
                            </Text>
                    </View>




                </View>

                <View style={{
                    flexDirection: 'row',
                    height: 40,
                    width: '100%',
                    backgroundColor: '#fff'
                }}>

                    <View style={{
                        flex:2,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <View style={{
                            height: 30,
                            width: 30,
                            borderColor: '#E4BC88',
                            borderRadius: 15,
                            borderWidth: 2,
                        }}></View>

                    </View>

                    <View style={{
                        flex:8,
                        backgroundColor: '#fff',
                        justifyContent: 'center'
                    }}>

                            <Text style={{
                            fontFamily:'sans-serif-light',
                            fontSize:20,
                            textAlign:'left',
                            color:'black'
                            }}>
                                250g Nudeln
                            </Text>
                    </View>




                </View>

                <View style={{
                    flexDirection: 'row',
                    height: 40,
                    width: '100%',
                    backgroundColor: '#fff'
                }}>

                    <View style={{
                        flex:2,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <View style={{
                            height: 30,
                            width: 30,
                            borderColor: '#E4BC88',
                            borderRadius: 15,
                            borderWidth: 2,
                        }}></View>

                    </View>

                    <View style={{
                        flex:8,
                        backgroundColor: '#fff',
                        justifyContent: 'center'
                    }}>

                            <Text style={{
                            fontFamily:'sans-serif-light',
                            fontSize:20,
                            textAlign:'left',
                            color:'black'
                            }}>
                                1 Handvoll Basilikum
                            </Text>
                    </View>




                </View>

                <View style={{
                    flexDirection: 'row',
                    height: 40,
                    width: '100%',
                    backgroundColor: '#fff'
                }}>

                    <View style={{
                        flex:2,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                        <View style={{
                            height: 30,
                            width: 30,
                            borderColor: '#E4BC88',
                            borderRadius: 15,
                            borderWidth: 2,
                        }}></View>

                    </View>

                    <View style={{
                        flex:8,
                        backgroundColor: '#fff',
                        justifyContent: 'center'
                    }}>

                            <Text style={{
                            fontFamily:'sans-serif-light',
                            fontSize:20,
                            textAlign:'left',
                            color:'black'
                            }}>
                                4 Donuts
                            </Text>
                    </View>




                </View>

                </ScrollView>

                <View style={{
                        height: 100,
                        width: '100%',
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Einstellungen')} 
                        style={{
                            width: '50%',
                            height: '50%',
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
export default Einkaufsliste;