import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import DisplayComponent from './component/DisplayComponent';

const url = "https://zomatoajulypi.herokuapp.com/restaurant"

export default function App() {

  const [title,setTitle] = useState('Developer Button Clicked')
  const [rest,setRest] = useState()

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setRest(data)
    })
  })

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{title}</Text>
      <Button title="Revert Me" onPress={() => {setTitle('Button Clicked')}}/>
      <Button
          title="Right button"
          onPress={() => Alert.alert('Right button pressed')}
      />
      <DisplayComponent restList={rest}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
