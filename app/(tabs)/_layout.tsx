import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  type TabProps = {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
  };
  const IconTab = ({ name, color }: TabProps) => (
    <FontAwesome size={28} name={name} color={color} />
  );

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "blue",
        tabBarActiveBackgroundColor: "grey",
        tabBarIcon: ({ color }) => {
          let iconName: React.ComponentProps<typeof FontAwesome>["name"];
          switch (route.name) {
            case "index":
              iconName = "home";
              break;
            case "moreInfo":
              iconName = "info";
              break;
            case "pronostico":
              iconName = "cog";
              break;
            case "[user]":
              iconName = "user";
              break;
            default:
              iconName = "circle";
              break;
          }
          return <IconTab name={iconName} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          //href: null,
        }}
      />
      <Tabs.Screen
        name="moreInfo"
        options={{
          title: "Detalless",
        }}
      />
      <Tabs.Screen
        name="pronostico"
        options={{
          title: "Pronostico",
        }}
      />
      <Tabs.Screen
        name="[user]"
        options={{
          title: "User",
          href: "/juan Perez",
        }}
      />
    </Tabs>
  );
}
