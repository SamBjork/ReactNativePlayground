import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import Screen from '../components/Screen';
import AppCard from '../components/AppCard';
import ListItemSeparator from "../components/ListItemSeparator"
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Red Jacket for sale',
        price: 100,
        imagePath: require("../assets/jacket.jpg"),
    },
    {
        id: 2,
        title: 'Couch for sale',
        price: 1000,
        imagePath: require("../assets/couch.jpg"),
    },
]

export default function ListingsScreen() {
    return (
        <Screen style={styles.container}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <AppCard
                        title={item.title}
                        subTitle={item.price + " kr"}
                        imagePath={item.imagePath}
                    />
                )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        padding: 20
    },
})
