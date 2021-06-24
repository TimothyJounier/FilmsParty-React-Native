import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';

const FavoriScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Hello</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    }
})

export default FavoriScreen;