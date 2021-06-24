import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

// import components
import HomeScreen from '../screens/HomeScreen';
import FavoriScreen from '../screens/FavoriScreen';
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style:{
                    backgroundColor: COLORS.secondary,
                    position: "absolute",
                    bottom: 50,
                    left: 40,
                    right: 40,
                    elevation: 0,
                    borderRadius: 90,
                    height: 70,
                    ...styles.shadow,
                }
            }}
        >
            <Tab.Screen 
                name="Accueil"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{alignItems: 'center', justifyContent: 'center', top: 12}}
                        >
                            <Image 
                                source={require('../assets/icons/film_icon.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#FFF' : '#e98f9e',
                                }}
                            />
                        </View>
                    )
                }}
            />
            <Tab.Screen 
                name="Favori"
                component={FavoriScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{alignItems: 'center', justifyContent: 'center', top: 12}}
                        >
                            <Image 
                                source={require('../assets/icons/like_icon.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: focused ? '#FFF' : '#e98f9e',
                                }}
                            />
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create ({
    shadow: {
        shadowColor: COLORS.secondary,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;