import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>V-Oche</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('OnePlayer')}
      />
    </View>
  );
};

export default HomeScreen;
