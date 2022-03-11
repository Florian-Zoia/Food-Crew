import React, { Component } from 'react';
import {Image, TouchableOpacity, View, Text, ActivityIndicator, FlatList} from 'react-native';


class Startpage extends Component {
    static navigationOptions = {
    };

    constructor(props) {
        super(props);
    this.state = {
        data: [],
        isLoading: true
    };
}


componentDidMount() {
    this.getMoviesFromApi();
}

     getMoviesFromApi = () => {
        return fetch('https://reactnative.dev/movies.json')
            .then((response) => response.json())
            .then((json) => {
                return json.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    };

    render() {
        const { data, isLoading } = this.state;
        return (

            <View style={{backgroundColor:'#017301',
                flex:1,
                alignItems:'center',
                alignContent:'center'}}>

                <Text style={{
                    fontFamily:'',
                    fontSize:60,
                    textAlign:'center',
                    marginTop:150,
                    color:'white'

                }}
                >FOODCREW</Text>

                <TouchableOpacity
                    onPress={() =>
                        this.props.navigation.navigate('Login2',
                        )
                    }
                    style={{
                        alignItems:'center',
                    }}
                >

                </TouchableOpacity
                >
                <Text style={{
                    fontFamily:'',
                    fontSize:24,
                    textAlign:'center',
                    color:'white'

                }}
                >tastes like fun</Text>
            </View>

        );
    }
}
export default Startpage;
