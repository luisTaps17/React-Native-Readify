import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{color: "white"}}>Hello World!</Text>
      <Image source={require('./pic.png')} />
    </View>
  );
}
