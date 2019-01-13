import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class EquipmentDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text> {id} </Text>
        <Text onPress={() => this.props.navigation.goBack()}>Go back!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default EquipmentDetail;
