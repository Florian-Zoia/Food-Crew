import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

class keinRezept extends Component{
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
                    flex: 3,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                            <Image
                            source={require('../Resources/Images/Fehler.png')}
                            style={{
                            height: 130,
                            width: 130,
                            resizeMode: 'stretch',
                            }}
                            />


                </View>

                <View style={{
                    flex: 2,
                    backgroundColor: '#fff'
                }}>

                            <Text style={{
                            fontFamily:'sans-serif-condensed',
                            fontSize:25,
                            textAlign:'center',
                            color:'black',
                            marginHorizontal: 40
                            }}>
                            Zu Ihrer Auswahl gibt es leider keine Rezepte. Bitte ändern Sie die Angaben.
                            </Text>
                    
                </View>

                <View style={{
                    flex: 2,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisplanen')} 
                        style={{
                            width: '50%',
                            height: '30%',
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
                                Zurück
                            </Text>
                    
                    </TouchableOpacity>
                    
                </View>
            </View>

        );

    };

}

export default keinRezept;