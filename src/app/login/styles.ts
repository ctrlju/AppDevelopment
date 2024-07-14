import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  backArrowContainer: {
    width: 25,
    marginBottom: 30,
    borderRadius: 100,
    paddingTop: Platform.OS === "android" ? 30 : 0,
  },
  textContainer: {
    gap: 15,
    marginBottom: 60,
    paddingVertical: 0,
  },
  title: {
    fontFamily: "SFBold",
    fontSize: 40,
    lineHeight: 40,
    color: "#0F0F0F"
  },
  subtitle: {
    fontFamily: "SFLight",
    fontSize: 30,
    lineHeight: 30,
    color: "#0F0F0F"
  },
  textInputContainer: {
    gap: 15,
    marginBottom: 30,
  },
  passwordIcon: {
    position: "absolute",
    right: 15,
    top: 44,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E9EB",
    borderRadius: 15,
    height: 50,
    paddingHorizontal: 15,
    fontFamily: "SFRegular",
    letterSpacing: 0.2,
  },
  loginMethodsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  loginMethodsDivider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E8E9EB",
  },
  loginMethodsText: {
    width: 40,
    textAlign: "center",
    color: "#D6D7DC",
    fontSize: 12,
  },
  loginIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingVertical: 30,
  },
  signInOrRegisterContainer: {
    alignItems: "center",
    gap: 20,
    width: "100%",
  },
  noAccountText: {
    fontFamily: "SFRegular",
    letterSpacing: 0.2,
    color: "#858B98",
  },
  registerText: {
    color: "#0F0F0F",
    fontFamily: "SFSemibold",
  },
  signInButtonContainer: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 15,
    width: "100%",
  },
  signInButtonText: {
    color: "#FFFFFF",
    fontFamily: "SFBold",
    letterSpacing: 0.2,
  },
});

export default styles;
