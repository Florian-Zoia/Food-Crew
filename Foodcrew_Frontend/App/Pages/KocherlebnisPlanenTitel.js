import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';

class KocherlebnisPlanenTitel extends Component{
    static navigationOptions = {
    };

    render() {
        return (

            <View style={{
                flex: 1,
                backgroundColor: '#fff'
            }}>

                <View style={{
                    height: 140,
                    width: '100%',
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
                        fontFamily:'AmaticSC-Bold',
                        fontSize:30,
                        textAlign:'center',
                        marginTop: '10%',
                        color:'#B5915F',
                        }}>
                        NEUES KOCHERLEBNIS
                        </Text>
                    </View>
                </View>

            <ScrollView vertical={true} horizontal={false} style={{backgroundColor: '#fff'}}>

                        <View style={{
                            height: 130,
                            width: '100%',
                            backgroundColor: '#fff',
                            AlignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <View style={{
                                height: '90%',
                                width: '80%',
                                borderColor: '#E4BC88',
                                borderWidth: 2,
                                borderRadius: 15,
                                marginLeft: '10%'

                            }}>
                            <Text style={{
                                fontFamily:'Baloo2-Regular',
                                fontSize:25,
                                textAlign:'left',
                                marginLeft: 10,
                                color:'black',
                                }}>
                                Titel:
                            </Text>
                            <TextInput
                            style={{
                            height: '50%',
                            width: '90%',
                            borderColor: 'black',
                            borderRadius: 15,
                            borderWidth: 1,
                            textAlign: 'center',
                            fontSize: 20,
                            marginLeft: '5%',
                            marginTop: 10
                            }}
                            placeholder="Titel eingeben">
                            </TextInput>
                            </View>
                        </View>


                        <View style={{
                            height: 50,
                            width: '100%',
                            backgroundColor: '#fff'

                        }}>
                            <Text style={{
                                fontFamily:'Baloo2-Regular',
                                fontSize:25,
                                textAlign:'left',
                                marginLeft: 40,
                                color:'black',
                                }}>
                                Personenanzahl: 3
                            </Text>
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
                                marginLeft: 40,
                                color:'black',
                                }}>
                                Auswahl:
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
                                fontFamily:'Baloo2-Regular',
                                fontSize:20,
                                textAlign:'left',
                                marginLeft: 40,
                                color:'black',
                                }}>
                                Kategorie:
                            </Text>
                        </View>



                        <View style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: '#fff'
                        }}>
                            <Text style={{
                                fontFamily:'Boogaloo-Regular',
                                fontSize:15,
                                textAlign:'left',
                                marginLeft: 40,
                                color:'black',
                                }}>
                                vegan
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
                                fontFamily:'Baloo2-Regular',
                                fontSize:20,
                                textAlign:'left',
                                marginLeft: 40,
                                color:'black',
                                }}>
                                Unverträglichkeiten:
                            </Text>
                        </View>



                        <View style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: '#fff'
                        }}>
                            <Text style={{
                                fontFamily:'Boogaloo-Regular',
                                fontSize:15,
                                textAlign:'left',
                                marginLeft: 40,
                                color:'black',
                                }}>
                                Laktose, Soja
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
                                fontFamily:'Baloo2-Regular',
                                fontSize:20,
                                textAlign:'left',
                                marginLeft: 40,
                                color:'black',
                                }}>
                                Gang:
                            </Text>
                        </View>


                        <View style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: '#fff'
                        }}>
                            <Text style={{
                                fontFamily:'Boogaloo-Regular',
                                fontSize:15,
                                textAlign:'left',
                                marginLeft: 40,
                                color:'black',
                                }}>
                                Hauptspeise
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
                                fontFamily:'Baloo2-Regular',
                                fontSize:20,
                                textAlign:'left',
                                marginLeft: 40,
                                color:'black',
                                }}>
                                Art:
                            </Text>
                        </View>

                        <View style={{
                            height: 40,
                            width: '100%',
                            backgroundColor: '#fff'
                        }}>
                            <Text style={{
                                fontFamily:'Boogaloo-Regular',
                                fontSize:15,
                                textAlign:'left',
                                marginLeft: 40,
                                color:'black',
                                }}>
                                Chinesisch
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
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Einkaufsliste')}
                        style={{
                            width: '80%',
                            height: '50%',
                            backgroundColor: 'rgba(181, 145, 95, 0.5)',
                            borderRadius: 15
                        }}>

                            <Text style={{
                            fontFamily:'Baloo2-Regular',
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
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisplanen')}
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
                                Ändern
                            </Text>
                    </TouchableOpacity>
                    </View>


                    </View>


            </ScrollView>


            </View>

        );

    };

}
export default KocherlebnisPlanenTitel;