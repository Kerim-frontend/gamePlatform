import * as React from 'react';
import { View, StyleSheet,  } from 'react-native';
import Routes from './navigation/Routes';
export default function App() {
  return (
    <View style={styles.container}>
       <Routes />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121B24',
    flex: 1
  }
})