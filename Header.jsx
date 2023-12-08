import React, { useState ,useRef,useEffect} from 'react'
import { View,DrawerLayoutAndroid,StyleSheet,ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import DrawerContent from './Drawer/Drawer';
import YouTube  from 'react-native-youtube-iframe';
import Video from './Data';
import { Divider, Text } from 'react-native-paper';
import Tabs from './Cards/Tabs';
import Orientation from 'react-native-orientation-locker';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import History from './Pages/History';

const Header = () => {
    
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [play,setPlay] = useState('bsUo6WpNXes');

    useEffect(() => {
      const onOrientationChange = (orientation) => {
        if (orientation === 'LANDSCAPE') {
          setIsFullScreen(true);
        } else {
          setIsFullScreen(false);
        }
      };
  
      Orientation.addOrientationListener(onOrientationChange);
  
      return () => {
        Orientation.removeOrientationListener(onOrientationChange);
      };
    }, []);
  
    const onFullScreenChange = (fullScreenStatus) => {
      if (fullScreenStatus) {
        Orientation.lockToLandscape();
      } else {
        Orientation.lockToPortrait();
      }
    };

    const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const navigationView = () => (
    <View>
        <Appbar.Header style={{backgroundColor:"#2596be"}}>
            <Appbar.Content title="All Subjects" />
            <Divider/>
        </Appbar.Header>
      <DrawerContent/>
    </View>
  );

    return (
        <View style={{ flex: 1 }}>
      
      <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>
        <Appbar.Header style={{backgroundColor:"#2596be"}}>
        <Appbar.Action icon="menu" onPress={() => drawer.current?.openDrawer()} />
        <Appbar.Content title="My App" onPress={() => drawer.current?.openDrawer()}/>
      </Appbar.Header>
      
      <View style={styles.container}>
         <History/>
      </View>
        
    </DrawerLayoutAndroid>
      
    </View>
    )
}

const styles = StyleSheet.create({
    
    navigationContainer: {
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: 'center',
    },
  });
  



export default Header;