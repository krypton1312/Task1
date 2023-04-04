import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
    return (
    <View style={styles.main}>
        <Text style={styles.text}>List of item from fake server</Text>
    </View>
    );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 40,
    height: 100,
    backgroundColor: 'silver',
  },
  text: {
    fontSize: 28,
    color:'black',
    textAlign:'center',
  },
});