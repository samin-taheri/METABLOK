import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from "./HomeScreen";
import {Ionicons} from "@expo/vector-icons";
import {ProfileScreen} from "./ProfileScreen";
import {WalletScreen} from "./WalletScreen";
import {TradeScreen} from "./TradeScreen";
import {auth} from "../components/config";

export function TabsScreen({navigation}) {
    return (
        <MyTabs/>
    )
}

function MyTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,
                    elevation: 8,
                },
            }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                headerShown: false, tabBarShowLabel: false,
                tabBarIcon: ({focused, size}) => (
                    <Ionicons name={focused ? "trending-up" : "trending-down-outline"} size={25}
                              color={focused ? '#6600FD' : '#B5B9C1'}/>
                ),
            }}/>
            <Tab.Screen name="Trade" component={TradeScreen} options={{
                headerShown: false, tabBarShowLabel: false,
                tabBarIcon: ({focused, size}) => (
                    <Ionicons name={focused ? "swap-horizontal" : "swap-horizontal-outline"} size={25}
                              color={focused ? '#6600FD' : '#B5B9C1'}/>
                ),
            }}/>
            <Tab.Screen name="Wallet" component={WalletScreen} options={{
                headerShown: false, tabBarShowLabel: false,
                tabBarIcon: ({focused, size}) => (
                    <Ionicons name={focused ? 'wallet' : 'wallet-outline'} size={25}
                              color={focused ? '#6600FD' : '#B5B9C1'}/>
                ),
            }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                headerShown: false, tabBarShowLabel: false,
                tabBarIcon: ({focused, size}) => (
                    <Ionicons name={focused ? "person" : "person-outline"} size={25}
                              color={focused ? '#6600FD' : '#B5B9C1'}/>
                ),
            }}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({});



