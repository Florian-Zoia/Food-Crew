import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from "../Pages/Login";
import Login2 from "../Pages/Login2";


const MainNavigator = createStackNavigator(
    {
        Login,
        Login2
    },
    {
        initialRouteName: '',
        headerLayoutPreset: '',
        headerMode: '',
    }
);

const App = createAppContainer(MainNavigator);

export default App;
