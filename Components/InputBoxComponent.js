import { View, StyleSheet, Text, TextInput } from 'react-native';
import { SubText } from './TextComponents';


export const InputBox = (txt, val, onType) => {
    const styles = StyleSheet.create({
        view: {
            width: '100%',
            margin: 0,
            padding: 0,
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            border: "none",
            backgroundColor: "#4D5061", 
          },
    });

    return (
        <View style={styles.view}>
            {SubText(txt)}
            <TextInput onChangeText={text => onType(text)} style={styles.input} value={val}></TextInput>
        </View>
    );
}