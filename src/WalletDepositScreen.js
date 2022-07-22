import React, {useEffect} from 'react';
import {Image, StyleSheet, View, TouchableOpacity, FlatList, SafeAreaView, StatusBar, Share} from 'react-native';
import {ApplicationProvider, Layout, Text, Input} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Ionicons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import * as Clipboard from "expo-clipboard";

export function WalletDepositScreen({navigation}) {
    const email = 'hello@example.com'
    const copyIt = ()=> Clipboard.setString(email)

    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{top: 65, right: 110}}
                        onPress={()  => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='#000'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text category='s1' style={{fontSize: 18, top: 65, right: 15}}>Deposit</Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../assets/qr.png')}></Image>
                <Text category='s1' style={{fontSize: 20, top: '30%', paddingLeft: 60, paddingRight: 60, textAlign: 'center'}}>2ggb8fehwufb4674ebfy476fg237djg98jh48803kl</Text>

                <TouchableOpacity>
                    <LinearGradient
                        colors={['#CB60CD', '#6600FD']}
                        start={{x: 0, y: 0.5}}
                        end={{x: 1, y: 0.5}}
                        style={styles.buttonForLogin}
                    >
                        <Text style={{color: '#fff', textAlign: 'center', fontWeight: 'bold',}}>Copy the Address</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonForSignUp} onPress={onShare}>
                    <Text style={{flex: 1, color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>Share the Address</Text>
                </TouchableOpacity>
            </Layout>
        </ApplicationProvider>
    )
}

const styles = StyleSheet.create({
    buttonForLogin: {
        top: '80%',
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
    buttonForSignUp: {
        top: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#D0D4DD',
        borderWidth: .5,
        borderColor: '#fff',
        height: 45,
        margin: 5,
        borderRadius: 16,
        width: 327,
        left: 0,
    },
    image2: {
        top: '6%',
        width: 200,
        height: 200,
        resizeMode: 'contain',
        left: '22%'
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



