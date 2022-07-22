import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export function SplashScreen({navigation}) {

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={styles.image}
                    source={require('../assets/logo.png')}></Image>
            </Layout>
        </ApplicationProvider>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 260,
        height: 260,
        resizeMode: 'contain',
    },
});