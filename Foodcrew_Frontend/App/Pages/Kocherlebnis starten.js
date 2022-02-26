import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet} from 'react-native';

class Kocherlebnisstarten extends Component{
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

                    <View 
                    style={{
                    width: '80%',
                    height: '80%',
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
                        fontFamily:'',
                        fontSize:30,
                        textAlign:'center',
                        marginTop: '10%',
                        color:'#B5915F',
                        fontFamily: 'sans-serif-condensed'
                        }}>
                        NEUES KOCHERLEBNIS
                        </Text>

                    </View>

                </View>

                <View style={{
                    flex: 3,
                    backgroundColor: '#fff'
                }}>

                    <Text style={{
                        fontFamily:'',
                        fontSize:25,
                        textAlign:'center',
                        marginTop: 20,
                        color:'black',
                        fontFamily: 'sans-serif-light'
                    }}>
                        Titel des Kocherlebnisses
                    </Text>

                </View>

                <View style={{
                    flex: 3,
                    backgroundColor: '#fff'
                }}>

                    <Text style={{
                        fontFamily:'',
                        fontSize:25,
                        textAlign:'left',
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        color:'black'
                    }}>
                        Auswahl:
                    </Text>

                    <Text style={{
                        fontFamily:'',
                        fontSize:15,
                        textAlign:'left',
                        marginTop: 0,
                        marginLeft: 20,
                        marginRight: 20,
                        color:'black'
                    }}>
                        Vegan, Hauptgang, Gluten, Laktose
                    </Text>

                </View>

                <View style={{
                    flex: 2,
                    backgroundColor: '#fff'
                }}>

                    <Text style={{
                        fontFamily:'',
                        fontSize:25,
                        textAlign:'left',
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        color:'black'
                    }}>
                        Personen: 3
                    </Text>

                </View>

                <View style={{
                    flex: 2,
                    backgroundColor: '#fff'
                }}>

                    <Text style={{
                        fontFamily:'',
                        fontSize:25,
                        textAlign:'left',
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        color:'black'
                    }}>
                        Freunde einladen:
                    </Text>

                </View>

                <View style={{
                    flex: 5,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('Freundeeinladen',
                        )
                    }
                    style={{
                    alignItems:'center',
                }}>
                
                <Image
                    source={require('../Resources/Images/freundeeinladen.png')}
                    style={{
                        height: 95.7,
                        width: 110,
                        resizeMode: 'stretch'
                    }}
                />

                </TouchableOpacity>

                </View>

                <View style={{
                    flexDirection: 'row',
                    flex: 4,
                    backgroundColor: '#0000ff'
                }}>

                    <View style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        
                        
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDo')} 
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
                                Start
                            </Text>
                    
                    </TouchableOpacity>


                    </View>

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
                            fontFamily:'',
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
             
            


            </View>

        );

        };


}


export default Kocherlebnisstarten;