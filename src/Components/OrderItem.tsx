import React from "react";
import {
  FlatList,
  Pressable,
  Text,
  Box,
  HStack,
  Center,
  Image,
  VStack,
  Button,
} from "native-base";
import products from "../data/Products";
import Colors from "../color";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
}

const OrderItem: React.FC = () => {
  const renderItem = ({ item }: { item: Product }) => (
    <Pressable>
      <Box mb={3}>
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
          <VStack w="60%" px={2}>
            <Text isTruncated color={Colors.black} bold fontSize={14}>
              {item.name}
            </Text>
            <Text color={Colors.lightBlack} bold mt={2}>
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

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
    />
  );
};

export default OrderItem;
