import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import {WelcomePage} from './WelcomePage';

export default function App() {
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
      {WelcomePage()}
      {console.log(Dimensions.get('window').width)}
    </View>

  );
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
