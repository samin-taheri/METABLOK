import React, {useEffect, useState} from 'react';
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity,
    StatusBar, FlatList, Share, Animated
} from 'react-native';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Ionicons} from "@expo/vector-icons";
import * as Clipboard from 'expo-clipboard';
import {Searchbar} from "react-native-paper";
import {LinearGradient} from "expo-linear-gradient";

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'TRX',
        description: '0.068452',
        image: 'https://cryptologos.cc/logos/tron-trx-logo.png',
        to: 'to: 2egrr3',
        from: 'from: e9okmgl',
        add: '≈ $0.4343',
        min : 'Error',
        col: 'min'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'BTC',
        description: '21,901.26',
        image: 'https://bitcoin.org/img/icons/opengraph.png?1657703267',
        to: 'to: 2egrr3',
        from: 'from: e9okmgl',
        add: '≈ $0.4343',
        min : 'Successful',
        col: 'add'
    },
    {
        id: 'bd7acbe3-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'TRX',
        description: '0.068452',
        image: 'https://cryptologos.cc/logos/tron-trx-logo.png',
        to: 'to: 2egrr3',
        from: 'from: e9okmgl',
        add: '≈ $0.4343',
        min : 'Error',
        col: 'min'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145573459d72',
        title: 'ETH',
        description: '1,534.054',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png',
        to: 'to: 2egrr3',
        from: 'from: e9okmgl',
        add: '≈ $0.4343',
        min : 'Successful',
        col: 'add'
    }
];

const SPACING = 18;
const AVATAR_SIZE = 55;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export function WalletScreen({navigation}) {
    const scrollY = React.useRef(new Animated.Value(0)).current;
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const email = 'hello@example.com'
    const copyIt = ()=> Clipboard.setString(email)
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(DATA);
    const [masterDataSource, setMasterDataSource] = useState([]);

    const searchFilterFunction = (text) => {
        if (text) {
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.title
                        ? item.title.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
            setMasterDataSource(DATA);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };
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
                        style={{top: 65, right: 96, width: 100}}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='#000'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text category='s1' style={{fontSize: 18, top: 65, right: 50}}>Wallet</Text>
                </View>
                <View>
                    <Image
                        style={styles.image}
                        source={require('../assets/home.png')}></Image>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column'}}>
                            <Text category='s1' style={{fontSize: 18, bottom: 198, left: 25, color: '#fff'}}>Total
                                Balance</Text>
                            <Text category='s1' style={{fontSize: 12, bottom: 183, left: 26, color: '#fff'}}>Cash
                                Available</Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                        <Text category='s1' style={{fontSize: 24, bottom: 195, left: 80, color: '#fff'}}>0.435668</Text>
                        <Text category='s1' style={{fontSize: 16, bottom: 190, left: 80, color: '#fff'}}>≈ 169.185 TRY</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                            <TouchableOpacity onPress={() => {
                                navigation.navigate("WalletDeposit")
                            }}>
                                <LinearGradient
                                    colors={['#6600FD', '#CB60CD']}
                                    start={{x: 0, y: 0.5}}
                                    end={{x:1, y: 0.5}}
                                    style={styles.button2}
                                >
                                <Text style={[styles.buttonLabel]}>Deposit</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate("SendCoin")
                        }}>
                            <LinearGradient
                                colors={['#CB60CD', '#54CFE0']}
                                start={{x: 0, y: 0.5}}
                                end={{x: 1, y: 0.5}}
                                style={styles.button2}
                            >
                            <Text style={[styles.buttonLabel]}>Withdraw</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.layout}>
                    <Searchbar
                        style={{ width: 160,
                            bottom: -22,
                            height: 33,
                            left: 200,
                            borderRadius: 15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 1,
                            },
                            shadowOpacity: 0.2,
                            shadowRadius: 3.27,
                            elevation: 10,}}
                        onChangeText={(text) => searchFilterFunction(text)}
                        value={search}
                        underlineColorAndroid="transparent"
                        placeholder="Search"
                    />
                    <Animated.FlatList
                        scrollEnabled={true}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                            { useNativeDriver: true }
                        )}
                        bounces={false}
                        style={styles.flatList}
                        data={filteredDataSource}
                        contentContainerStyle={{
                            padding: SPACING,
                            paddingTop: StatusBar.currentHeight || 42
                        }}
                        renderItem={({ item, index }) => {
                            return <View style={[styles.latestItem]}>
                                <View style={{width: 50, height: 50, backgroundColor: '#F6F6F6', borderRadius: 15, right: 10, bottom: 10}}>
                                    <Image style={[styles.tronLogo]} source={{uri: item.image}}></Image>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flexDirection: 'column', top: 5, left: 5}}>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={styles.title}>{item.title}</Text>
                                            <Text style={styles.description5}> /USDT</Text>
                                        </View>
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
        top: '7%',
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    layout: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        bottom: 110,
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
    card: {
        width: 327,
        height: 63,
        borderRadius: 20,
        backgroundColor: '#ECE2FB',
        top: '12%',
    },
    image: {
        bottom: '2%',
        width: 327,
        height: 327,
        resizeMode: 'contain',
        left: 3
    },
    image2: {
        top: '6%',
        width: 200,
        height: 200,
        resizeMode: 'contain',
        left: '22%'
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        bottom: 150,
        alignSelf: 'center',
        alignContent: 'center',
        left: 1
    },
    button: {
        paddingHorizontal: 10,
        paddingVertical:7,
        borderRadius: 10,
        backgroundColor: "#E3D1FE",
        alignSelf: "center",
        alignItems: 'center',
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "26.5%",
        textAlign: "center",
    },
    button3: {
        paddingHorizontal: 10,
        paddingVertical:7,
        borderRadius: 10,
        backgroundColor: "#ccc",
        alignSelf: "center",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "40%",
        textAlign: "center",
        height: 35,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    button2: {
        paddingHorizontal: 10,
        paddingVertical:7,
        borderRadius: 10,
        backgroundColor: "#6600FD",
        alignSelf: "center",
        alignItems: 'center',
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: 158,
        textAlign: "center",
        height: 30
    },
    selected: {
        backgroundColor: "#6600FD",
        borderWidth: 0,
    },
    buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "#fff",
        textAlign: 'center',
    },
    selectedLabel: {
        color: "white",
    },
    label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
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
        right: -20
    },
    description3: {
        color: '#969AA0',
        fontSize: 13,
        top:0,
        textAlign: 'right',
        right: -20
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
    flatList: {
        height: 20,
        top: 0
    },

    latestItem: {
        flexDirection: 'row',
        width: 345,
        height: 65,
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



