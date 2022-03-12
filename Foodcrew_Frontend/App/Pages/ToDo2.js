import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

class ToDo2 extends Component{
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

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')}
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
                        fontFamily:'AmaticSC-Bold',
                        fontSize:35,
                        textAlign:'center',
                        color:'black',
                    }}>
                        TO DO
                    </Text>

                </View>

                <View style={{
                    height: 2,
                    width: '80%',
                    marginLeft: '10%',
                    backgroundColor: '#E4BC88'
                }}>

                </View>

                <ScrollView horizontal={false} vertical={true}>

                    <Text style={{
                        fontFamily:'Baloo2-Regular',
                        fontSize:25,
                        textAlign:'left',
                        color:'black',
                        marginHorizontal: 40,
                        marginTop: 20
                    }}>
                       Schritt 2: Blätter abzupfen und grob durchhacken </Text>




                </ScrollView>

                <View style={{
                    height: 100,
                    width: '100%',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDo3')}
                                      style={{
                                          width: '50%',
                                          height: '50%',
                                          backgroundColor: 'rgba(181, 145, 95, 0.3)',
                                          borderRadius: 15
                                      }}>

                        <Text style={{
                            fontFamily:'Baloo2-Regular',
                            fontSize:25,
                            textAlign:'center',
                            marginTop: '3%',
                            color:'black'
                        }}>
                            Weiter
                        </Text>

                    </TouchableOpacity>

                </View>


            </View>

        );
    };
}
export default ToDo2;