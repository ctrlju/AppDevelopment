import { Alert } from "react-native";

import { AlertProps } from "./alert";

export function CreateAlert({ title, description, buttonText }: AlertProps) {
  Alert.alert(title, description, [
    { text: buttonText, onPress: () => console.log("Back to login Pressed") },
  ]);
}
