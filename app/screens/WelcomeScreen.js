import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>مرحبا بك في تطبيق مستودعنا</Text>
      <Image style={styles.image} source={require("../assets/imgs/test.png")} />
      <View style={styles.btn}>
        <Text style={styles.btn_text}>عرض المستودعات المتوفرة</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btn_text}>عن التطبيق</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: Dimensions.get("screen").width / 2,
    height: Dimensions.get("screen").width / 2,
  },
  text: {},
  btn: {
    backgroundColor: "#ff3c00",
    width: 300,
    height: 134,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_text: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
});
export default WelcomeScreen;
