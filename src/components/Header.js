import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>FILMS PARTY</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: COLORS.primary,
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        paddingTop: 30,
        color: '#FFF'
    }
})

export default Header;