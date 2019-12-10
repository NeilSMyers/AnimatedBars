import React from "react"
import { View, Text, StyleSheet } from "react-native"

const DayCapsule = props => {
  return (
    <View style={styles.container}>
      <View style={styles.outerCapsule}>
        <View style={{ ...styles.innerCapsule, height: `${props.height}%` }} />
      </View>
      <Text>{props.label}</Text>
    </View>
  )
}
//#67c99a
const styles = StyleSheet.create({
  container: {
    margin: 6,
    alignItems: "center"
  },
  outerCapsule: {
    backgroundColor: "#4b9471",
    height: 200,
    width: 30,
    borderRadius: 30,
    justifyContent: "flex-end",
    marginBottom: 8
  },
  innerCapsule: {
    backgroundColor: "white",
    borderRadius: 30
  }
})

export default DayCapsule
