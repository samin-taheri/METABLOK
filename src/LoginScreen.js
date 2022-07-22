import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {ApplicationProvider, Layout, Text, Input} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Ionicons} from '@expo/vector-icons';
import {LinearGradient} from "expo-linear-gradient";
import {auth} from "../components/config";
import firebase from "firebase";
//import {GoogleSignin} from '@react-native-google-signin/google-signin'
import ToastMessage from "../components/ToastMessage";

export function LoginScreen({navigation}) {
    const [toast, setToast] = useState({ value: '', type: '' })
    const [error, setError] = useState()
    const [email, setEmail] = React.useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [password, setPassword] = React.useState('');
    const [data, setData] = React.useState({
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });
    {/*
    const GetLoginStatus = async () => {
        GoogleSignin.configure({ webClientId: '444596303131-cju82rlfd3qcjr3vq5tjkp6joqv8i61q.apps.googleusercontent.com' });
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log(userInfo);

    }
*/}
    const updateSecureTExtEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleLogin = async () => {
        try {
            setIsLoading(true)
            await firebase.auth()
                .signInWithEmailAndPassword(email, password)
                .then(userCredentials => {
                    const user = userCredentials.user;
                    if (user.emailVerified) {
                        console.log("Logged in with: ", user.email)
                        navigation.navigate('Tabs')

                    } else {
                        setError("Please verify your email")
                    }
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
                        style={{top: 60, right: 130}}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='#000'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text category='s1' style={{fontSize: 18, top: 60, right: 10}}>Login</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../assets/logo.png')}></Image>
                <View style={styles.layout}>
                    <Text category='p2' style={{top: '5%', left: '9%', color: '#969AA0'}}>email Address</Text>
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
                    <Text category='p2' style={{top: '8.5%', left: '9%', color: '#969AA0'}}>Password</Text>
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
                    <TouchableOpacity
                        style={{top: '1%', left: '60%'}}
                        onPress={() => {
                            navigation.navigate("ForgotPassword")
                        }}
                    >
                        <Text category='p2' style={{color: '#6600FD'}}>Forgot Password ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogin}>
                        <LinearGradient
                            colors={['#CB60CD', '#6600FD']}
                            start={{x: 0, y: 0.5}}
                            end={{x: 1, y: 0.5}}
                            style={styles.buttonForLogin}
                        >
                            <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    {isLoading === true ?
                        <ActivityIndicator size='large' style={{top: '7%'}}/>
                        : null}
                    <TouchableOpacity style={{top: '20%'}}>
                        <Text>Login with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{top: '22%', left: '22%'}}
                        onPress={() => {
                            navigation.navigate("Signup")
                        }}
                    >
                        <View style={{flexDirection: 'row'}}>
                            <Text category='p2' style={{color: '#969AA0'}}>Don't have an account? </Text>
                            <Text category='p2' style={{color: '#6600FD'}}>Sign Up</Text>
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
        marginTop: 80,
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



