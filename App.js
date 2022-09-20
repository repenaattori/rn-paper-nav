import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import {BottomNavigation, Provider as PaperProvider , DefaultTheme} from 'react-native-paper';
import {HomeScreen, MessagesScreen, SettingsScreen} from './Screens';



export default function App() {

  return (
    <PaperProvider theme={DefaultTheme}>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbColor: '#f0a210'
});
