import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet} from 'react-native';

class Kocherlebnisse extends Component{
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
                            }}
                            />

                </TouchableOpacity>

                <View 
                    style={{
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
            </View>

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
                    KOCHERLEBNISSE
                </Text>

                <Text style={{
                    fontFamily:'',
                    fontSize:30,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    fontFamily: 'sans-serif-light'
                    }}>
                    Anstehend:
                </Text>
            </View>

            <View style={{
                height: 1,
                width: '80%',
                backgroundColor: '#E4BC88',
                marginLeft: '10%'
                }}>
            </View>

            <View style={{
                height: 25,
                width: '100%',
                backgroundColor: '#fff',
                marginTop: 10
                }}>

                <Text style={{
                    fontFamily:'',
                    fontSize:27.5,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    fontFamily: 'sans-serif-light'
                    }}>
                    Erlebnis 1
                </Text>

                <Text style={{
                    fontFamily:'',
                    fontSize:18,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    fontFamily: 'sans-serif-light'
                    }}>
                    Vegan, ohne Nüsse
                </Text>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisplanen')} 
                    style={{
                    width: '80%',
                    height: '50%',
                    backgroundColor: 'rgba(181, 145, 95, 0.3)',
                    borderRadius: 15
                    }}>
                            
                    <Text style={{
                        fontFamily:'sans-serif-light',
                        fontSize:24,
                        textAlign:'center',
                        marginTop: '5%',
                        color:'black'
                        }}>
                        einkaufen
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisplanen')} 
                    style={{
                    width: '80%',
                    height: '50%',
                    backgroundColor: 'rgba(181, 145, 95, 0.3)',
                    borderRadius: 15
                    }}>
                            
                    <Text style={{
                        fontFamily:'sans-serif-light',
                        fontSize:24,
                        textAlign:'center',
                        marginTop: '5%',
                        color:'black'
                        }}>
                        starten
                        </Text>

                </TouchableOpacity>

                <Image
                    source={require('../Resources/Images/line9.png')}
                    style={{
                    height: 1,
                    width: 315.01,
                    resizeMode: 'stretch',
                    }}
                    />
            </View>
                        
            <View style={{
                height: 25,
                width: '100%',
                backgroundColor: '#fff',
                marginTop: 10
                }}>

                <Text style={{
                    fontFamily:'',
                    fontSize:27.5,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    fontFamily: 'sans-serif-light'
                    }}>
                    Erlebnis 2
                </Text>

                <Text style={{
                    fontFamily:'',
                    fontSize:18,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    fontFamily: 'sans-serif-light'
                    }}>
                    Vegan, ohne Nüsse
                </Text>

                <Image
                    source={require('../Resources/Images/line9.png')}
                    style={{
                    height: 1,
                    width: 315.01,
                    resizeMode: 'stretch',
                    }}
                    />

            </View>

            <View style={{
                height: 25,
                width: '100%',
                backgroundColor: '#fff',
                marginTop: 10
                }}>

                <Text style={{
                    fontFamily:'',
                    fontSize:27.5,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    fontFamily: 'sans-serif-light'
                    }}>
                    Erlebnis 3
                </Text>

                <Text style={{
                    fontFamily:'',
                    fontSize:18,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    fontFamily: 'sans-serif-light'
                    }}>
                    Vegan, ohne Nüsse
                </Text>

                <Image
                    source={require('../Resources/Images/line9.png')}
                    style={{
                    height: 1,
                    width: 315.01,
                    resizeMode: 'stretch',
                    }}
                    />

            </View>
        );
    };
}


export default Kocherlebnisse;