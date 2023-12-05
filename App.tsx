import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,ScrollView } from 'react-native';
import YouTube from 'react-native-youtube-iframe';
import Video from './Data';
import { Divider } from 'react-native-paper';
import CardComponent from './Cards/Card';




const App: React.FC = () => {

  interface MyUrl {
    youtubeurl: string;
  }
  const [url,setUrl] = React.useState<string>('tAzfDY63Vuo')
  const speciesList = [
    'Panthera leo', 'Loxodonta africana', 'Giraffa camelopardalis', 'Equus zebra','Loxodonta africana', 'Giraffa camelopardalis', 'Equus zebra','Loxodonta africana', 'Giraffa camelopardalis', 'Equus zebra', 'Spheniscidae', 'Canis lupus', 'Ursus arctos', 'Macropus rufus'
    // Add more species as needed
  ];

  const pushUrl=(id)=>{
  setUrl(id)
  }

  return (
    <View style={styles.container}>
      <YouTube
        videoId={url}
        height={200}
        width={'100%'}
      />
      <View>
      <ScrollView>
        {Video.map((e)=>{
          return(
            <View >
              <Text onPress={()=>{pushUrl(e.url)}} key={e.id}><View><CardComponent  title={e.url} id={e.id}/></View>
  </Text>
  <Divider/>
              
              </View>
          )
        })}
      </ScrollView>
      </View>
    </View>
    
   
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
