import React, {Component, useState,} from 'react';
import {Image, TouchableOpacity, View, Text, TextInput,} from 'react-native';
import {} from "native-base";
import Picker from "@react-native-picker/picker";

const [selectedValue, setSelectedValue] = useState("Wähle eine Unverträglichkeit");

class Signin extends Component {
    static navigationOptions = {};

    render() {

        return (

            <View style={{
                backgroundColor: '#B0DE35',
                flex: 1,
                alignItems: 'center',
                alignContent: 'center',
                shadowOpacity: 100,
            }}>
                <Text style={{
                    fontFamily: 'AmaticSC-Bold',
                    fontSize: 60,
                    textAlign: 'center',
                    color: 'black'

                }}
                >Sign In</Text>
                <View style={{
                    backgroundColor: 'white',
                    borderColor: '#017301',
                    width: 350,
                    borderRadius: 20,
                    borderWidth: 2,
                }}>
                    <Text style={{
                        marginLeft: 10,
                        fontFamily: 'Baloo2-Regular',
                        fontSize: 20
                    }}>Username:</Text>
                    <TextInput style={{
                        width: 300,
                        borderRadius: 5,
                        borderColor: 'black',
                        borderWidth: 1,
                        alignSelf: "center",
                        height: 30,
                    }}>


                    </TextInput>
                    <Text style={{
                        marginLeft: 10,
                        fontFamily: 'Baloo2-Regular',
                        fontSize: 20
                    }}>E-Mail:</Text>
                    <TextInput style={{
                        width: 300,
                        borderRadius: 5,
                        borderColor: 'black',
                        borderWidth: 1,
                        alignSelf: "center",
                        height: 30,
                    }}>
                    </TextInput>
                    <Text style={{
                        marginLeft: 10,
                        fontFamily: 'Baloo2-Regular',
                        fontSize: 20
                    }}>Passwort:</Text>
                    <TextInput style={{
                        width: 300,
                        borderRadius: 5,
                        borderColor: 'black',
                        borderWidth: 1,
                        alignSelf: "center",
                        height: 30,
                    }}>
                    </TextInput>
                    <Text style={{
                        marginLeft: 10,
                        fontFamily: 'Baloo2-Regular',
                        fontSize: 20
                    }}>Passwort wiederholen:</Text>
                    <TextInput style={{
                        width: 300,
                        borderRadius: 5,
                        borderColor: 'black',
                        borderWidth: 1,
                        alignSelf: "center",
                        height: 30,
                    }}>
                    </TextInput>
                    <Text style={{
                        marginLeft: 10,
                        fontFamily: 'Baloo2-Regular',
                        fontSize: 20
                    }}>Allergien:</Text>
                    <TextInput style={{
                        width: 300,
                        borderRadius: 5,
                        borderColor: 'black',
                        borderWidth: 1,
                        alignSelf: "center",
                        height: 30,
                    }}>
                    </TextInput>

                    <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        style={{ flex: 0.35, height: 50, width: 100, color: 'green' }} >

                        <Picker.Item label="Lakotse" value="laktose" />
                        <Picker.Item label="Gluten" value="gluten" />

                    </Picker>

                </View>


                <TouchableOpacity onPress={() =>
                    this.props.navigation.navigate('Startpage',
                    )} style={{
                    backgroundColor: "green",
                    borderRadius: 30,
                    borderColor: "black",
                    width: 350,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginTop: 20
                }}>
                    <Text style={{
                        marginLeft: 10,
                        fontFamily: 'Baloo2-Regular',
                        fontSize: 20
                    }}>Erstellen</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
export default Signin;

