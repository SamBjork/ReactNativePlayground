import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  Button,
  Alert,
  StatusBar,
  Platform,
  Dimensions,
  TextInput,
  Switch,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Picker from "react-native-picker-select";

import AppText from "./app/components/AppText";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppCard from "./app/components/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import AccountScreen from "./app/screens/AccountScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const [category, setCategory] = useState(false);

  return <ListingEditScreen />;
}
