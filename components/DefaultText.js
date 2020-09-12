import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DeafultText = props => {
    return <Text style={styles.Text}>{props.children}</Text>
}

const styles = StyleSheet.create({
    Text: {
        fontFamily: 'open-sans'
    }
});

export default DeafultText;