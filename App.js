import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import {WelcomePage} from './WelcomePage';
import { useState } from 'react';
import { HomePage } from './HomePage';

export default function App() {
  const [page, setPage] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pWord, setPWord] = useState("");

  if(page <= 3 && page >= 1){
    return (
      <View style={styles.container}>
        {/* <Text>lol</Text>
        <Text>Hello</Text>
        <Button title={"yo"} style={
          {
            backgroundColor: 'red',
            color: 'Green'
          }
        }/> */}
        {WelcomePage(page, setPage, username, setUsername, email, setEmail, pWord, setPWord)}
      </View>
  
    );
  }
  else {
    return (
      <View style={styles.container}>
        {HomePage(page, setPage, username, setUsername, email, setEmail, pWord, setPWord)}
      </View>
  
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    flex: 1,
    backgroundColor: '#2C2D30',
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
  },
});

const buttonStyle = () => {
  backgroundColor: 'Red';
  width: 100;
}
