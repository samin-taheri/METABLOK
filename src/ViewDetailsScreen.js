import React, {Component} from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Ionicons} from "@expo/vector-icons";
import {auth} from "../components/config";

export function ViewDetailsScreen({navigation}) {
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
                    <Text category='s1' style={{fontSize: 18, top: 66, right: 10}}>Details</Text>
                </View>
                <View style={styles.card2}>
                    <View style={{flexDirection: 'column'}}>
                        <Text category='s1' style={{fontSize: 14, top: 23, left: 35, color: '#3F009B'}}>
                            Balance</Text>
                    </View>
                    <Text category='s1' style={{fontSize: 22, top: 0, left: 180, color: '#3F009B'}}>415,38 TRY</Text>
                </View>
                <View style={{top: 135}}>
                    <View
                        style={styles.cardP}>
                        <Text category='s1' style={{
                            fontSize: 16,
                            alignSelf: 'flex-start',
                            left: 20,
                            color: '#969AA0',
                            paddingTop: 5,
                            fontWeight: '500'
                        }}>Network: Tron</Text>
                        <View style={{flexDirection: 'row'}}>
                        <Text category='s1' style={{
                            fontSize: 16,
                            alignSelf: 'flex-start',
                            left: 20,
                            top: 0,
                            color: '#969AA0',
                            paddingTop: 12,
                            fontWeight: '500'
                        }}>Operation Code: 2jh83jheffw09</Text>
                        <TouchableOpacity
                            style={{top: 10, left:50}}
                        >
                            <Ionicons
                                name="copy-outline"
                                color='#969AA0'
                                size={20}
                            />
                        </TouchableOpacity>
                        </View>
                        <Text category='s1' style={{
                            fontSize: 16,
                            alignSelf: 'flex-start',
                            left: 20,
                            top: 0,
                            color: '#969AA0',
                            paddingTop: 12,
                            fontWeight: '500'
                        }}>Amount: 0.000</Text>
                        <Text category='s1' style={{
                            fontSize: 16,
                            alignSelf: 'flex-start',
                            left: 20,
                            top: 0,
                            color: '#969AA0',
                            paddingTop: 12,
                            fontWeight: '500'
                        }}>Time: 20/02/2022</Text>
                        <Text category='s1' style={{
                            fontSize: 16,
                            alignSelf: 'flex-start',
                            left: 20,
                            top: 0,
                            color: '#969AA0',
                            paddingTop: 12,
                            fontWeight: '500'
                        }}>Network Confirmation: 120</Text>
                        <Text category='s1' style={{
                            fontSize: 16,
                            alignSelf: 'flex-start',
                            left: 20,
                            top: 0,
                            color: '#969AA0',
                            paddingTop: 12,
                            fontWeight: '500'
                        }}>Status: Successful</Text>
                    </View>
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
        right: 40,
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
        height: 220,
        borderRadius: 12,
        marginBottom: 18,
        paddingBottom: 10
    },
    card2: {
        width: 327,
        height: 63,
        borderRadius: 20,
        backgroundColor: '#ECE2FB',
        top: '12%',
    }
});
