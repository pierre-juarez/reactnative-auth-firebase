import { View, Button } from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

interface routerProps {
  navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: routerProps) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button
        title="Open details"
        onPress={() => navigation.navigate("details")}
      />
      <Button title="Logout" onPress={() => FIREBASE_AUTH.signOut()} />
    </View>
  );
};

export default List;
