import React from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableHighlight,
} from "react-native";


export default function AccountScreenListItem({
    title,
    subTitle,
    icon,
    onPress,
    renderRightActions,
}) {
    return (
        <TouchableHighlight underlayColor={"#f8f4f4"} onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={icon} />
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 35,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
    },
    subTitle: {
        fontSize: 16,
        color: "#6e6969",
    },
});
