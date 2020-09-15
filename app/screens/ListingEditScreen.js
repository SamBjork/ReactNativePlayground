import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppTextInput from "../components/AppTextInput";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function ListingsEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          name="title"
          placeholder="Title"
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          name="price"
          placeholder="Price"
        />
        <AppFormPicker />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
