import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, ScrollView} from 'react-native';
import CheckboxList from 'rn-checkbox-list';



class Einkaufsliste extends Component{
    static navigationOptions = {
    };


    render() {
        let data =[{ id: 1, name: 'Basilikum: 90 g' }, { id: 2, name: 'Petersilie: 30 g' }, { id: 3, name: 'Pinienkerne: 4 El' }, { id: 4, name: 'Koblauchzehen: 4 St' }
            , { id: 5, name: 'Parmesan gerieben: 200 g' }, { id: 6, name: 'Olivenöl: 30 ml' }, { id: 7, name: 'Salz: 1 El' }, { id: 8, name: 'Pfeffer: 1 El' }];

        return (

            <View style={{
                flex: 1,
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
                <View style={{
                    height: 70,
                    width: '100%',
                    backgroundColor: '#fff'
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Kocherlebnisstarten')}>
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
                        fontFamily: 'AmaticSC-Bold',
                        fontSize: 40,
                        textAlign: 'center',
                        color: 'black',
                    }}>
                        EINKAUFSLISTE
                    </Text>
                </View>

                <CheckboxList
                    theme="green"
                    listItems={data}
                    listItemStyle={{ borderBottomColor: '#E4BC88', borderBottomWidth: 1 }}
                    checkboxProp={{ boxType: 'square' }} // iOS (supported from v0.3.0)
                    onLoading={() => <LoaderComponent />}
                />



                <View style={{
                    height: 100,
                    width: '100%',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Einstellungen')}
                                      style={{
                                          width: '50%',
                                          height: '50%',
                                          backgroundColor: 'rgba(181, 145, 95, 0.3)',
                                          borderRadius: 15
                                      }}>

                        <Text style={{
                            fontFamily: 'Baloo2-Regular',
                            fontSize: 25,
                            textAlign: 'center',
                            marginTop: '3%',
                            color: 'black'
                        }}>
                            Fertig
                        </Text>
                    </TouchableOpacity>


                </View>


            </View>

        );

    };

}
export default Einkaufsliste;