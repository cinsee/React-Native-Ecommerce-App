import React from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import products from "../data/Products";
import Colors from "../color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

const HomeProducts = () => {
  const navigation = useNavigation();

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}>
        {products.map((product) => (
          <Pressable
            onPress={() => navigation.navigate("Single", product)}
            key={product._id}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0.3}
            my={3}
            pb={2}
            overflow="hidden">
            <Image
              source={{ uri: product.image }}
              alt={product.name}
              w="full"
              h={24}
              resizeMode="contain"
            />
            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                ${product.price.toFixed(2)}
              </Heading>
              <Text fontSize={10} mt={1} isTruncated w="full">
                {product.name}
              </Text>
              {/* Rating */}
              <Rating value={product.rating} text={product.numReviews} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
};

export default HomeProducts;
