import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>lol</Text>
      <Text>Hello</Text>
      <Button title={"yo"} style={
        {
          backgroundColor: 'red',
          color: 'Green'
        }
      }/>
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

const buttonStyle = () => {
  backgroundColor: 'Red';
  width: 100;
}
