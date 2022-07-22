import React, {Component, useEffect, useState} from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { ApplicationProvider, Layout, Text, Input } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";

export function NewAccountScreen({navigation}) {

    const [account, setAccount] = useState()
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{top: 60, right: 60}}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='#000'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text category='s1' style={{fontSize: 18, top: 66, right: 10}}>Create New Account</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../assets/avatar.png')}></Image>
                <Text category='s1' style={{fontSize: 24, top: 130, right: 50, fontWeight: '600'}}>Create New Account!</Text>

                <View style={styles.layout}>
                    <Text category='p2' style={{top: '5%', left: '6%', color: '#969AA0'}}>Account Name</Text>
                    <Input
                        style={{width: 327, left: 25, borderRadius: 12, top: '6%'}}
                        placeholder='Place your Account Name'
                        value={account}
                        size='large'
                        status='basic'
                        onChangeText={nextValue => setAccount(nextValue)}
                    />
                    <TouchableOpacity>
                        <LinearGradient
                            colors={['#CB60CD', '#6600FD']}
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 0.5}}
                            style={styles.buttonForLogin}
                        >
                            <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold',}}>Create</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Layout>
        </ApplicationProvider>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 140,
        height: 140,
        resizeMode: 'contain',
        top: '12%'
    },
    layout: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        top: '20%'
    },
    action: {
        flexDirection: 'row',
        marginTop: 80,
        paddingBottom: 0,
        marginVertical: 10,
        marginBottom: 0
    },
    buttonForLogin: {
        marginTop: '80%',
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



