import React, {Component, useEffect, useState} from 'react';
import { Image, StyleSheet, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ApplicationProvider, Layout, Text, Input, Icon, Button} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { Ionicons } from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";
import {auth} from "../components/config";
import firebase from "firebase";
import ToastMessage from "../components/ToastMessage";

export function SignupScreen({navigation}) {
    const [error, setError] = useState()
    const [email, setEmail] = React.useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [data, setData] = React.useState({
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const updateSecureTExtEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const createAccount = ()=> {
        fetch('https://api.shasta.trongrid.io/wallet/createaccount', {
            method: 'POST',
            headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify({
                owner_address: 'TAK3V7bSBBfa1XsHws4Dsy8R8UoJ37cqvh',
                account_address: ''
            }),
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }
    const SendWalletBalance = () => {
        return fetch('https://api.trongrid.io/wallet/createtransaction',
            {
                method: 'POST',
                headers: {
                    'TRON-PRO-API-KEY': '084b54e5-3daa-4a78-bb31-d0f9e355b750',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    to_address: "41e9d79cc47518930bc322d9bf7cddd260a0260a8d",
                    owner_address: "41D1E7A6BC354106CB410E65FF8B181C600FF14292",
                    amount: 1000
                }),
                json: true
            }).then((response) => response.json())
            .then((json) => {
                return json;
            })
    };

    const handleSignup = async () => {
        try {
            setIsLoading(true)
           await firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(()=>{
                    firebase.auth().currentUser.sendEmailVerification()
                        .then(()=> {
                            if (password !== confirmPassword){
                                setError('Passwords dont match!')
                            } else {
                                alert('Verification Email Sent')
                                navigation.navigate("Login")
                            }
                        }).catch((error) => {
                        setError(error.message)
                        })
                        .then(()=> {
                            firebase.firestore().collection('users')
                                .doc(firebase.auth().currentUser.uid)
                        }).catch((error)=> {
                        setError(error.message)
                        })
                    //createAccount()
                    //navigation.navigate("Login")
                })
                    .catch(error => setError(error.message))
            setIsLoading(false)
        }
        catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    useEffect(()=> {

    },[]);

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
                    <Text category='s1' style={{fontSize: 18, top: 60, right: 10}}>Sign Up</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../assets/logo.png')}></Image>
                <View style={styles.layout}>
                    <Text category='p2' style={{top: '5%', left: '9%', color: '#969AA0'}}>Email Address</Text>
                    <Input
                        style={{width: 327, left: 30, borderRadius: 12, top: '6%'}}
                        placeholder='Place your Email Address'
                        value={email}
                        size='large'
                        status='basic'
                        onChangeText={nextValue => setEmail(nextValue)}
                    />
                    <Text category='p2' style={{ top: '8.5%', left: '9%', color: '#969AA0'}}>Password</Text>
                    <View style={styles.action}>
                        <Input
                            style={{width: 327, height: 55, left: 30, borderRadius: 12,}}
                            placeholder='Place your password'
                            value={password}
                            size='large'
                            status='basic'
                            onChangeText={nextValue => setPassword(nextValue)}
                            secureTextEntry={data.secureTextEntry ? true : false}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTExtEntry}
                        >
                            {data.secureTextEntry ?

                                <View style={{top: 13, right: 15}}>
                                    <Ionicons
                                        name="eye-off-outline"
                                        color="grey"
                                        size={20}
                                    />
                                </View>
                                :
                                <View style={{top: 13, right: 15}}>
                                    <Ionicons
                                        name="eye-outline"
                                        color="grey"
                                        size={20}
                                    />
                                </View>
                            }
                        </TouchableOpacity>
                    </View>
                    <Text category='p2' style={{ top: '2%', left: '9%', color: '#969AA0'}}>Confirm Password</Text>
                    <View style={styles.action2}>
                        <Input
                            style={{width: 327, height: 55, left: 30, borderRadius: 12,}}
                            placeholder='Place your password'
                            value={confirmPassword}
                            size='large'
                            status='basic'
                            onChangeText={nextValue => setConfirmPassword(nextValue)}
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.confirm_secureTextEntry ?
                                <View style={{top: 13, right: 15}}>
                                    <Ionicons
                                        name="eye-off-outline"
                                        color="grey"
                                        size={20}
                                    />
                                </View>
                                :
                                <View style={{top: 13, right: 15}}>
                                    <Ionicons
                                        name="eye-outline"
                                        color="grey"
                                        size={20}
                                    />
                                </View>
                            }
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={handleSignup}>
                    <LinearGradient
                        colors={['#CB60CD', '#6600FD']}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.buttonForLogin}
                    >
                            <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold',}}>Sign Up</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                    {isLoading === true ?
                    <ActivityIndicator size='large' style={{top: '7%'}}/>
                        : null}
                    <TouchableOpacity
                        style={{top: '10.5%', left: '22%'}}
                        onPress={() => {navigation.navigate("Login")}}
                    >
                        <View style={{flexDirection: 'row'}}>
                            <Text category='p2' style={{ color: '#969AA0'}}>Already have an account? </Text>
                            <Text category='p2' style={{ color: '#6600FD'}}>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <ToastMessage message={error} onDismiss={() => setError('')} />
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
        bottom: 10
    },
    action: {
        flexDirection: 'row',
        marginTop: 80,
        paddingBottom: 0,
        marginVertical: 10,
        marginBottom: 0
    },
    action2: {
        flexDirection: 'row',
        marginTop: 25,
        paddingBottom: 0,
        marginVertical: 10,
        marginBottom: 0
    },
    buttonForLogin: {
        top: '10%',
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



