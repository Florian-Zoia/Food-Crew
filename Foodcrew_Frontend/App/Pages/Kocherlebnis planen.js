import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

class Kocherlebnisplanen extends Component{
    static navigationOptions = {
    };

    render() {
        return (

            <View style={{
                flex:1,
                backgroundColor: '#fff'
            }}>

                <View style={{
                    height: '30%',
                    width: '100%',
                    backgroundColor: '#fff'
                }}>

                    <View 
                    style={{
                    width: '80%',
                        height:'80%',
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
                        fontFamily:'Baloo2-Regular',
                        fontSize:30,
                        textAlign:'center',
                        marginTop: '10%',
                        color:'#B5915F',
                        }}>
                        NEUES KOCHERLEBNIS
                        </Text>
                        <Text style={{
                            fontFamily:'BethEllen-Regular',
                            fontSize:30,
                            textAlign:'center',
                            color:'#B5915F',
                        }}>
                            Planen
                        </Text>

                    </View>

                </View>

                    <ScrollView vertical={true} horizontal={false} style={{backgroundColor: '#fff'}}>

                        <View style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: '#fff'
                        }}>
                            
                            <Text style={{
                            fontFamily:'Baloo2-Regular',
                            fontSize:25,
                            textAlign:'left',
                            marginLeft: 20,
                            color:'black',
                            }}>
                            Personenanzahl:
                            </Text>


                        </View>

                        <View style={{
                            height: 60,
                            width: '100%',
                            backgroundColor: '#fff'
                        }}>

                            <TextInput 
                            style={{
                                height: '80%',
                                width: '30%',
                                borderColor: '#B5915F',
                                borderRadius: 15,
                                borderWidth: 2,
                                textAlign: 'center',
                                fontSize: 20,
                                marginLeft: '35%'
                            }}
                            placeholder="Zahl"
                            keyboardType="numeric">

                            </TextInput>

                        </View>

                        <View style={{
                        height: 40,
                        width: '100%',
                        backgroundColor: '#fff'
                        }}>

                            <Text style={{
                            fontFamily:'Baloo2-Regular',
                            fontSize:25,
                            textAlign:'left',
                            marginLeft: 20,
                            color:'black',
                            }}>
                            Kategorie:
                            </Text>

                        </View>

                        <View style={{
                            width: '100%',
                            backgroundColor: '#fff',
                            flex:2
                        }}>

                            <ScrollView vertical={false} horizontal={true} >

