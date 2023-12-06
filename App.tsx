import React,{useState,useEffect} from 'react';
import { SafeAreaView, StyleSheet, View,ScrollView ,Button,Dimensions} from 'react-native';
import YouTube  from 'react-native-youtube-iframe';
import Video from './Data';
import { Divider, Text } from 'react-native-paper';
import CardComponent from './Cards/Card';
import Tabs from './Cards/Tabs';
import Header from './Cards/Header';
import Orientation from 'react-native-orientation-locker';
import { Chip } from 'react-native-paper';



const App = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [play,setPlay] = useState('bsUo6WpNXes')

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



  

  return (
    <View style={styles.container}>
      <YouTube
        videoId={play}
        play={true}
        height={220}
        controls={1}
        onChangeState={(event) => console.log(event)}
        onChangeQuality={(event) => console.log(event)}
        onError={(e) => console.log(e)}
        onReady={() => console.log('ready')}
        onFullscreenChange={onFullScreenChange}
        webViewStyle={{ flex: 1 }}
        style={isFullScreen ? styles.fullScreen : styles.normalScreen}
      />
      
      <View style={{ alignItems: 'center',backgroundColor:"#2596be",padding:10}}>
      <Text>KHAN_SIR_HISTORY</Text>
        
      
    </View>
      
      <ScrollView>
      <View>
        {Video.map((e)=>{
          return(
            <View >
              <Text key={e.id} onPress={()=>{setPlay(e.url)}}><Tabs title={e.name} id={e.id}/>
              </Text>
              <Divider/>
              </View>
          )
        })}
      </View>
      </ScrollView>
    </View>
    
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
