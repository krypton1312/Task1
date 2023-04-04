import React, {useState}from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

export default function Form({addHandler}) {
   
    const [title,setTitle] = useState('');
    const [disc,setDisc] = useState('');
    const [image,setImage] = useState('');
    const onChange = (separate) =>{
      if(separate == '')
      {
        fetch('https://jsonplaceholder.typicode.com/posts/'+(Math.floor(Math.random()+11)).toString())
        .then(response => response.json())
        .then(json => {[setTitle(json.title), setDisc(json.body)]})
        fetch('https://jsonplaceholder.typicode.com/photos/'+(Math.floor(Math.random()+5001)).toString())
        .then(response => response.json())
        .then(json => setImage(json.thumbnailUrl))
      }
      else
      {
        var textSep = []
        textSep = separate.split(',')
        setTitle(textSep[0])
        setDisc(textSep[1])
        setImage(textSep[2])
      }
    } 

    return (
    <View>
        <TextInput style={styles.input} onChangeText={onChange} placeholder='Input the task...' />
        <Button title='Add task' color = 'black' onPress={() => addHandler([title, disc, image])} />
    </View>
    );
}

const styles = StyleSheet.create({
  input:{
    borderBottomWidth:1,
    borderColor: '#000',
    padding: 10,
    marginVertical:30,
    marginHorizontal: '20%',
    width:'60%'
  }
});