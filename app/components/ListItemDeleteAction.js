import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ListItemDeleteAction() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="trash-can" size={35} color={"#fff"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff5252",
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
