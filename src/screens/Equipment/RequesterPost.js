import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class RequesterPost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={() => this.props.navigation.goBack()}>
          I don't want to sale
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

export default RequesterPost;
