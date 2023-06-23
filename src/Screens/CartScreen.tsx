import React from "react";
import { Box, Center, ScrollView, Text, HStack, Button } from "native-base";
import Colors from "../color";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";

const CartScreen = () => {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* Header */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* If Cart is empty */}
      {/* <CartEmpty /> */}
      {/* Cart Items */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems />
        {/* Total */}
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center">
            <Text>Total</Text>
            <Button
              px={10}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white, fontWeight: "semibold" }}
              _pressed={{ bg: Colors.main }}>
              $356
            </Button>
          </HStack>
        </Center>
        {/* Checkout */}
        <Center px={5}>
          <Button
            bg={Colors.black}
            color={Colors.white}
            rounded={50}
            w="full"
            mt={10}>
            CHECKOUT
          </Button>
        </Center>
      </ScrollView>
    </Box>
  );
};

export default CartScreen;
