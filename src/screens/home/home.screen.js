import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import ListTrack from './components/listTrack';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.heart}>
        <Image source={require('../../assets/image/heartIcon-selected.png')} />
      </TouchableOpacity>
      <ScrollView>
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
        <ListTrack navigation={navigation} />
      </ScrollView>
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
