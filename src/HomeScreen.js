import React, {useState, useEffect} from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, TouchableOpacity, View, StatusBar, Animated, Dimensions} from 'react-native';
import {ApplicationProvider, Layout, Text, Divider, List, ListItem, Icon} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Ionicons} from "@expo/vector-icons";
import {Searchbar} from "react-native-paper";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'TRX',
        description: '0.068452',
        image: 'https://cryptologos.cc/logos/tron-trx-logo.png',
        vol: 'Vol 339.809M',
        add: '$ 0.068',
        min : '-3.47%',
        col: 'min'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'BTC',
        description: '21,901.26',
        image: 'https://bitcoin.org/img/icons/opengraph.png?1657703267',
        vol: 'Vol 432.246K',
        add: '$ 21,902.56',
        min : '+0.97%',
        col: 'add'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145573459d72',
        title: 'ETH',
        description: '1,534.054',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png',
        vol: 'Vol 228.575K',
        add: '$ 1,533,65',
        min : '+7.84%',
        col: 'add'
    },
    {
        id: '58693a0f-3da1-471f-bd96-145573459d72',
        title: 'AVAX',
        description: '23,88.44',
        image: 'https://miro.medium.com/max/1000/1*RK1R9BV_5-_2yXLWjuP-qw.png',
        vol: 'Vol 423.21K',
        add: '$ 23.61',
        min : '+6.87%',
        col: 'add'
    },
    {
        id: '58644a0f-3da1-471f-bd96-145573459d72',
        title: 'EOS',
        description: '1,038.554',
        image: 'https://seeklogo.com/images/E/eos-logo-9E0494F783-seeklogo.com.png',
        vol: 'Vol 532.735M',
        add: '$ 1.039',
        min : '-0.47%',
        col: 'min'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'NEO',
        description: '10,2109.4',
        image: 'https://cryptologos.cc/logos/neo-neo-logo.png',
        vol: 'Vol 883.993K',
        add: '$ 10.2',
        min : '+3.57%',
        col: 'add'
    },
    {
        id: '58644a03-3da1-471f-bd96-145573459d72',
        title: 'DASH',
        description: '50,689',
        image: 'https://cryptologos.cc/logos/dash-dash-logo.png',
        vol: 'Vol 532.735M',
        add: '$ 50.655',
        min : '+2.58%',
        col: 'add'
    },
    {
        id: '58694a4f-3da1-471f-bd96-145571e29d72',
        title: 'ZEC',
        description: '66,723.00',
        image: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Zcash-ZEC-icon.png',
        vol: 'Vol 17.4789K',
        add: '$ 66.65',
        min : '+3.57%',
        col: 'add'
    }
];

const SPACING = 18;
const AVATAR_SIZE = 55;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export function HomeScreen({navigation}) {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [searchText, setSearchText] = React.useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson);
                setMasterDataSource(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const getAccountInfo = () => {
        fetch('https://api.shasta.trongrid.io/v1/accounts/41e9d79cc47518930bc322d9bf7cddd260a0260a8d', {
            method: 'GET',
            headers: {Accept: 'application/json'},
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    const getTransactionInfo = () => {
        fetch('https://api.shasta.trongrid.io/v1/accounts/address/transactions', {
            method: 'GET',
            headers: {Accept: 'application/json'},
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{width: 100, height: 100}}>
                        <TouchableOpacity
                            style={[styles.menu, {top: 65}]}
                            onPress={() => {
                                navigation.navigate("Menu")
                            }}
                        >
                            <Ionicons
                                name="menu-outline"
                                color='#000'
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                    <Image
                        style={[styles.imageLogo, {right: 100}]}
                        source={require('../assets/logoSmall.png')}></Image>
                    <View style={{left: 30, top: '18%'}}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("Search")
                        }}>
                            <Ionicons
                                name="search-outline"
                                color='#000'
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{left: 50, top: '18%'}}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("ScanItem")
                            }}
                        >
                            <Ionicons
                                name="scan-outline"
                                color='#000'
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/*
                <SafeAreaView style={styles.container}>
                    <Text category='s1' style={{fontSize: 18, top: 25, right: 130, color: '#000', paddingBottom: 35, fontWeight: '500'}}>Markets</Text>
                    <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </SafeAreaView>
                    */}
                <Text category='s1' style={{fontSize: 18, top: 35, right: 130}}>Markets</Text>
                <Animated.FlatList
                    scrollEnabled={true}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                        { useNativeDriver: true }
                    )}
                    bounces={false}
                    style={styles.flatList}
                    data={DATA}
                    contentContainerStyle={{
                        padding: SPACING,
                        paddingTop: StatusBar.currentHeight || 42
                    }}
                    renderItem={({ item, index }) => {
                        return <View style={[styles.latestItem]}>
                            <View style={{width: 50, height: 50, backgroundColor: '#F6F6F6', borderRadius: 15, right: 10, bottom: 8}}>
                                <Image style={[styles.tronLogo]} source={{uri: item.image}}></Image>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flexDirection: 'column', top: 5, left: 5}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.description5}> /USDT</Text>
                                        {item.col === 'add' ?
                                            <View style={{width: 60, height: 20, backgroundColor: '#EFFFF9', borderRadius: 20, right: 0, alignItems: 'center', left: 10, bottom: 7}}>
                                                <Text style={styles.description4}>{item.min}</Text>
                                            </View>
                                            :
                                            <View style={{width: 60, height: 20, backgroundColor: '#FCF1F1', borderRadius: 20, right: 0, alignItems: 'center', left: 10, bottom: 7}}>
                                                <Text style={styles.description6}>{item.min}</Text>
                                            </View>
                                        }
                                    </View>
                                    <Text style={styles.description}>{item.vol}</Text>
                                </View>
                                <View style={{flexDirection: 'column', alignItems: 'flex-end', right: -90 }}>
                                    <Text style={styles.description2}>{item.description}</Text>
                                    <Text style={styles.description3}>{item.add}</Text>
                                </View>
                            </View>
                        </View>
                    }}
                    keyExtractor={item => item.id.toString()}
                />
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
        top: '4%',
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center'
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
        bottom: 7
    },
    description: {
        color: '#969AA0',
        fontSize: 13,
        top: -2
    },
    description2: {
        color: '#464646',
        fontSize: 16,
        top: -2,
        textAlign: 'right',
        right: 50
    },
    description3: {
        color: '#969AA0',
        fontSize: 13,
        top:0,
        textAlign: 'right',
        right: 50
    },
    description5: {
        color: '#969AA0',
        fontSize: 12,
        bottom: 5,
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
    image: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: 10,
        marginRight: SPACING / 2
    },
    heightText: {
        marginTop: 15,
        fontSize: 22,
        fontWeight: "700",
    },
    flatList: {
        height: 20,
        top: 10
    },

    latestItem: {
        flexDirection: 'row',
        width: 345,
        height: 70,
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



