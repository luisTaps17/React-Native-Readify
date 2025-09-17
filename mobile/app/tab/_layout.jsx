import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useRouter, Link } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function TabsLayout() {
    const router = useRouter();
    const handleLogin = () => {
    router.replace("/");
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:'#00204A',
        headerShown: false, 
     }}
     >
      <Tabs.Screen
      name="library"
      options={{
        title: "Library",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name= "book-outline" size ={size} color={color}/>
        )
      }}
      />
      <Tabs.Screen
      name="browse"
      options={{
        title: "Browse",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name= "compass-outline" size ={size} color={color}/>
        )
      }}
      />
      <Tabs.Screen
      name="more"
      options={{
        title: "More",
        tabBarIcon: ({ color, size}) => (
          <Ionicons name= "list-outline" size ={size} color={color}/>
        )
      }}
      />
    </Tabs>   
  )
}