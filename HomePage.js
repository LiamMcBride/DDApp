import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Heading_1 } from './Components/TextComponents';
import { InputBox } from './Components/InputBoxComponent';
import { NavBar } from './Components/NavBarComponent';


export function HomePage(page, setPage, username, setUsername, email, setEmail, pWord, setPWord) {    
    return (
        <View style={{height: '100%', width: '100%', position: 'relative'}}>
            {NavBar(false, () => {})}
            <Button title="Create Group"></Button>
            <Button title="View Group"></Button>
            <Button title="Join Group"></Button>
        </View>
    );

}

const styles = StyleSheet.create({
  heading_1: {
    color: '#EF6F6C',
    fontSize: 32,
    margin: 20,
  },
});

const buttonStyle = () => {
  backgroundColor: 'Red';
  width: 100;
}
