import React, { useState } from "react";
import { Button, Center, HStack, Modal, Text, VStack } from "native-base";
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

const PlaceOrderModel = () => {
  const [showModel, setShowModel] = useState<boolean>(false);
  const navigation = useNavigation();
  return (
    <Center>
      <Buttone
        onPress={() => setShowModel(true)}
        bg={Colors.black}
        color={Colors.white}
        mt={5}>
        SHOW TOTAL
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
            <Button
              flex={1}
              bg={Colors.main}
              h={45}
              _text={{ color: Colors.white }}
              onPress={() => {
                setShowModel(false);
                navigation.navigate("order");
              }}
              _pressed={{ bg: Colors.main }}>
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;
