import { View, StyleSheet, Text, Button } from 'react-native';


export const NavBar = (back, handleClick) => {
    const styles = StyleSheet.create({
        navBar: {
            backgroundColor: '#EF6F6C',
            height: 50,
            width: '100%',
            margin: 0,
            padding: 0,
        }
    });

    if(back){
        return (
            <View style={styles.navBar}>
                <Text onPress={handleClick}>Back</Text>
            </View>
        );
    }

    return (
        <View style={styles.navBar}></View>
    );
}