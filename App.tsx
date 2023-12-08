import React,{useState,useEffect} from 'react';
import { SafeAreaView, StyleSheet, View,ScrollView ,Button,Dimensions} from 'react-native';
import YouTube  from 'react-native-youtube-iframe';
import Video from './Data';
import { Divider, Text } from 'react-native-paper';
import Tabs from './Cards/Tabs';
import Orientation from 'react-native-orientation-locker';
import Header from './Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';



const App = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [play,setPlay] = useState('bsUo6WpNXes')

 



  

  return (
    <SafeAreaProvider>
      <Header/>
    </SafeAreaProvider>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  normalScreen: {
    aspectRatio: 16 / 9,
  },
  fullScreen: {
    width: Dimensions.get('window').height,
    height: Dimensions.get('window').width,
  },
});

export default App;
