import React from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Input,
  ScrollView,
  Text,
  VStack,
  Image,
  Spacer,
} from "native-base";
import Colors from "../color";
import Buttone from "../Components/Buttone";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface PaymentProps {
  image: any;
  alt: string;
  icon: string;
}

const PaymentMethods: PaymentProps[] = [
  {
    image: require(`../../assets/paypal.png`),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require(`../../assets/paypal.png`),
    alt: "discover",
    icon: "discover",
  },
  {
    image: require(`../../assets/paypal.png`),
    alt: "googlepay",
    icon: "discover",
  },
];

const PaymentScreen = () => {
  const navigation = useNavigation();
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      {/* Header */}
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHODS
        </Text>
      </Center>
      {/* Selection */}
      {/* Input */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {PaymentMethods.map((i, index) => (
              <HStack
                key={index}
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                justifyContent="space-between"
                rounded={10}>
                <Box>
                  <Image
                    // source={require(`../../assets/${i.image}`)}
                    source={require(`../../assets/paypal.png`)}
                    alt={i.alt}
                    resizeMode="contain"
                    w={60}
                    h={50}
                  />
                </Box>
                <Spacer />
                {i.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.main}
                  />
                )}
              </HStack>
            ))}

            <Buttone
              onPress={() => navigation.navigate("Placeorder")}
              bg={Colors.main}
              color={Colors.white}
              mt={5}>
              CONTINUE
            </Buttone>
            <Text italic textAlign="center">
              Payment method is <Text bold> Paypal</Text> by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default PaymentScreen;
