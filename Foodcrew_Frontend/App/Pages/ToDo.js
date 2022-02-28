import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

class ToDo extends Component{
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
                    fontFamily:'',
                    fontSize:35,
                    textAlign:'center',
                    color:'black',
                    fontFamily: 'sans-serif-condensed'
                    }}>
                    TO DO
                    </Text>

                </View>

                <View style={{
                    height: 2,
                    width: '80%',
                    marginLeft: '10%',
                    backgroundColor: '#E4BC88'
                }}></View>

                <ScrollView horizontal={false} vertical={true}>

                    <Text style={{
                    fontFamily:'',
                    fontSize:25,
                    textAlign:'left',
                    color:'black',
                    fontFamily: 'sans-serif-light',
                    marginHorizontal: 40,
                    marginTop: 20
                    }}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                    </Text>

                    


                </ScrollView>

                <View style={{
                        height: 100,
                        width: '100%',
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDo')} 
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
                                Weiter
                            </Text>
                    
                    </TouchableOpacity>

                    </View>


            </View>

        );
    };
}
export default ToDo;