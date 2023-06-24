import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";
interface ShippingProps {
  label: string;
  type: string;
}

const ShippingInputs: ShippingProps[] = [
  { label: "ENTER CITY", type: "text" },
  { label: "ENTER COUNTRY", type: "text" },
  { label: "ENTER ZIPCODE", type: "text" },
  { label: "ENTER ADDRESS", type: "text" },
];

const ShippingScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Input */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={5} mt={5}>
            {ShippingInputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{ fontSize: "12px", fontWeight: "bold" }}>
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  py={4}
                  type={i.type}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <Buttone
              onPress={() => navigation.navigate("Checkout")}
              bg={Colors.main}
              color={Colors.white}
              mt={5}>
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default ShippingScreen;
