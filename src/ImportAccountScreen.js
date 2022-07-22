import React, {Component, useEffect, useState} from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { ApplicationProvider, Layout, Text, Input } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";

export function ImportAccountScreen({navigation}) {

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
                    <Text category='s1' style={{fontSize: 18, top: 66, right: 10}}>Import an Account </Text>
                </View>
                <Text category='s1' style={{fontSize: 24, top: 110, right: 60, fontWeight: '600'}}>Import an Account!</Text>

                <View style={styles.layout}>
                    <Text category='s1' style={{fontSize: 20, top: '5%', left: '6%', fontWeight: '500', paddingBottom: 5, paddingRight: 40}}>Paste your private key string to import an account</Text>
                    <Input
                        style={{width: 327, left: 25, borderRadius: 12, top: '8%'}}
                        placeholder='Place your private key'
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
                            <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold',}}>Import</Text>
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
        top: '10%'
    },
    layout: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        top: '18%'
    },
    action: {
        flexDirection: 'row',
        marginTop: 80,
        paddingBottom: 0,
        marginVertical: 10,
        marginBottom: 0
    },
    buttonForLogin: {
        marginTop: '110%',
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



