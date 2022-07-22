import React, { Component } from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Ionicons} from "@expo/vector-icons";
import {auth} from "../components/config";

export function MenuScreen({navigation}) {
    const handleLogout = () => {
        auth
            .signOut()
            .then(()=> {
                navigation.replace('Login')
            }).catch(error => alert(error.message))
    }

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                <View>
                <View>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{top: 60, left: 10}}
                        onPress={()  => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='#000'
                            size={25}
                        />
                    </TouchableOpacity>
                <Text category='s1' style={{fontSize: 18,top: 66, left: 115}}>Menu</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../assets/logo.png')}></Image>
                    <View style={{ top: 140}}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => {navigation.navigate("MyAddress")}}>
                        <Text category='s1' style={{fontSize: 16, alignSelf: 'flex-start', left: 20, top: 10}}>My Address</Text>
                        <View style={{marginLeft:'auto'}}>
                            <Ionicons
                                style={{ right: 15, bottom: 8, }}
                                name="chevron-forward-outline"
                                color='#969AA0'
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => {navigation.navigate("SendCoin")}}>
                        <Text category='s1' style={{fontSize: 16,alignSelf: 'flex-start', left: 20, top: 10}}>Send Coin</Text>
                        <View style={{marginLeft:'auto'}}>
                            <Ionicons
                                style={{ right: 15, bottom: 8, }}
                                name="chevron-forward-outline"
                                color='#969AA0'
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.card}>
                        <Text category='s1' style={{fontSize: 16,alignSelf: 'flex-start', left: 20,top: 10}}>Tokens</Text>
                        <View style={{marginLeft:'auto'}}>
                            <Ionicons
                                style={{ right: 15, bottom: 8, }}
                                name="chevron-forward-outline"
                                color='#969AA0'
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate("AboutUs")}}
                        style={styles.card}>
                        <Text category='s1' style={{fontSize: 16,alignSelf: 'flex-start', left: 20, top: 10}}>About Us</Text>
                        <View style={{marginLeft:'auto'}}>
                            <Ionicons
                                style={{ right: 15, bottom: 8, }}
                                name="chevron-forward-outline"
                                color='#969AA0'
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                <TouchableOpacity style={styles.buttonForLogin} onPress={handleLogout}>
                    <Text style={{color: '#6600FD', textAlign: 'center', fontWeight: 'bold',}}>Log out</Text>
                </TouchableOpacity>
                    </View>
                    </View>
                </View>
            </Layout>
        </ApplicationProvider>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 27,
        resizeMode: 'contain',
        left: 10,
        top: 100
    },
    buttonForLogin: {
        top: '75%',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#6600FD',
        margin: 5,
        borderRadius: 16,
        height: 45,
        width: 327,
        left: 0
    },
    card: {
        borderWidth: 1,
        borderColor: '#ECEDF4',
        alignItems: 'center',
        justifyContent: 'center',
        width: 327,
        height: 55,
        borderRadius: 12,
        marginBottom: 18,

    }
});
