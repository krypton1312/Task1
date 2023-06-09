import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default function ListItem({el}) {
    return (
      <TouchableOpacity>
        <Text style={styles.text}>
        {el.title}{'\n'}{el.discription}{'\n'}
        </Text>
        <Image style={styles.Simage} source={{
          height: 150,
          width: 150,
          uri: el.image
        }}/>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  text:{
    padding:20,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#fafafa',
    borderWidth: 1,
    marginTop:20,
    width:'60%',
    height: 150,
    marginLeft:'20%'
  },
  Simage:
  {
    marginTop:5,
    marginLeft:'30%',
  }
});