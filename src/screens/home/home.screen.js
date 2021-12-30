import React from 'react';
import {Text, View, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'red', fontSize: 50}}>Home!</Text>
      <Button title="go to" onPress={() => navigation.navigate('Play')} />
    </View>
  );
}

export default HomeScreen;
