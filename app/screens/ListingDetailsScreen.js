import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

export default function ListingDetailsScreen({
  title,
  subTitle,
  name,
  listings,
}) {
  return (
    <View>
      <Image
        style={styles.itemImage}
        source={require("../assets/jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Something"
            subTitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
  itemImage: {
    width: "100%",
    height: 250,
  },
  sellerImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  title: {
    fontSize: 26,
    fontFamily: "Roboto",
    fontWeight: "500",
  },
  subTitle: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "700",
    marginVertical: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    alignSelf: "flex-end",
  },
});
