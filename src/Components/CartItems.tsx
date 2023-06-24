import React from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { SwipeListView } from "react-native-swipe-list-view";
import products from "../data/Products";
import Colors from "../color";
import { FontAwesome } from "@expo/vector-icons";
interface Product {
  name: string;
  price: number;
  image: string;
}
const Swiper: React.FC = () => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products.slice(0, 2)}
    // data={products}
    renderHiddenItem={renderHiddenItems}
    renderItem={renderItems}
    showsVerticalScrollIndicator={false}
  />
);
const renderItems: SwipeListView["props"]["renderItem"] = ({ item }) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={Colors.white}
        shadow={1}
        rounded={10}
        overflow="hidden">
        <Center w="25%" bg={Colors.deepGray}>
          <Image
            source={{ uri: item.image }}
            alt={item.name}
            w="full"
            h={24}
            resizeMode="contain"
          />
        </Center>
        <VStack w="60%" px={2} space={3}>
          <Text isTruncated color={Colors.black} bold fontSize={12}>
            {item.name}
          </Text>
          <Text bold color={Colors.lightBlack}>
            ${item.price}
          </Text>
        </VStack>
        <Center>
          <Button
            bg={Colors.main}
            _pressed={{ bg: Colors.main }}
            _text={{ color: Colors.white }}>
            5
          </Button>
        </Center>
      </HStack>
    </Box>
  </Pressable>
);
const renderHiddenItems: SwipeListView["props"]["renderHiddenItem"] = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg={Colors.red}>
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>
);
const CartItems: React.FC = () => {
  return (
    <Box>
      <Swiper />
    </Box>
  );
};
export default CartItems;
