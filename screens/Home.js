import React, { useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import {
  Container,
  Fab,
  Heading,
  HStack,
  Icon,
  VStack,
  Divider,
  Box,
  Text,
  Badge,
  Button
} from "native-base";
import { AntDesign } from "@expo/vector-icons";

import { Images, Colors, auth } from "../config";

const { width } = Dimensions.get("window");

const workouts = [
  {
    id: 1,
    title: "Monday Workout",
    type: "Full Body Workout",
    sets: 5,
    reps: 8,
  },
  {
    id: 2,
    title: "Leg Day",
    type: "Leg Workout",
    sets: 5,
    reps: 8,
  },
  {
    id: 3,
    title: "Back Day",
    type: "Back Workout",
    sets: 5,
    reps: 8,
  },
];

export const Home = () => {
  return (
    <View>
      <Container padding="8">
        <Container>
          <HStack space="32">
            <Heading fontSize="32">Good Afternoon Jack</Heading>
            <Fab
              position="absolute"
              renderInPortal={false}
              size="sm"
              icon={
                <Icon color="white" as={<AntDesign name="plus" />} size="sm" />
              }
              backgroundColor={Colors.green}
            />
          </HStack>
        </Container>
        <Container marginTop="4">
          <Heading>Favourite workouts</Heading>
          <VStack marginTop="2">
            {workouts.map((workout) => (
              <Box
                rounded="lg"
                overflow="hidden"
                borderColor="coolGray.200"
                borderWidth="1"
                minWidth="350"
                justifyContent="center"
                marginTop="4"
              >

                <HStack>
                  <Text fontSize="xl" p="4">
                    {workout.title}
                  </Text>
                </HStack >
                <HStack ml='4' pb='4'space='4' >
                  <Button rounded='2xl' colorScheme="success" flexDirection='row' size="md">{workout.sets + ' sets'}</Button>
                  <Button rounded='2xl' colorScheme="success" flexDirection='row' size="md">{workout.reps + ' reps'}</Button>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Container>
      </Container>
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
