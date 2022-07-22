import React, {Component, useEffect, useState} from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { ApplicationProvider, Layout, Text, Input } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";
import {auth} from "../components/config";

export function ViewProfileScreen({navigation}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('123456');
    const [data, setData] = React.useState({
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const updateSecureTExtEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{top: 60, right: 120}}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='#000'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text category='s1' style={{fontSize: 18, top: 66, right: 18}}>Profile</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../assets/avatar.png')}></Image>
                <View style={styles.layout}>

                    <Text category='p2' style={{top: '5%', left: '6%', color: '#969AA0'}}>email Address</Text>
                    <Input
                        style={{width: 327, left: 25, borderRadius: 12, top: '6%'}}
                        placeholder='Place your Email Address'
                        value={auth.currentUser?.email}
                        size='large'
                        status='basic'
                        onChangeText={nextValue => setEmail(nextValue)}
                    />
                    <Text category='p2' style={{ top: '9%', left: '6%', color: '#969AA0'}}>Password</Text>
                    <View style={styles.action}>
                        <Input
                            style={{width: 327, height: 55, left: 25, borderRadius: 12,}}
                            placeholder='Place your password'
                            value={password}
                            size='large'
                            status='basic'
                            onChangeText={nextValue => setPassword(nextValue)}
                            secureTextEntry={data.secureTextEntry ? true : false}
                        />
                        <TouchableOpacity onPress={updateSecureTExtEntry}>
                            {data.secureTextEntry ?

                                <View style={{top: 13, right: 15}}>
                                    <Ionicons
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                </View>
                                :
                                <View style={{top: 13, right: 15}}>
                                    <Ionicons
                                        name="eye"
                                        color="grey"
                                        size={20}
                                    />
                                </View>
                            }

                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <LinearGradient
                            colors={['#CB60CD', '#6600FD']}
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 0.5}}
                            style={styles.buttonForLogin}
                        >
                            <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold',}}>Save</Text>
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
        top: '15%'
    },
    action: {
        flexDirection: 'row',
        marginTop: 80,
        paddingBottom: 0,
        marginVertical: 10,
        marginBottom: 0
    },
    buttonForLogin: {
        marginTop: '60%',
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



