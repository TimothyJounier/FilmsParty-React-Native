import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import SearchBar from '../components/Search';
import ListItem from '../components/List';

// Constants
import { COLORS } from '../constants';


const HomeScreen = ({navigation}) => {
    return (
            <View style={styles.container}>
                {/* Header */}
                <View style={{flex: 0.1, backgroundColor: COLORS.primary,justifyContent:'center',alignItems:'center', flexDirection:'row'}}>
                    <Text style={{paddingTop: 60, color: COLORS.white, fontSize: 20}}>FILMS </Text>
                    <Text style={{paddingTop: 60, color: COLORS.secondary, fontSize: 20}}>PARTY</Text>
                </View>
                <View style={{backgroundColor: COLORS.primary, flex: 0.1, alignItems:'center',justifyContent:'center'}}>
                    <SearchBar />
                </View>

                {/* Body */}
                <View style={{flex: 0.8, alignItems: 'center'}}>
                    <ListItem />
                </View>
            </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary
    }
})

export default HomeScreen;
