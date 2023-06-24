import React, { useState } from "react";
import {
  Button,
  Center,
  HStack,
  Image,
  Modal,
  Pressable,
  Text,
  VStack,
} from "native-base";
import Buttone from "./Buttone";
import Colors from "../color";
import { useNavigation } from "@react-navigation/native";
interface OrderInfoProps {
  title: string;
  price: number;
  color: string;
}

const OrderInfos: OrderInfoProps[] = [
  {
    title: "Products",
    price: 125.33,
    color: "black",
  },
  {
    title: "Shipping",
    price: 34.0,
    color: "black",
  },
  {
    title: "Tax",
    price: 23.33,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 182.66,
    color: "main",
  },
];

const OrderModel = () => {
  const [showModel, setShowModel] = useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.main}
        color={Colors.white}
        mt={5}>
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrderInfos.map((i, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between">
                  <Text fontWeight="medium">{i.title}</Text>
                  {i.color === "main" ? (
                    <Text color={Colors.main} bold>
                      ${i.price}
                    </Text>
                  ) : (
                    <Text color={Colors.black} bold>
                      ${i.price}
                    </Text>
                  )}
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              rounded={3}
              overflow="hidden"
              onPress={() => {
                setShowModel(false);
                navigation.navigate("Home");
              }}>
              <Image
                source={require("../../assets/paypal.png")}
                alt="paypal"
                resizeMode="contain"
                w="full"
                h={34}
              />
            </Pressable>
            <Button
              w="full"
              mt={2}
              bg={Colors.black}
              h={45}
              _text={{ color: Colors.white }}
              onPress={() => {
                setShowModel(false);
                navigation.navigate("Home");
              }}
              _pressed={{ bg: Colors.black }}>
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
