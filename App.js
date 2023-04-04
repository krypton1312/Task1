import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList} from 'react-native';
import Header from './components/header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {title: 'title1', discription: 'discription1', image: 'https://via.placeholder.com/150/24f355', key: '1'},
    {title: 'title2', discription: 'discription2', image: 'https://via.placeholder.com/150/24f355', key: '2'},
    {title: 'title3', discription: 'discription3', image: 'https://via.placeholder.com/150/24f355', key: '3'},
    {title: 'title4', discription: 'discription4', image: 'https://via.placeholder.com/150/24f355', key: '4'}
  ])

  const addHandler = ([title, disc, image]) =>{
    setListOfItems((list) => {
      return[
        { title: title, discription: disc, image: image, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }


  return (
    <View>
      <Header/>
      <Form addHandler={addHandler}/>
      <View>
      <FlatList data={listOfItems} renderItem={({item}) =>(
      <ListItem el={item} />)
      }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
