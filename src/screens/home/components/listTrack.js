import React from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

function ListTrack({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Play')}>
        <Image
          style={styles.img}
          source={require('../../../assets/image/poster.jpeg')}
        />
      </TouchableOpacity>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.textBold}>Dora Nalia</Text>
        <Text style={styles.textLight}>Maluma</Text>
      </View>
      <TouchableOpacity style={styles.play}>
        <Image
          style={{alignSelf: 'center'}}
          source={require('../../../assets/image/play.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

export default ListTrack;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '2%',
    padding: '1%',

    flexDirection: 'row',
  },
  img: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    width: 70,
    height: 70,
  },
  textBold: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  textLight: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  play: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    width: 40,
    height: 40,
    backgroundColor: '#8C59F7',
    alignSelf: 'center',
    marginLeft: 170,
    justifyContent: 'center',
  },
});
