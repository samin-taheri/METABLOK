import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {ApplicationProvider, Layout, Text, Input} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Ionicons} from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";
import ToastMessage from "../components/ToastMessage";
import firebase from "firebase";

export function ForgotPasswordScreen({navigation}) {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const sendResetPasswordEmail = async () => {
        try {
            setIsLoading(true)
            await firebase.auth()
                .sendPasswordResetEmail(email)
                .then(() => {
                    setError('Email with password has been sent. ')
                    alert('Email with password has been sent.')
                    navigation.navigate('Login')
                }).catch(error => setError(error.message))
            setIsLoading(false)
        } catch (err) {
            console.log(err)
            setError(err.message)
        }
    }

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{top: 60, right: 80}}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='#000'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text category='s1' style={{fontSize: 18, top: 60, right: 10}}>Forgot Password</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../assets/logo.png')}></Image>
                <View style={styles.layout}>
                    <Text category='p2' style={{top: '5%', left: '9%', color: '#969AA0'}}>New Password</Text>
                    <View style={styles.action}>
                        <Input
                            style={{width: 327, left: 30, borderRadius: 12, top: '6%'}}
                            placeholder='Place your Email Address'
                            size='large'
                            keyboardType='email-address'
                            status='basic'
                            type='email'
                            value={email}
                            onChangeText={nextValue => setEmail(nextValue)}
                        />
                    </View>
                    <TouchableOpacity onPress={sendResetPasswordEmail}>
                        <LinearGradient
                            colors={['#CB60CD', '#6600FD']}
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 0.5}}
                            style={styles.buttonForLogin}
                        >
                            <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold',}}>Change
                                Password</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {isLoading === true ?
                        <ActivityIndicator size='large' style={{top: '7%'}}/>
                        : null}
                    <ToastMessage message={error} onDismiss={() => setError('')}/>
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
    view: {
        marginTop: 100
    },
    layout: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        bottom: 10,
    },
    action: {
        flexDirection: 'row',
        marginTop: 50,
        paddingBottom: 0,
        marginVertical: 10,
        marginBottom: 0
    },
    action2: {
        flexDirection: 'row',
        marginTop: 30,
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
        left: 27
    },
});



