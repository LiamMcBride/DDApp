import { StyleSheet, Text } from 'react-native';


export const Heading_1 = (txt) => {
    const styles = StyleSheet.create({
        heading_1: {
            color: '#EF6F6C',
            fontSize: 32,
            margin: 20,
            fontWeight: "bold",
            textAlign: 'center',
        }
    });

    return <Text style={styles.heading_1}>{txt}</Text>;
}

export const SubText = (txt) => {
    const styles = StyleSheet.create({
        subtext: {
            color: '#EF6F6C',
            fontSize: 24,
            margin: 8,
            textAlign: 'left',
        }
    });

    return <Text style={styles.subtext}>{txt}</Text>;
}