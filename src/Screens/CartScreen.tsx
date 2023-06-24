import React from "react";
import { Box, Center, ScrollView, Text, HStack, Button } from "native-base";
import Colors from "../color";
import CartItems from "../Components/CartItems";
import { useNavigation } from "@react-navigation/native";
import Buttone from "../Components/Buttone";
const CartScreen: React.FC = () => {
  const navigation = useNavigation();
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
          <Buttone
            onPress={() => navigation.navigate("Shipping")}
            bg={Colors.black}
            color={Colors.white}
            rounded={50}
            w="full"
            mt={10}>
            CHECKOUT
          </Buttone>
        </Center>
      </ScrollView>
    </Box>
  );
};
export default CartScreen;

// import React from "react";
// import { Box, Center, Text, HStack, Button, FlatList } from "native-base";
// import Colors from "../color";
// import CartItems from "../Components/CartItems";
// import { useNavigation } from "@react-navigation/native";
// import Buttone from "../Components/Buttone";
// const CartScreen: React.FC = () => {
//   const navigation = useNavigation();
//   const renderItem = ({ item }) => <CartItems item={item} />;
//   const data = [
//     { id: 1, name: "Product 1", price: 100 },
//     { id: 2, name: "Product 2", price: 150 },
//     { id: 3, name: "Product 3", price: 106 },
//   ];
//   return (
//     <Box flex={1} safeAreaTop bg={Colors.subGreen}>
//       {/* Header */}
//       <Center w="full" py={5}>
//         <Text color={Colors.black} fontSize={20} bold>
//           Cart
//         </Text>
//       </Center>
//       {/* If Cart is empty */}
//       {/* <CartEmpty /> */}
//       {/* Cart Items */}
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id.toString()}
//         showsVerticalScrollIndicator={false}
//       />
//       {/* Total */}
//       <Center mt={5}>
//         <HStack
//           rounded={50}
//           justifyContent="space-between"
//           bg={Colors.white}
//           shadow={2}
//           w="90%"
//           pl={5}
//           h={45}
//           alignItems="center">
//           <Text>Total</Text>
//           <Button
//             px={10}
//             rounded={50}
//             bg={Colors.main}
//             _text={{ color: Colors.white, fontWeight: "semibold" }}
//             _pressed={{ bg: Colors.main }}>
//             $356
//           </Button>
//         </HStack>
//       </Center>
//       {/* Checkout */}
//       <Center px={5}>
//         <Buttone
//           onPress={() => navigation.navigate("Shipping")}
//           bg={Colors.black}
//           color={Colors.white}
//           rounded={50}
//           w="full"
//           mt={10}>
//           CHECKOUT
//         </Buttone>
//       </Center>
//     </Box>
//   );
// };
// export default CartScreen;
