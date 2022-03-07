import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Startpage from "../Pages/Startpage";
import Login2 from "../Pages/Login2";
import Gast from "../Pages/Gast";
import Signin from "../Pages/Signin";


const MainNavigator = createStackNavigator(
    {
        Startpage,
        Login2,
        Gast,
        Signin
    },
    {
        initialRouteName: '',
        headerLayoutPreset: '',
        headerMode: '',
    }
);

const App = createAppContainer(MainNavigator);

export default App;
