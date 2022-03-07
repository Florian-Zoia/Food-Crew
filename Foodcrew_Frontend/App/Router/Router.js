import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from "../Pages/Login";
import Login2 from "../Pages/Login2";
import Kocherlebnisstarten from "../Pages/Kocherlebnis starten";
import Freundeeinladen from "../Pages/Freunde einladen";
import Kocherlebnisplanen from "../Pages/Kocherlebnis planen";
import KocherlebnisplanenTitel from "../Pages/Kocherlebnis planen Titel";
import ToDo from "../Pages/ToDo";
import Einkaufsliste from "../Pages/Einkaufsliste";
import Einstellungen from "../Pages/Einstellungen";
import Passwort from "../Pages/Passwort ändern";
import keinRezept from "../Pages/KeinRezept";


const MainNavigator = createStackNavigator(
    {
        Login,
        Login2,
        Kocherlebnisstarten,
        Freundeeinladen,
        Kocherlebnisplanen,
        KocherlebnisplanenTitel,
        ToDo,
        Einkaufsliste,
        Einstellungen,
        Passwort,
        keinRezept
    },
    {
        initialRouteName: '',
        headerLayoutPreset: '',
        headerMode: '',
    }
);

const App = createAppContainer(MainNavigator);

export default App;
