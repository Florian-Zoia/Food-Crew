import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import {} from "native-base";

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
                    KOCHERLEBNISSE
                </Text>

                <Text style={{
                    fontFamily:'Baloo2-Regular',
                    fontSize:30,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    }}>
                    Anstehend:
                </Text>
            </View>



<ScrollView>
            <View style={{
                width: '100%',
                backgroundColor: '#fff',
                marginTop: 10
                }}>

                <Text style={{
                    fontFamily:'Baloo2-Regular',
                    fontSize:27.5,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    }}>
                    Erlebnis 1
                </Text>

                <Text style={{
                    fontFamily:'Baloo2-Regular',
                    fontSize:18,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    }}>
                    Vegan, ohne Nüsse
                </Text>
                <View style={{
                    alignItems:'center',
                    marginBottom:1,

                }}>
                <View
                style={{
                    flexDirection:"row",
                    justifyContent:"space-around"
                }}>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisplanen')} 
                    style={{
                    width: '30%',
                    height: '100%',
                    backgroundColor: 'rgba(181, 145, 95, 0.3)',
                    borderRadius: 15,

                    }}>
                            
                    <Text style={{
                        fontFamily:'Baloo2-Regular',
                        fontSize:18,
                        textAlign:'center',
                        marginTop: '5%',
                        color:'black'
                        }}>
                        einkaufen
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisplanen')} 
                    style={{
                    width: '30%',
                    height: '100%',
                    backgroundColor: 'rgba(181, 145, 95, 0.3)',
                    borderRadius: 15
                    }}>
                            
                    <Text style={{
                        fontFamily:'Baloo2-Regular',
                        fontSize:18,
                        textAlign:'center',
                        marginTop: '5%',
                        color:'black'
                        }}>
                        starten
                        </Text>

                </TouchableOpacity>
                </View>
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
                width: '100%',
                backgroundColor: '#fff',
                marginTop: 10
                }}>

                <Text style={{
                    fontFamily:'Baloo2-Regular',
                    fontSize:27.5,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    }}>
                    Erlebnis 2
                </Text>

                <Text style={{
                    fontFamily:'Baloo2-Regular',
                    fontSize:18,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    }}>
                    Vegan, ohne Nüsse
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

            </View>

            <View style={{
                width: '100%',
                backgroundColor: '#fff',
                marginTop: 10
                }}>

                <Text style={{
                    fontFamily:'Baloo2-Regular',
                    fontSize:27.5,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    }}>
                    Erlebnis 3
                </Text>

                <Text style={{
                    fontFamily:'Baloo2-Regular',
                    fontSize:18,
                    textAlign:'left',
                    marginLeft: 36,
                    color:'black',
                    }}>
                    Vegan, ohne Nüsse
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
            </View>
            </ScrollView>
            </View>
            </View>
        );
    };
}


export default Kocherlebnisse;