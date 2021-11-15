import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, Button } from "react-native";
import Carousel from "react-native-snap-carousel";
import { signOut } from 'firebase/auth';

import { auth } from '../config';

const { width } = Dimensions.get("window");

const workouts = [
  {
    id: 1,
    title: "Monday Workout",
    type: "Full Body Workout",
  },
  {
    id: 2,
    title: "Leg Day",
    type: "Leg Workout",
  },
  {
    id: 3,
    title: "Back Day",
    type: "Back Workout",
  },
];

const Item = ({ title, type }) => (
  <View style={styles.view}>
    <View style={{ padding: 16 }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={{ marginTop: 8 }}>{type}</Text>
    </View>
  </View>
);

export const Home = () => {
  const renderItem = ({ item }) => <Item title={item.title} type={item.type} />;
  const [active, setActive] = useState(0);

  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  return (
    <View style={{ padding: 16, backgroundColor: "#fff" }}>
      <View>
        <TextInput style={styles.input} placeholder="Search for workout" />
      </View>

      <View>
        <View style={{ marginTop: 16, marginLeft: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: "800", color: "grey" }}>
            Top Workouts 💪
          </Text>
          <Carousel
            ref={(c) => {
              _carousel = c;
            }}
            data={workouts}
            sliderWidth={400}
            layout={"stack"}
            itemWidth={500}
            renderItem={renderItem}
            onSnapToItem={(index) => setActive(index)}
            hasParallaxImages={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 24,
    color: "grey",
    // borderColor: "#ccc",
    backgroundColor: "#E5E5E5",
  },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 0,
    marginHorizontal: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  view: {
    marginTop: 16,
    backgroundColor: "#00d1ff",
    width: width - 75,
    margin: 5,
    height: 150,
    borderRadius: 24,
  },
});
