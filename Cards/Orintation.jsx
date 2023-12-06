import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import YouTube from 'react-native-youtube-iframe';
import Orientation from 'react-native-orientation-locker';

const App = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);
  
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
          videoId="YOUR_VIDEO_ID"
          play={true}
          controls={1}
          onChangeState={(event) => console.log(event)}
          onChangeQuality={(event) => console.log(event)}
          onError={(e) => console.log(e)}
          onReady={() => console.log('ready')}
          onFullscreenChange={onFullScreenChange}
          webViewStyle={{ flex: 1 }}
          style={isFullScreen ? styles.fullScreen : styles.normalScreen}
        />
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
  