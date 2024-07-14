import React from "react";
import { SafeAreaView, Text, Pressable, View, TextInput } from "react-native";
import { router } from "expo-router";

import GoBack from "@/src/assets/images/back-arrow.svg";
import PasswordLock from "@/src/assets/images/password-lock.svg";
import GoogleLogin from "@/src/assets/images/google.svg";
import AppleLogin from "@/src/assets/images/apple.svg";
import FacebookLogin from "@/src/assets/images/facebook.svg";

import styles from "./styles";
import { CreateAlert } from "@/src/components/alert";

export default function Login() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contentContainer}>
        <View>
          <View>
            <Pressable
              onPress={() => router.back()}
              style={styles.backArrowContainer}
            >
              <GoBack width={23} />
            </Pressable>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Let's sign you in.</Text>
            <Text style={styles.subtitle}>Welcome back</Text>
            <Text style={styles.subtitle}>You've been missed!</Text>
          </View>
          <View style={styles.textInputContainer}>
            <PasswordLock width={15} style={styles.passwordIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email, phone or username"
              placeholderTextColor="#737b89"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#737b89"
              secureTextEntry
            />
          </View>
          <View style={styles.loginMethodsContainer}>
            <View style={styles.loginMethodsDivider} />
            <Text style={styles.loginMethodsText}>OR</Text>
            <View style={styles.loginMethodsDivider} />
          </View>
          <View style={styles.loginIconsContainer}>
            <GoogleLogin
              width={23}
              height={23}
              onPress={() =>
                CreateAlert({
                  title: "Login with Google",
                  description: "Login with Google was pressed!",
                  buttonText: "OK",
                })
              }
            />
            <FacebookLogin
              width={23}
              height={23}
              onPress={() =>
                CreateAlert({
                  title: "Login with Facebook",
                  description: "Login with Facebook was pressed!",
                  buttonText: "OK",
                })
              }
            />
            <AppleLogin
              width={23}
              height={23}
              onPress={() =>
                CreateAlert({
                  title: "Login with Apple",
                  description: "Login with Apple was pressed!",
                  buttonText: "OK",
                })
              }
            />
          </View>
        </View>
        <View style={styles.signInOrRegisterContainer}>
          <Text style={styles.noAccountText}>
            Don't have an account?{" "}
            <Text
              style={styles.registerText}
              onPress={() =>
                CreateAlert({
                  title: "Register",
                  description: "Register was pressed!",
                  buttonText: "OK",
                })
              }
            >
              Register
            </Text>
          </Text>
          <Pressable
            style={styles.signInButtonContainer}
            onPress={() =>
              CreateAlert({
                title: "Sign In",
                description: "Sign in button was pressed!",
                buttonText: "OK",
              })
            }
          >
            <Text style={styles.signInButtonText}>Sign In</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}
