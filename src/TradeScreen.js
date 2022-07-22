import React, {useEffect, useState} from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
    StatusBar,
    Animated,
    TextInput
} from 'react-native';
import {ApplicationProvider, Layout, Text, Input} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Ionicons} from "@expo/vector-icons";
import {Searchbar} from "react-native-paper";

export function TradeScreen({navigation}) {

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{top: 65, right: 96, width: 100}}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='#000'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text category='s1' style={{fontSize: 18, top: 65, right: 50}}>Trade</Text>
                </View>
            </Layout>
        </ApplicationProvider>
    )
}

const styles = StyleSheet.create({
    buttonForLogin: {
        top: '20%',
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
    imageLogo: {
        top: '8%',
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
        top: '8%',
    },
    item: {
        padding: 14,
        marginVertical: 2,
        marginHorizontal: 3,
        flexDirection: 'row',
        borderBottomColor: '#ECEDF4',
        borderBottomWidth: 1,
        width: 350,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        bottom: 5
    },
    description: {
        color: '#969AA0',
        fontSize: 13,
        top: -2
    },
    description2: {
        color: '#464646',
        fontSize: 16,
        top: 5,
        textAlign: 'right'
    },
    description3: {
        color: '#969AA0',
        fontSize: 13,
        top: 15,
        textAlign: 'right'
    },
    description5: {
        color: '#969AA0',
        fontSize: 12,
        bottom: 3,
        textAlign: 'right'
    },
    description4: {
        color: 'green',
        fontSize: 13,
        top: 2,
        left: 0
    },
    description6: {
        color: 'red',
        fontSize: 13,
        top: 2,
        left: 0
    },
    ThreeValueInLineButton: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 5,
        padding: 10,
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderRadius: 8,
        borderColor: 'silver',
        alignItems: 'center'
    },
    action2: {
        flexDirection: 'row',
        marginVertical: 8,
        padding: 10,
        marginTop: 10,
        paddingBottom: 5,
        justifyContent: 'space-between',

        alignItems: 'center'
    },
    ButtonContainer: {
        alignItems: 'center'
    },
    SwipableCloseIcon: {
        width: '100%',
        flexDirection: 'row-reverse',
        marginRight: -25,
    },
    HorseName: {
        marginBottom: 10,
        fontWeight: '500',
        fontSize: 16,
    },
    textStyle: {
        left: 5,

        fontSize: 12
    },
    textStyle2: {
        left: 5,
        fontSize: 13,
        fontWeight: 'bold'
    },

    flatList: {
        height: 20,
        top: 10
    },

    latestItem: {
        flexDirection: 'row',
        width: 345,
        padding: 18,
        marginBottom: 16,
        backgroundColor: '#fff',
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.27,
        elevation: 10,
    },
});



