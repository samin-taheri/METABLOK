import React, {Component, useEffect} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { KeycodeInput } from 'react-native-keycode'
import {Ionicons} from "@expo/vector-icons";
import {auth} from "../components/config";


export function PinScreen({navigation}) {

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                <Text category='s1' style={{fontSize: 18, top: 65}}>Sign In</Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{right: '37%', top: '5%'}}
                >
                    <Ionicons
                        name="arrow-back-outline"
                        color='#000'
                        size={30}
                    />
                </TouchableOpacity>
                <Text category='s1' style={{fontSize: 32, top: '20%'}}>Enter Your Pin</Text>

                <Text category='s1' style={{textAlign: 'center', fontSize: 14, top: '22%', color: '#969AA0', paddingLeft: 100, paddingRight: 100}}>Enter your pin code or try biometric login</Text>
                <KeycodeInput
                    style={{top: '75%'}}
                    tintColor='#6600FD'
                    onComplete={(value) => {
                        {navigation.navigate("Onboarding")}
                    }}
                />
                <View style={{top: '20%'}}>
                    <Ionicons
                        name="finger-print-outline"
                        color='#000'
                        size={45}
                    />
                </View>
            </Layout>
        </ApplicationProvider>
    )
}
const styles = StyleSheet.create({
    buttonForSignUp: {
        top: '75%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D0D4DD',
        borderWidth: .5,
        borderColor: '#fff',
        height: 45,
        margin: 5,
        borderRadius: 16,
        width: '50%',
        left: 0,
    },
});



