import { Button, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Heading_1 } from './Components/TextComponents';
import { InputBox } from './Components/InputBoxComponent';
import { NavBar } from './Components/NavBarComponent';


export function WelcomePage() {
    const [page, setPage] = useState(1);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pWord, setPWord] = useState("");
    
    const WelcomePage_1 = () => {
        return (
            <View style={{height: '100%', width: '100%', position: 'relative'}}>
                <View style={{width: '100%', height: '30%', marginTop: 40, marginBottom: 40}}>
                    {Heading_1("Welcome")}
                </View>
                <View style={{
                        width: '50%',
                        position: 'absolute',
                        bottom: 30,
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}>
                    <Button onPress={() => setPage(2)} title={"Login"} style={
                    {
                        backgroundColor: 'red',
                        color: 'Green',
                        width: '10%',
                        display: 'block',
                        borderRadius: 10,  
                        marginBottom: 20            
                    }
                    }/>            
                    <Button onPress={() => setPage(3)} title={"Sign Up"} style={
                    {
                        backgroundColor: 'red',
                        color: 'Green',
                        width: '10%',
                        display: 'block',
                        borderRadius: 10,  
                        marginTop: 20            
                    }
                    }/>            
                </View>
            </View>
        );
    }
    
    const WelcomePage_2 = () => {

        return (
            <View style={{height: '100%', width: '100%', position: 'relative'}}>
                {NavBar(true, () => setPage(1))}
                <View style={{width: '75%', marginTop: 40, marginBottom: 40, marginLeft: 'auto', marginRight: 'auto'}}>
                    {InputBox("Email:", email, setEmail)}
                    {InputBox("Password:", pWord, setPWord)}
                </View>
                <View style={{
                        width: '50%',
                        position: 'absolute',
                        bottom: 30,
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}>
                    <Button title={"Login"} style={
                    {
                        backgroundColor: 'red',
                        color: 'Green',
                        width: '10%',
                        display: 'block',
                        borderRadius: 10,  
                        marginBottom: 20            
                    }
                    }/>                                 
                </View>
            </View>
        );
    }

    const WelcomePage_3 = () => {
        return (
            <View style={{height: '100%', width: '100%', position: 'relative'}}>
                {NavBar(true, () => setPage(1))}
                <View style={{width: '75%', marginTop: 40, marginBottom: 40, marginLeft: 'auto', marginRight: 'auto'}}>
                    {InputBox("Username:", username, setUsername)}
                    {InputBox("Email:", email, setEmail)}
                    {InputBox("Password:", pWord, setPWord)}
                </View>
                <View style={{
                        width: '50%',
                        position: 'absolute',
                        bottom: 30,
                        left: '50%',
                        transform: 'translateX(-50%)',
                    }}>
                    <Button title={"Sign Up"} style={
                    {
                        backgroundColor: 'red',
                        color: 'Green',
                        width: '10%',
                        display: 'block',
                        borderRadius: 10,  
                        marginBottom: 20            
                    }
                    }/>                                 
                </View>
            </View>
        );
    }

    if(page == 1){
        return (WelcomePage_1());
    }
    if(page == 2){
        return (WelcomePage_2());
    }
    if(page == 3){
        return (WelcomePage_3());
    }
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
