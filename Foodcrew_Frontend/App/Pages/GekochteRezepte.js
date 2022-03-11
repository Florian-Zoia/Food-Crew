import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet} from 'react-native';

class GekochteRezepte extends Component{
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
                        marginLeft: 328,
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
                </View>
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
                    GEKOCHTE REZEPTE
                </Text>
            </View>

            <View style={{
                height: 130,
                width: 125,
                backgroundColor: '#fff',
                }}>

                <Text style={{
                    fontFamily:'',
                    fontSize:30,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    fontFamily: 'sans-serif-light'
                    }}>
                    Favoriten:
                </Text>

                <Image
                    source={require('../Resources/Images/line9.png')}
                    style={{
                    height: 1,
                    width: 315.01,
                    resizeMode: 'stretch',
                    }}
                    />
                    
                    <Image
                        source={require('../Resources/Images/Rectangle57.png')}
                        style={{
                        height: 50,
                        width: 50,
                        resizeMode: 'stretch',
                        marginTop: 8,
                        marginLeft: 328,
                        }}
                        />

                        </TouchableOpacity>

                            <Text style={{
                                fontFamily:'',
                                fontSize:27.5,
                                textAlign:'left',
                                marginLeft: 115,
                                color:'black',
                                fontFamily: 'sans-serif-light'
                                }}>
                                Spaghetti
                            </Text>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDo')} 
                                >
                                <Image
                                    source={require('../Resources/Images/arrow.png')}
                                    style={{
                                    height: 30,
                                    width: 30,
                                    resizeMode: 'stretch',
                                    }}
                                    />

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
                height: 130,
                width: 125,
                backgroundColor: '#fff',
                }}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDo')} 
                    >
                    <Image
                        source={require('../Resources/Images/arrow.png')}
                        style={{
                        height: 30,
                        width: 30,
                        resizeMode: 'stretch',
                        }}
                        />

                </TouchableOpacity>
                    <Image
                        source={require('../Resources/Images/line9.png')}
                        style={{
                        height: 1,
                        width: 315.01,
                        resizeMode: 'stretch',
                        }}
                        />

                <Text style={{
                    fontFamily:'',
                    fontSize:18,
                    textAlign:'left',
                    marginLeft: 119,
                    color:'black',
                    fontFamily: 'sans-serif-light'
                    }}>
                    mehr
                </Text>

            </View>

            <View style={{
                height: 130,
                width: 125,
                backgroundColor: '#fff',
                }}>

                <Text style={{
                    fontFamily:'',
                    fontSize:30,
                    textAlign:'left',
                    marginLeft: 33,
                    color:'black',
                    fontFamily: 'sans-serif-light'
                    }}>
                    Alle:
                </Text>

                <Image
                    source={require('../Resources/Images/line9.png')}
                    style={{
                    height: 1,
                    width: 315.01,
                    resizeMode: 'stretch',
                    }}
                    />

                <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDo')} 
                    >

                    <Image
                        source={require('../Resources/Images/arrow.png')}
                        style={{
                        height: 30,
                        width: 30,
                        resizeMode: 'stretch',
                        }}
                        />

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
                height: 130,
                width: 125,
                backgroundColor: '#fff',
                }}>

                        
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDo')} 
                    >

                    <Image
                        source={require('../Resources/Images/arrow.png')}
                        style={{
                        height: 30,
                        width: 30,
                        resizeMode: 'stretch',
                        }}
                        />

                </TouchableOpacity>

                <Image
                    source={require('../Resources/Images/line9.png')}
                    style={{
                    height: 1,
                    width: 315.01,
                    resizeMode: 'stretch',
                    }}
                    />

                <Text style={{
                    fontFamily:'',
                    fontSize:18,
                    textAlign:'left',
                    marginLeft: 119,
                    color:'black',
                    fontFamily: 'sans-serif-light'
                    }}>
                    mehr
                </Text>
            </View>
        );
    };
}


export default GekochteRezepte;