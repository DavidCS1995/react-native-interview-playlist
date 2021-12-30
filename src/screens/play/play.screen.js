import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

function PlayScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text onPress={() => navigation.goBack()}>Settings!</Text>
    </View>
  );
}

export default PlayScreen;
