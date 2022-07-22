import React, {Component, useEffect, useState} from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { ApplicationProvider, Layout, Text, Input } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";

export function SendCoinScreen({navigation}) {

    const [data, setData] = React.useState({
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{top: 60, right: 105}}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='#000'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text category='s1' style={{fontSize: 18, top: 66, right: 18}}>Send Coin</Text>
                </View>
                <Text category='s1' style={{fontSize: 24, top: 100, right: 100, fontWeight: '600'}}>Send Coin!</Text>

                <View style={styles.layout}>

                    <Text category='p2' style={{top: '5%', left: '6%', color: '#969AA0'}}>Address</Text>
                    <Input
                        style={{width: 327, left: 25, borderRadius: 12, top: '6%'}}
                        placeholder='Place your Address'
                        size='large'
                        status='basic'
                    />
                    <Text category='p2' style={{top: '9%', left: '6%', color: '#969AA0'}}>Amount</Text>
                    <Input
                        style={{width: 327, left: 25, borderRadius: 12, top: '10%'}}
                        placeholder='Place your Amount'
                        size='large'
                        status='basic'
                    />
                    <Text category='p2' style={{ top: '13%', left: '6%', color: '#969AA0'}}>Explanation</Text>
                    <View style={styles.action}>
                        <Input
                            style={{width: 327, height: 55, left: 25, borderRadius: 12,}}
                            placeholder='Place your Explanation'
                            size='large'
                            status='basic'
                        />
                    </View>
                    <Text category='p2' style={{ top: '2%', left: '6%', color: '#969AA0'}}>Network</Text>
                    <View style={styles.action}>
                        <Input
                            style={{width: 327, height: 55, left: 25, borderRadius: 12, bottom: 90}}
                            placeholder='Place your Network'
                            size='large'
                            status='basic'
                        />
                    </View>
                    <TouchableOpacity>
                        <LinearGradient
                            colors={['#CB60CD', '#6600FD']}
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 0.5}}
                            style={styles.buttonForLogin}
                        >
                            <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold',}}>Send</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Layout>
        </ApplicationProvider>
    )
}
const styles = StyleSheet.create({
    image: {
        top: 30,
        width: 260,
        height: 260,
        resizeMode: 'contain',
    },
    layout: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        top: '15%'
    },
    action: {
        flexDirection: 'row',
        marginTop:120,
        paddingBottom: 0,
        marginVertical: 10,
        marginBottom: 0
    },
    buttonForLogin: {
        top: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .5,
        borderColor: '#fff',
        margin: 5,
        borderRadius: 16,
        height: 45,
        width: 327,
        left: 22
    }
});



