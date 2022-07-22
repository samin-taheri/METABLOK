import React, {Component, useEffect} from 'react';
import {LinearGradient} from "expo-linear-gradient";
import {Image, StyleSheet, View, TouchableOpacity, Animated} from 'react-native';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {auth} from "../components/config";
import firebase from "firebase";

export function OnboardingScreen({navigation}) {

    const subscription = () => {
        firebase.auth().onAuthStateChanged(user=> {
            if (!user){
                navigation.navigate('Login')
            }
            else{
                navigation.navigate('Tabs')
            }
        })
    }
    useEffect(()=> {
        subscription()
    }, [])

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={styles.image}
                    source={require('../assets/onbording.png')}></Image>
                <View style={{flexDirection: 'column'}}>
                    <Text category='h2'>Your safety, </Text>
                    <Text category='h2' style={{paddingLeft: 0, paddingRight: 50}}>is our top priority</Text>
                </View>

                <Text category='s2' style={{paddingLeft: 30, paddingRight: 40, paddingTop: 20, color: '#969AA0'}}>Get
                    rid of your debt monthly debt payments are the biggest obstacle</Text>
                <TouchableOpacity style={styles.buttonForSignUp} onPress={() => {navigation.navigate("Signup")}}>
                    <Text style={{flex: 1, color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>Create
                        Account!</Text>
                </TouchableOpacity>
                <LinearGradient
                    colors={['#CB60CD', '#6600FD']}
                    start={{x: 0, y: 0.5}}
                    end={{x: 1, y: 0.5}}
                    style={styles.buttonForLogin}
                >
                    <TouchableOpacity onPress={() => {navigation.navigate("Login")}}>
                        <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>I have an
                            account!</Text>
                    </TouchableOpacity>
                </LinearGradient>

            </Layout>
        </ApplicationProvider>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 170,
        bottom: 80,
        height: 200,
        resizeMode: 'contain',
    },
    buttonForSignUp: {
        top: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D0D4DD',
        borderWidth: .5,
        borderColor: '#fff',
        height: 45,
        margin: 5,
        borderRadius: 16,
        width: '90%',
        left: 0,
    },
    buttonForLogin: {
        top: '15%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .5,
        borderColor: '#fff',
        height: 45,
        margin: 5,
        borderRadius: 16,
        width: '90%',
        left: 0,
    }
});
