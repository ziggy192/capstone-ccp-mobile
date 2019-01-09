import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import ParallaxList from "../../components/ParallaxList";

import colors from "../../config/colors";
import fontSize from "../../config/fontSize";

class Discover extends Component {
  renderItem = () => {
    return (
      <View
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          height: 500
        }}
      >
        <Text>Hello World</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <ParallaxList
          title={"Discover"}
          hasLeft={false}
          hasRight={true}
          hasFavoraite={false}
          scrollElement={<Animated.ScrollView />}
          renderScrollItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Discover;