                                <View style={{
                                    height: 130,
                                    width: 125,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('keinRezept')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#B0DE35',
                                    borderRadius: 15,
                                    marginLeft: 30,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Karotte.png')}
                                        style={{
                                        height: 70,
                                        width: 70,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'left',
                                    marginLeft: 50,
                                    color:'black',
                                    }}>
                                    Vegan
                                    </Text>

                                </View>

                                <View style={{
                                    height: 130,
                                    width: 110,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#ECB488',
                                    borderRadius: 15,
                                    marginLeft: 15,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Brot.png')}
                                        style={{
                                        height: 60,
                                        width: 80,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'center',
                                    color:'black',
                                    }}>
                                    Vegetarisch
                                    </Text>
                                    
                                </View>

                                <View style={{
                                    height: 130,
                                    width: 110,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#D0FF4D',
                                    borderRadius: 15,
                                    marginLeft: 15,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Fisch.png')}
                                        style={{
                                        height: 65,
                                        width: 100,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'center',
                                    color:'black',
                                    }}>
                                    Fisch
                                    </Text>
                                    
                                    
                                </View>

                                <View style={{
                                    height: 130,
                                    width: 125,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#B5915F',
                                    borderRadius: 15,
                                    marginLeft: 15,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Hamburger.png')}
                                        style={{
                                        height: 90,
                                        width: 75,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'left',
                                    marginLeft: 35,
                                    color:'black',
                                    }}>
                                    Fleisch
                                    </Text>
                                    
                                </View>

                                

                                


                            </ScrollView>

                        </View>

                        <View style={{
                        height: 40,
                        width: '100%',
                        backgroundColor: '#fff'
                        }}>

                            <Text style={{
                            fontFamily:'Baloo2-Regular',
                            fontSize:25,
                            textAlign:'left',
                            marginLeft: 20,
                            color:'black',
                            }}>
                            Unverträglichkeiten:
                            </Text>

                        </View>

                        <View style={{
                            height: 130,
                            width: '100%',
                            backgroundColor: '#fff'
                        }}>

                            <ScrollView vertical={false} horizontal={true}>

                                <View style={{
                                    height: 130,
                                    width: 125,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#B5915F',
                                    borderRadius: 15,
                                    marginLeft: 30,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Weizen.png')}
                                        style={{
                                        height: 80,
                                        width: 70,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'left',
                                    marginLeft: 50,
                                    color:'black',
                                    }}>
                                    Gluten
                                    </Text>

                                </View>

                                <View style={{
                                    height: 130,
                                    width: 110,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#D0FF4D',
                                    borderRadius: 15,
                                    marginLeft: 15,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Milch.png')}
                                        style={{
                                        height: 80,
                                        width: 70,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'center',
                                    color:'black',
                                    }}>
                                    Laktose
                                    </Text>
                                    
                                </View>

                                <View style={{
                                    height: 130,
                                    width: 110,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#B0DE35',
                                    borderRadius: 15,
                                    marginLeft: 15,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Erdnuss.png')}
                                        style={{
                                        height: 70,
                                        width: 80,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'center',
                                    color:'black',
                                    }}>
                                    Erdnuss
                                    </Text>
                                    
                                    
                                </View>

                                <View style={{
                                    height: 130,
                                    width: 125,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#D0FF4D',
                                    borderRadius: 15,
                                    marginLeft: 15,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Soja.png')}
                                        style={{
                                        height: 100,
                                        width: 90,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'left',
                                    marginLeft: 35,
                                    color:'black',
                                    }}>
                                    Soja
                                    </Text>
                                    
                                </View>

                                

                                


                            </ScrollView>

                            </View>

                            <View style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: '#fff'
                            }}>

                            <Text style={{
                            fontFamily:'Baloo2-Regular',
                            fontSize:25,
                            textAlign:'left',
                            marginLeft: 20,
                            color:'black',
                            }}>
                            Gang:
                            </Text>

                        </View>

                            <View style={{
                            height: 130,
                            width: '100%',
                            backgroundColor: '#fff'
                        }}>

                            <ScrollView vertical={false} horizontal={true}>

                                <View style={{
                                    height: 130,
                                    width: 125,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#D0FF4D',
                                    borderRadius: 15,
                                    marginLeft: 30,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Vorspeise.png')}
                                        style={{
                                        height: 80,
                                        width: 80,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'left',
                                    marginLeft: 40,
                                    color:'black',
                                    }}>
                                    Vorspeise
                                    </Text>

                                </View>

                                <View style={{
                                    height: 130,
                                    width: 110,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#B5915F',
                                    borderRadius: 15,
                                    marginLeft: 15,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Hauptspeise.png')}
                                        style={{
                                        height: 50,
                                        width: 90,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'center',
                                    color:'black',
                                    }}>
                                    Hauptspeise
                                    </Text>
                                    
                                </View>

                                <View style={{
                                    height: 130,
                                    width: 110,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#E4BC88',
                                    borderRadius: 15,
                                    marginLeft: 15,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Cupcake.png')}
                                        style={{
                                        height: 80,
                                        width: 70,
                                        marginLeft: 10,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'center',
                                    color:'black',
                                    }}>
                                    Nachspeise
                                    </Text>
                                    
                                    
                                </View>


                            </ScrollView>

                            </View>

                            <View style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: '#fff'
                            }}>

                            <Text style={{
                            fontFamily:'Baloo2-Regular',
                            fontSize:25,
                            textAlign:'left',
                            marginLeft: 20,
                            color:'black',
                            }}>
                            Art:
                            </Text>

                        </View>

                            <View style={{
                            height: 130,
                            width: '100%',
                            backgroundColor: '#fff'
                        }}>

                            <ScrollView vertical={false} horizontal={true}>

                                <View style={{
                                    height: 130,
                                    width: 125,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#fff',
                                    borderRadius: 15,
                                    marginLeft: 30,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Deutsch_Flagge.png')}
                                        style={{
                                        height: 80,
                                        width: 80,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'left',
                                    marginLeft: 45,
                                    color:'black',
                                    }}>
                                    Deutsch
                                    </Text>

                                </View>

                                <View style={{
                                    height: 130,
                                    width: 110,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#fff',
                                    borderRadius: 15,
                                    marginLeft: 15,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Italien_Flagge.png')}
                                        style={{
                                        height: 80,
                                        width: 80,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'center',
                                    color:'black',
                                    }}>
                                    Italienisch
                                    </Text>
                                    
                                </View>

                                <View style={{
                                    height: 130,
                                    width: 110,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#fff',
                                    borderRadius: 15,
                                    marginLeft: 15,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/China_Flagge.png')}
                                        style={{
                                        height: 80,
                                        width: 80,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'center',
                                    color:'black',
                                    }}>
                                    Chinesisch
                                    </Text>
                                    
                                    
                                </View>

                                <View style={{
                                    height: 130,
                                    width: 110,
                                    backgroundColor: '#fff',
                                }}>

                                    <TouchableOpacity 
                                    onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')} 
                                    style={{
                                    height: 80,
                                    width: 80,
                                    backgroundColor: '#fff',
                                    borderRadius: 15,
                                    marginLeft: 15,
                                    marginTop: 10,
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}>

                                        <Image
                                        source={require('../Resources/Images/Japan_Flagge_2.png')}
                                        style={{
                                        height: 80,
                                        width: 80,
                                        resizeMode: 'stretch'
                                        }}
                                        />

                                    </TouchableOpacity>

                                    <Text style={{
                                    fontFamily:'Boogaloo-Regular',
                                    fontSize:15,
                                    textAlign:'center',
                                    color:'black',
                                    }}>
                                    Japanisch
                                    </Text>
                                    
                                    
                                </View>


                            </ScrollView>

                            </View>

                            <View style={{
                    flexDirection: 'row',
                    height: 100,
                    width: '100%',
                    backgroundColor: '#fff'
                }}>

                    <View style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        
                        
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('KocherlebnisplanenTitel')} 
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

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Einkaufsliste')} 
                        style={{
                            width: '80%',
                            height: '50%',
                            backgroundColor: 'rgba(181, 145, 95, 0.3)',
                            borderRadius: 15
                        }}>
                            
                            <Text style={{
                            fontFamily:'Baloo2-Regular',
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

                            


                    </ScrollView>


                </View>

        );

    };

}

export default Kocherlebnisplanen;