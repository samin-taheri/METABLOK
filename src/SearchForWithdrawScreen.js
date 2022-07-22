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


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'TRX',
        description: '0.068452',
        image: 'https://cryptologos.cc/logos/tron-trx-logo.png',
        to: '≈ $0.4343',
        from: 'from: e9okmgl',
        add: '0.068',
        min : 'Error',
        col: 'min'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'BTC',
        description: '21,901.26',
        image: 'https://bitcoin.org/img/icons/opengraph.png?1657703267',
        to: '≈ $0.4343',
        from: 'from: e9okmgl',
        add: '21,902.56',
        min : 'Successful',
        col: 'add'
    },
    {
        id: 'bd7acbe3-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'TRX',
        description: '0.068452',
        image: 'https://cryptologos.cc/logos/tron-trx-logo.png',
        to: '≈ $0.4343',
        from: 'from: e9okmgl',
        add: '0.068',
        min : 'Successful',
        col: 'add'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145573459d72',
        title: 'ETH',
        description: '1,534.054',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png',
        to: '≈ $0.4343',
        from: 'from: e9okmgl',
        add: '1,533,65',
        min : 'Successful',
        col: 'add'
    },
    {
        id: '58693a0f-3da1-471f-bd96-145573459d72',
        title: 'AVAX',
        description: '23,884.44',
        image: 'https://miro.medium.com/max/1000/1*RK1R9BV_5-_2yXLWjuP-qw.png',
        to: '≈ $0.4343',
        from: 'from: e9okmgl',
        add: '23.61',
        min : 'Successful',
        col: 'add'
    },
    {
        id: '58644a0f-3da1-471f-bd96-145573459d72',
        title: 'EOS',
        description: '1,038.554',
        image: 'https://seeklogo.com/images/E/eos-logo-9E0494F783-seeklogo.com.png',
        to: '≈ $0.4343',
        from: 'from: e9okmgl',
        add: '1.039',
        min : 'Error',
        col: 'min'
    },
    {
        id: '58693a04-3da1-471f-bd96-145573459d72',
        title: 'AVAX',
        description: '23,884.44',
        image: 'https://miro.medium.com/max/1000/1*RK1R9BV_5-_2yXLWjuP-qw.png',
        to: '≈ $0.4343',
        from: 'from: e9okmgl',
        add: '23.61',
        min : 'Successful',
        col: 'add'
    },
];

const SPACING = 18;
const AVATAR_SIZE = 55;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

export function SearchForWithdrawScreen({navigation}) {
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState(DATA);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const scrollY = React.useRef(new Animated.Value(0)).current;

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
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

    const ItemView = ({item}) => {
        return (
            // Flat List Item
            <Text
                style={styles.itemStyle}
                onPress={() => getItem(item)}>
                {item.id}
                {'.'}
                {item.title.toUpperCase()}
            </Text>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const getItem = (item) => {
        // Function for click on an item
        alert('Id : ' + item.id + ' Title : ' + item.title);
    };
    return (
        <ApplicationProvider {...eva} theme={eva.light}>
            <Layout style={{flex: 1, alignItems: 'center'}}>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        style={{top: 60, right: 120}}
                        onPress={()  => navigation.goBack()}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            color='#000'
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text category='s1' style={{fontSize: 18,top: 60, left: -10}}>Search</Text>
                </View>
                <View style={styles.container}>
                    <Searchbar
                        style={{ width: 345,
                            bottom: -20,
                            left: '2.2%',
                            borderRadius: 18,
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
                        placeholder="Search Here"
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
                                <View style={{width: 56, height: 56, backgroundColor: '#F6F6F6', borderRadius: 15, right: 10, bottom: 8}}>
                                    <Image style={[styles.tronLogo]} source={{uri: item.image}}></Image>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={{flexDirection: 'column', top: 5, left: 5}}>
                                        <View style={{flexDirection: 'row'}}>
                                            <Text style={styles.title}>{item.title}</Text>
                                            <Text style={styles.description5}> /USDT</Text>
                                        </View>
                                        {item.col === 'add' ?
                                            <View style={{width: 80, height: 20, backgroundColor: '#EFFFF9', borderRadius: 20, right: 0, alignItems: 'center', top: 1, justifyContent: 'flex-start'}}>
                                                <Text style={styles.description4}>{item.min}</Text>
                                            </View>
                                            :
                                            <View style={{width: 60, height: 20, backgroundColor: '#FCF1F1', borderRadius: 20, right: 0, alignItems: 'center', top: 1}}>
                                                <Text style={styles.description6}>{item.min}</Text>
                                            </View>
                                        }
                                    </View>
                                    <View style={{flexDirection: 'column', alignItems: 'flex-end', right: -90 }}>
                                        <TouchableOpacity onPress={() => {
                                            navigation.navigate("Details")
                                        }}>
                                            <Text style={styles.description2}>View Details →</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.description7}>{item.add}</Text>
                                        <Text style={styles.description3}>{item.to}</Text>
                                    </View>
                                </View>
                            </View>
                        }}
                        keyExtractor={(item, index) => index.toString()}
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
        fontSize: 15,
        top: -4
    },
    description2: {
        color: '#464646',
        fontSize: 14,
        top: -4,
        textAlign: 'right',
        right:20
    },
    description3: {
        color: '#969AA0',
        fontSize: 13,
        top: 0,
        textAlign: 'right',
        right: 20
    },
    description7: {
        color: '#969AA0',
        fontSize: 14,
        top: -1,
        textAlign: 'right',
        right: 20
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
        top: 1,
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
        height: 75,
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



