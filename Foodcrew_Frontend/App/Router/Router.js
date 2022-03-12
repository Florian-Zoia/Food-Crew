import {createAppContainer  } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login2 from "../Pages/Login2";
import Kocherlebnisstarten from "../Pages/Kocherlebnis starten";
import Freundeeinladen from "../Pages/Freunde einladen";
import Kocherlebnisplanen from "../Pages/Kocherlebnis planen";
import KocherlebnisPlanenTitel from "../Pages/KocherlebnisPlanenTitel";
import ToDo from "../Pages/ToDo";
import Einkaufsliste from "../Pages/Einkaufsliste";
import Einstellungen from "../Pages/Einstellungen";
import Passwort from "../Pages/Passwort ändern";
import keinRezept from "../Pages/KeinRezept";
import Startpage from "../Pages/Startpage";
import Gast from "../Pages/Gast";
import Signin from "../Pages/Signin";
import GekochteRezepte from "../Pages/GekochteRezepte";
import Kocherlebnisse from "../Pages/Kocherlebnisse";
import NeuesKocherlebnis from "../Pages/NeuesKocherlebnis";
import ToDo2 from "../Pages/ToDo2";
import ToDo3 from "../Pages/ToDo3";
import ToDo4 from "../Pages/ToDo4";
import ToDo5 from "../Pages/ToDo5";
import ToDo6 from "../Pages/ToDo6";
import ToDo7 from "../Pages/ToDo7";
import ToDo8 from "../Pages/ToDo8";
import ToDo9 from "../Pages/ToDo9";


const MainNavigator = createStackNavigator(
    {


        Startpage,
        Login2,
        Gast,
        Signin,
        NeuesKocherlebnis,
        Kocherlebnisplanen,
        KocherlebnisPlanenTitel,
        Kocherlebnisstarten,
        Freundeeinladen,
        Einkaufsliste,
        Kocherlebnisse,
        Einstellungen,
        Passwort,
        keinRezept,
        GekochteRezepte,
        ToDo,
        ToDo2,
        ToDo3,
        ToDo4,
        ToDo5,
        ToDo6,
        ToDo7,
        ToDo8,
        ToDo9,

    },
    {
        initialRouteName: '',
        headerLayoutPreset: '',
        headerMode: '',
    }
);

const App = createAppContainer(MainNavigator);

export default App;
