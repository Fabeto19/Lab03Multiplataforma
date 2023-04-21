import React from "react";
import { StyleSheet, Text, View } from "react-native";


const Header = () => {
  return (
    <View style={styles.header}>
        <Text>Componente del Header</Text>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
    header:{
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee"
  }
});