import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

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
                    flex: 1.5,
                    alignitems: 'center',
                    justifycontent: 'center',
                    backgroundColor: 'rgba(250,250,250,1)',
                    marginTop: '5%',
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
                    GEKOCHTE REZEPTE
                </Text>
            </View>
<ScrollView>
            <View style={{
                backgroundColor: '#fff',
                }}>

                <Text style={{
                    fontFamily:'Baloo2-Regular',
                    fontSize:20,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    }}>
                    Favoriten:
                </Text>

                <Image
                    source={require('../Resources/Images/Line9.png')}
                    style={{
                        marginLeft:'9%',
                    height: 1,
                    width: 315.01,
                    resizeMode: 'stretch',
                    }}
                    />
                    <View style={{flexDirection:"row", alignItems:"flex-start",alignContent:"center"}}>
                    <Image
                        source={require('../Resources/Images/Rectangle57.png')}
                        style={{
                        height: 50,
                        width: 50,
                        resizeMode: 'stretch',
                        marginTop: 8,
                            marginLeft:'15%',
                            marginBottom:'2%'
                        }}
                        />
                            <Text style={{
                                fontFamily:'Baloo2-Regular',
                                fontSize:27.5,
                                color:'black',
                                marginLeft:'10%',
                                marginTop:'3%',
                                }}>
                                Spaghetti
                            </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDo')}
                            style={{marginLeft:'10%', marginTop:'3%'}}>
                                <Image
                                    source={require('../Resources/Images/arrow.png')}
                                    style={{
                                    height: 50,
                                    width: 50,
                                    resizeMode: 'stretch',
                                    }}
                                    />

                        </TouchableOpacity>
                    </View>

                    <Image
                        source={require('../Resources/Images/Line9.png')}
                        style={{
                            marginLeft:'9%',
                        height: 1,
                        width: 315.01,
                        resizeMode: 'stretch',
                        }}
                        />

                <View style={{flexDirection:"row", alignItems:"flex-start",alignContent:"center"}}>
                    <Image
                        source={require('../Resources/Images/Rectangle57.png')}
                        style={{
                            height: 50,
                            width: 50,
                            resizeMode: 'stretch',
                            marginTop: 8,
                            marginLeft:'15%',
                            marginBottom:'2%'
                        }}
                    />
                    <Text style={{
                        fontFamily:'Baloo2-Regular',
                        fontSize:27.5,
                        color:'black',
                        marginLeft:'10%',
                        marginTop:'3%',
                    }}>
                        Lasagne
                    </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDo')}
                                      style={{marginLeft:'10%', marginTop:'3%'}}>
                        <Image
                            source={require('../Resources/Images/arrow.png')}
                            style={{
                                height: 50,
                                width: 50,
                                resizeMode: 'stretch',
                            }}
                        />

                    </TouchableOpacity>
                </View>

                    <Image
                        source={require('../Resources/Images/Line9.png')}
                        style={{
                        marginLeft:'9%',
                        height: 1,
                        width: 315.01,
                        resizeMode: 'stretch',
                        }}
                        />
            </View>




                    <View style={{
                        backgroundColor: '#fff',
                    }}>

                        <Text style={{
                            fontFamily:'Baloo2-Regular',
                            fontSize:20,
                            textAlign:'left',
                            marginLeft: 36,
                            color:'black',
                        }}>
                           Alle:
                        </Text>

                        <Image
                            source={require('../Resources/Images/Line9.png')}
                            style={{
                                marginLeft:'9%',
                                height: 1,
                                width: 315.01,
                                resizeMode: 'stretch',
                            }}
                        />
                        <View style={{flexDirection:"row", alignItems:"flex-start",alignContent:"center"}}>
                            <Image
                                source={require('../Resources/Images/Rectangle57.png')}
                                style={{
                                    height: 50,
                                    width: 50,
                                    resizeMode: 'stretch',
                                    marginTop: 8,
                                    marginLeft:'15%',
                                    marginBottom:'2%'
                                }}
                            />
                            <Text style={{
                                fontFamily:'Baloo2-Regular',
                                fontSize:27.5,
                                color:'black',
                                marginLeft:'10%',
                                marginTop:'3%',
                            }}>
                                Spaghetti
                            </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDo')}
                                              style={{marginLeft:'10%', marginTop:'3%'}}>
                                <Image
                                    source={require('../Resources/Images/arrow.png')}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        resizeMode: 'stretch',
                                    }}
                                />

                            </TouchableOpacity>
                        </View>

                        <Image
                            source={require('../Resources/Images/Line9.png')}
                            style={{
                                marginLeft:'9%',
                                height: 1,
                                width: 315.01,
                                resizeMode: 'stretch',
                            }}
                        />

                        <View style={{flexDirection:"row", alignItems:"flex-start",alignContent:"center"}}>
                            <Image
                                source={require('../Resources/Images/Rectangle57.png')}
                                style={{
                                    height: 50,
                                    width: 50,
                                    resizeMode: 'stretch',
                                    marginTop: 8,
                                    marginLeft:'15%',
                                    marginBottom:'2%'
                                }}
                            />
                            <Text style={{
                                fontFamily:'Baloo2-Regular',
                                fontSize:27.5,
                                color:'black',
                                marginLeft:'10%',
                                marginTop:'3%',
                            }}>
                                Lasagne
                            </Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDo')}
                                              style={{marginLeft:'10%', marginTop:'3%'}}>
                                <Image
                                    source={require('../Resources/Images/arrow.png')}
                                    style={{
                                        height: 50,
                                        width: 50,
                                        resizeMode: 'stretch',
                                    }}
                                />

                            </TouchableOpacity>
                        </View>

                        <Image
                            source={require('../Resources/Images/Line9.png')}
                            style={{
                                marginLeft:'9%',
                                height: 1,
                                width: 315.01,
                                resizeMode: 'stretch',
                            }}
                        />
                    </View>
</ScrollView>
                </View>
                </View>
        );
    };
}


export default GekochteRezepte;