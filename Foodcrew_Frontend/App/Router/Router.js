import { createAppContainer } from 'react-navigation';
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


const MainNavigator = createStackNavigator(
    {

        NeuesKocherlebnis,

        Einkaufsliste,
        KocherlebnisPlanenTitel,
        Kocherlebnisplanen,
        Kocherlebnisse,
        Startpage,
        Login2,
        Kocherlebnisstarten,
        Freundeeinladen,
        ToDo,
        Einstellungen,
        Passwort,
        keinRezept,
        Gast,
        Signin,
        GekochteRezepte,
    },
    {
        initialRouteName: '',
        headerLayoutPreset: '',
        headerMode: '',
    }
);

const App = createAppContainer(MainNavigator);

export default App;
