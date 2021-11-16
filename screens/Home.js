import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import {
  Container,
  Fab,
  Heading,
  HStack,
  Icon,
  VStack,
  Box,
  Text,
  Button,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import Carousel from "react-native-snap-carousel";

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

function FavWorkouts({ item }, parallaxProps) {
  return (
    <Box
      rounded="xl"
      overflow="hidden"
      borderColor="coolGray.200"
      bg="white"
      borderWidth="1"
      minWidth={200}
      justifyContent="center"
      marginTop="4"
    >
      <Image
        source={require("../assets/gym-64.png")}
        fadeDuration={0}
        style={{ width: 50, height: 50, marginLeft: 8 }}
        position="absolute"
      />
      <HStack ml="12">
        <Text fontSize="xl" p="4">
          {item.title}
        </Text>
      </HStack>
      <HStack ml="16" pb="4" space="4">
        <Button
          rounded="2xl"
          colorScheme="success"
          flexDirection="row"
          size="md"
        >
          {item.sets + " sets"}
        </Button>
        <Button
          rounded="2xl"
          colorScheme="success"
          flexDirection="row"
          size="md"
        >
          {item.reps + " reps"}
        </Button>
      </HStack>
    </Box>
  );
}

export const Home = () => {
  const [index, setIndex] = useState();
  const isCarousel = React.useRef(null);

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
          <Heading fontSize="16">Here are your Favourite workouts 💪</Heading>
          <VStack marginTop="2">
            <Carousel
              ref={isCarousel}
              layout={"default"}
              useScrollView={true}
              sliderWidth={350}
              itemWidth={350}
              data={workouts}
              renderItem={FavWorkouts}
              onSnapToItem={(index) => setIndex(index)}
              inactiveSlideShift={0}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContentContainer}
              useScrollView={true}
            />
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
  slider: {
    overflow: "visible", // for custom animations
    
  },
  sliderContentContainer: {
    alignItems: 'baseline', // for custom animation
  },
});
