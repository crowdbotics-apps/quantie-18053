import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera65908Navigator from '../features/Camera65908/navigator';
import CalendarView65907Navigator from '../features/CalendarView65907/navigator';
import Maps65906Navigator from '../features/Maps65906/navigator';
import Tutorial65905Navigator from '../features/Tutorial65905/navigator';
import Messaging65904Navigator from '../features/Messaging65904/navigator';
import ArticleList65890Navigator from '../features/ArticleList65890/navigator';
import Maps65877Navigator from '../features/Maps65877/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Camera65908: { screen: Camera65908Navigator },
CalendarView65907: { screen: CalendarView65907Navigator },
Maps65906: { screen: Maps65906Navigator },
Tutorial65905: { screen: Tutorial65905Navigator },
Messaging65904: { screen: Messaging65904Navigator },
ArticleList65890: { screen: ArticleList65890Navigator },
Maps65877: { screen: Maps65877Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
