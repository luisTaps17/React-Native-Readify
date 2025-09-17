import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {

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