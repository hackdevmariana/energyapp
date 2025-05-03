import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const CircleIcon = ({ name, focused, size, color }) => {
  return (
    <View
      style={[
        styles.circle,
        { backgroundColor: focused ? "#463beb" : "#0c0918" },
      ]}
    >
      <Icon name={name} size={size} color={color} />
    </View>
  );
};

const createScreen = (title) => () =>
  (
    <View style={styles.screen}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const icons = {
              Energy: "bolt",
              Market: "store",
              Home: "home",
              Balance: "bitcoin",
              Cooperatives: "users",
            };
            return (
              <CircleIcon
                name={icons[route.name]}
                focused={focused}
                size={24}
                color="#fafafa"
              />
            );
          },
          tabBarStyle: {
            backgroundColor: "#0c0918",
            paddingBottom: 10,
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: "#eda71a",
          tabBarInactiveTintColor: "#fafafa",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Energy" component={createScreen("Energy ⚡")} />
        <Tab.Screen name="Market" component={createScreen("Market 🛍️")} />
        <Tab.Screen name="Home" component={createScreen("Home 🏠")} />
        <Tab.Screen name="Balance" component={createScreen("Balance 💰")} />
        <Tab.Screen
          name="Cooperatives"
          component={createScreen("Cooperatives 🤝")}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold", color: "#fafafa" },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
