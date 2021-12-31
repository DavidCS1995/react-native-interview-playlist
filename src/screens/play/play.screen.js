import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native';

function PlayScreen({route}) {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.back1}>
          <View style={styles.back2}>
            <Image
              style={styles.img}
              source={require('../../assets/image/poster.jpeg')}
            />
          </View>
        </View>
        <Text style={styles.textBold}>{item.name}</Text>
        <Text style={styles.textLight}>{item.artist.name}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: '5%',
        }}>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30}}
            source={require('../../assets/image/arrowLeft.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height: 50, width: 50, marginHorizontal: 25}}
            source={require('../../assets/image/playy.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={{height: 30, width: 30}}
            source={require('../../assets/image/arrowRight.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#231E4B',
  },

  back1: {
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
    width: 280,
    height: 280,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#8562F5',
    marginTop: 50,
  },
  back2: {
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
    width: 270,
    height: 270,
    backgroundColor: '#282357',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  img: {
    borderTopRightRadius: 200,
    borderTopLeftRadius: 200,
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
    width: 245,
    height: 240,
    backgroundColor: 'black',
    alignSelf: 'center',
  },
  textBold: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 22,
  },
  textLight: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    marginTop: 10,
  },
});
