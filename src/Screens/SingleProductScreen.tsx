import React, { useState } from "react";
import {
  Box,
  HStack,
  Heading,
  Image,
  ScrollView,
  Spacer,
  Text,
} from "native-base";
import Colors from "../color";
import Rating from "../Components/Rating";
import NumericInput from "react-native-numeric-input";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";

const SingleProductScreen = () => {
  const [value, setValue] = useState<number>(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/images/3.png")}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          New Adidas shoes from Amazon shop
        </Heading>
        <Rating value={4} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            $400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          Before you throw dirty or stained canvas shoes in the washing machine,
          try hand cleaning them with a cloth or soft brush instead, advises
          Carolyn Forte, director of the Good Housekeeping Institute Cleaning
          Lab. The machine may damage your shoes if the cycle is too aggressive,
          and if you're dealing with leather, you need to avoid it at all costs.
        </Text>
        <Buttone bg={Colors.main} color={Colors.white} mt={10}>
          ADD TO CART
        </Buttone>
        {/* Review */}
        <Review />
      </ScrollView>
    </Box>
  );
};

export default SingleProductScreen;
