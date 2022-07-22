import React, { Component } from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Ionicons} from "@expo/vector-icons";

export function AboutUsScreen({navigation}) {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                                style={{top: 60, right: 110}}
                                onPress={()  => navigation.goBack()}
                            >
                                <Ionicons
                                    name="arrow-back-outline"
                                    color='#000'
                                    size={25}
                                />
                            </TouchableOpacity>
                            <Text category='s1' style={{fontSize: 18,top: 66, right: 10}}>About Us</Text>
                        </View>
                        <Image
                            style={styles.image}
                            source={require('../assets/logo.png')}></Image>
                <View style={styles.layout}>
                    <View style={styles.card}>
                        <Text category='s1' style={{fontSize: 17, fontWeight: '500', padding: 20, lineHeight: 32}}>METABID is the native asset on Binance Chain, a blockchain software system developed by Binance and the community. BNB has multiple forms of utility and powers the Binance Ecosystem as its underlying gas.</Text>
                    </View>
                    <View style={styles.card2}>
                        <Text category='s1' style={{fontSize: 17, fontWeight: '500', padding: 20, lineHeight: 32}}>Our vision is to increase the freedom of money globally. We believe that by spreading this freedom, we can significantly improve lives around the world
                        </Text>
                    </View>
                    <View style={styles.card3}>
                        <View style={{flexDirection: 'column'}}>
                        <Text category='s1' style={{fontSize: 17, fontWeight: '500', paddingRight: 50, lineHeight: 32, color: '#B5B9C1'}}>@ 2022 - 2023 METABIT Inc.</Text>
                        <Text category='s1' style={{fontSize: 17, fontWeight: '500',  paddingRight: 50, lineHeight: 0, color: '#6600FD'}}>Licence.</Text>
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
        right: 70,
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
        width: 325,
        height: 234,
        borderRadius: 12,
        marginBottom: 18,
        backgroundColor: '#fff',
        left: 30,
        top: '5%'
    },
    card2: {
        borderWidth: 1,
        borderColor: '#ECEDF4',
        alignItems: 'center',
        justifyContent: 'center',
        width: 325,
        height: 192,
        borderRadius: 12,
        marginBottom: 18,
        backgroundColor: '#fff',
        left: 30,
        top: '5%'
    },
    card3: {
        borderWidth: 1,
        borderColor: '#ECEDF4',
        alignItems: 'center',
        justifyContent: 'center',
        width: 325,
        height: 80,
        borderRadius: 12,
        marginBottom: 18,
        backgroundColor: '#fff',
        left: 30,
        top: '5%',
    },
    layout: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        top: '17%'
    },
});
