import React, {useEffect} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, FlatList, SafeAreaView, StatusBar, Animated} from 'react-native';
import {ApplicationProvider, Layout, Text, Input} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Ionicons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";

export function MyAddressScreen({navigation}) {
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{top: 65, right: 88}}
                        onPress={()  => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='#000'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text category='s1' style={{fontSize: 18, top: 65}}>My Address</Text>
                    <View style={{left: 100, top: 65, marginLeft: 'auto'}}>
                        <TouchableOpacity>
                            <Ionicons
                                name="share-social-outline"
                                color='#000'
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Image
                    style={styles.image}
                    source={require('../assets/qr.png')}></Image>
                <Text category='s1' style={{fontSize: 20, top: '40%'}}>2ggb237djg98jh48803kl</Text>

                <TouchableOpacity>
                    <LinearGradient
                        colors={['#CB60CD', '#6600FD']}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.buttonForLogin}
                    >
                        <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold',}}>Copy My Address</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Layout>
        </ApplicationProvider>
    )
}

const styles = StyleSheet.create({
    buttonForLogin: {
        top: '93%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .5,
        borderColor: '#fff',
        margin: 5,
        borderRadius: 16,
        height: 45,
        width: 327,
        left: 0
    },
    image: {
        top: '17%',
        width: 266,
        height: 266,
        resizeMode: 'contain',
    },
    imageLogo: {
        top: '20%',
        right: 65,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    menu: {
        top: '8%',
        right: 50,
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    tronLogo: {
        top: '25%',
        left: '25%',
        width: 27,
        height: 27,
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        top: '13%',
    },
    item: {
        padding: 14,
        marginVertical: 2,
        marginHorizontal: 3,
        flexDirection: 'row',
        borderBottomColor: '#ECEDF4',
        borderBottomWidth: 0.5,
        width: 320,
    },
    title: {
        fontSize: 16,
        fontWeight: '600'
    },
    description: {
        color: '#969AA0',
        fontSize: 13,
        top: 2
    },
    description2: {
        color: 'green',
        fontSize: 13,
        top: 26,
        left: 80
    },
    description3: {
        color: '#969AA0',
        fontSize: 13,
        top: 28,
        left: 80
    },
    layout: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        bottom: 10
    },
});



