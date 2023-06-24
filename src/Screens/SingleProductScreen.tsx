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
import { useNavigation } from "@react-navigation/native";
const SingleProductScreen: React.FC = ({ route }) => {
  const [value, setValue] = useState<number>(0);
  const navigation = useNavigation();
  const product = route.params;
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          // source={require("../../assets/images/3.png")}
          source={{ uri: product.image }}
          alt="Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
            <>
              <NumericInput
                value={value}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                maxValue={product.countInStock}
                minValue={0}
                borderColor={Colors.deepGray}
                rounded
                textColor={Colors.black}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
                onChange={setValue}
              />
            </>
          ) : (
            <>
              {/* <NumericInput
                value={value}
                totalWidth={140}
                totalHeight={30}
                iconSize={25}
                step={1}
                maxValue={product.countInStock}
                minValue={0}
                borderColor={Colors.deepGray}
                rounded
                textColor={Colors.black}
                iconStyle={{ color: Colors.white }}
                rightButtonBackgroundColor={Colors.main}
                leftButtonBackgroundColor={Colors.main}
              /> */}
              <Heading bold color={Colors.red} italic fontSize={19}>
                out of stock
              </Heading>
            </>
          )}
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            ${product.price.toFixed(2)}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <Buttone
          onPress={() => navigation.navigate("Cart")}
          bg={Colors.main}
          color={Colors.white}
          mt={10}>
          ADD TO CART
        </Buttone>
        {/* Review */}
        <Review />
      </ScrollView>
    </Box>
  );
};
export default SingleProductScreen;
