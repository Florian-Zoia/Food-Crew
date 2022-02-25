import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from "../Pages/Login";
import Login2 from "../Pages/Login2";
import Kocherlebnisstarten from "../Pages/Kocherlebnis starten";
import Freundeeinladen from "../Pages/Freunde einladen";
import Kocherlebnisplanen from "../Pages/Kocherlebnis planen";


const MainNavigator = createStackNavigator(
    {
        Login,
        Login2,
        Kocherlebnisstarten,
        Freundeeinladen,
        Kocherlebnisplanen
    },
    {
        initialRouteName: '',
        headerLayoutPreset: '',
        headerMode: '',
    }
);

const App = createAppContainer(MainNavigator);

export default App;
