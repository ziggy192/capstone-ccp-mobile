import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Equipment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.navigate("Requests")}>
          I wan to selllllllll!{" "}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Equipment;
