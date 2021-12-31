import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import musicService from '../../api/music.service';
import ListTrack from './components/listTrack';

function HomeScreen({navigation}) {
  const [music, setMusic] = useState([]);

  useEffect(() => {
    const getMusic = async () => {
      const music = await musicService.list();
      setMusic(music);
    };

    getMusic();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={music}
        renderItem={({item}) => (
          <ListTrack item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.mbid}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231E4B',
  },
  heart: {
    marginTop: 10,
    margin: 10,
    alignSelf: 'flex-end',
  },
});
