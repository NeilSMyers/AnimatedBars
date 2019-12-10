import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS,
  Platform,
  Animated
} from "react-native"

import SegmentedControlTab from "react-native-segmented-control-tab"

import DayCapsule from "./DayCapsule"

export default function App() {
  const [timeOfDay, setTimeOfDay] = useState(0)

  const dataPoints = [
    [20, 40, 60, 80, 100, 32, 76],
    [60, 80, 12, 34, 76, 89, 54],
    [90, 100, 76, 34, 87, 54, 23]
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Big Happy</Text>
      {Platform.OS === "ios" ? (
        <SegmentedControlIOS
          values={["Morning", "Afternoon", "Evening"]}
          selectedIndex={timeOfDay}
          style={styles.iosPicker}
          onChange={event => {
            setTimeOfDay(event.nativeEvent.selectedSegmentIndex)
          }}
        />
      ) : (
        <SegmentedControlTab
          values={["Morning", "Afternoon", "Evening"]}
          selectedIndex={timeOfDay}
          tabsContainerStyle={{ width: "80%", marginBottom: 20 }}
          tabStyle={{
            borderWidth: 0,
            backgroundColor: "#59bd8e"
          }}
          tabTextStyle={{ color: "black" }}
          activeTabStyle={{ backgroundColor: "white" }}
          activeTabTextStyle={{ color: "black" }}
          onTabPress={i => setTimeOfDay(i)}
        />
      )}

      <Animated.View style={styles.capsuleWrapper}>
        <DayCapsule height={dataPoints[timeOfDay][0]} label="Su" />
        <DayCapsule height={dataPoints[timeOfDay][1]} label="M" />
        <DayCapsule height={dataPoints[timeOfDay][2]} label="Tu" />
        <DayCapsule height={dataPoints[timeOfDay][3]} label="W" />
        <DayCapsule height={dataPoints[timeOfDay][4]} label="Th" />
        <DayCapsule height={dataPoints[timeOfDay][5]} label="F" />
        <DayCapsule height={dataPoints[timeOfDay][6]} label="Sa" />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#67c99a",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20
  },
  iosPicker: {
    width: "80%",
    marginBottom: 20
  },
  capsuleWrapper: {
    flexDirection: "row"
  }
})
