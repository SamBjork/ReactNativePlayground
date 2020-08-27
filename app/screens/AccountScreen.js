import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Icon from '../components/Icon';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import AccountScreenListItem from '../components/AccountScreenListItem';

import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]
export default function AccountScreen() {

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Sam Bjork"
                    subTitle="awesome@gmail.com"
                    image={require("../assets/StiligKevbo.jpg")}
                />

            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor={colors.mustard} />
                } />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
})

