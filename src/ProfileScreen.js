import React, {Component, useEffect, useState} from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Ionicons} from "@expo/vector-icons";
import {auth} from "../components/config";
import firebase from "firebase";

export function ProfileScreen({navigation}) {
    const handleLogout = () => {
        auth
            .signOut()
            .then(() => {
                navigation.replace('Login')
            }).catch(error => alert(error.message))
    }

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{top: 60, right: 110}}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='#000'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text category='s1' style={{fontSize: 18, top: 66, right: 10}}>Account</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        style={styles.image}
                        source={require('../assets/avatar.png')}></Image>
                    <View>
                        <Text category='s1' style={{
                            fontSize: 13,
                            top: 120,
                            right: 20,
                            fontWeight: '700'
                        }}>{auth.currentUser?.email}</Text>
                        <Text category='s1' style={{fontSize: 13, top: 130, right: 20, color: '#969AA0'}}>Joined
                            2022</Text>
                    </View>
                </View>
                <View style={{top: 125}}>

                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => {
                            navigation.navigate("ImportAccount")
                        }}>
                        <Text category='s1'
                              style={{fontSize: 16, alignSelf: 'flex-start', left: 20, top: 10, fontWeight: '500'}}>Import
                            an Account</Text>
                        <View style={{marginLeft: 'auto'}}>
                            <Ionicons
                                style={{right: 15, bottom: 8,}}
                                name="chevron-forward-outline"
                                color='#969AA0'
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => {
                            navigation.navigate("ViewProfile")
                        }}>
                        <Text category='s1'
                              style={{fontSize: 16, alignSelf: 'flex-start', left: 20, top: 10, fontWeight: '500'}}>View
                            Profile</Text>
                        <View style={{marginLeft: 'auto'}}>
                            <Ionicons
                                style={{right: 15, bottom: 8,}}
                                name="chevron-forward-outline"
                                color='#969AA0'
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => {
                            navigation.navigate("Deposit")
                        }}>
                        <Text category='s1'
                              style={{fontSize: 16, alignSelf: 'flex-start', left: 20, top: 10, fontWeight: '500'}}>Deposits</Text>
                        <View style={{marginLeft: 'auto'}}>
                            <Ionicons
                                style={{right: 15, bottom: 8,}}
                                name="chevron-forward-outline"
                                color='#969AA0'
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => {
                            navigation.navigate("Withdraw")
                        }}>
                        <Text category='s1'
                              style={{fontSize: 16, alignSelf: 'flex-start', left: 20, top: 10, fontWeight: '500'}}>Withdraws</Text>
                        <View style={{marginLeft: 'auto'}}>
                            <Ionicons
                                style={{right: 15, bottom: 8,}}
                                name="chevron-forward-outline"
                                color='#969AA0'
                                size={20}
                            />
                        </View>
                    </TouchableOpacity>
                    <View
                        style={styles.cardP}>
                        <Text category='s1' style={{
                            fontSize: 16,
                            alignSelf: 'flex-start',
                            left: 20,
                            color: '#969AA0',
                            paddingTop: 5,
                            fontWeight: '500'
                        }}>Email: {auth.currentUser?.email}</Text>
                        <Text category='s1' style={{
                            fontSize: 16,
                            alignSelf: 'flex-start',
                            left: 20,
                            top: 0,
                            color: '#969AA0',
                            paddingTop: 8,
                            fontWeight: '500'
                        }}>Balance: 0.000</Text>
                        <Text category='s1' style={{
                            fontSize: 16,
                            alignSelf: 'flex-start',
                            left: 20,
                            top: 0,
                            color: '#969AA0',
                            paddingTop: 8,
                            fontWeight: '500'
                        }}>Address: 2jh83jhbfw09</Text>
                    </View>
                    <TouchableOpacity style={styles.buttonForLogin} onPress={handleLogout}>
                        <Text style={{color: '#6600FD', textAlign: 'center', fontWeight: 'bold',}}>Log
                            out</Text>
                    </TouchableOpacity>
                </View>
            </Layout>
        </ApplicationProvider>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
        right: 25,
        top: 100
    },
    buttonForLogin: {
        top: '5%',
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
    },
    cardP: {
        borderWidth: 1,
        borderColor: '#ECEDF4',
        justifyContent: 'center',
        width: 327,
        height: 114,
        borderRadius: 12,
        marginBottom: 18,
        paddingBottom: 10
    }
});
