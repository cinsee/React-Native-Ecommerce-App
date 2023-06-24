import React from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
} from "native-base";
import Colors from "../color";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
interface Props {
  navigation: any;
}
const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center">
        <Heading>SIGN UP</Heading>
        <VStack space={6} pt="6">
          {/* User */}
          <Input
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="John Doe"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.main}
          />
          {/* Email */}
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            type="text"
            color={Colors.main}
            borderBottomColor={Colors.main}
          />
          {/* Password */}
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.main} />
            }
            variant="underlined"
            placeholder="***************"
            w="70%"
            pl={2}
            type="password"
            color={Colors.main}
            borderBottomColor={Colors.main}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={() => navigation.navigate("Bottom")}>
          SIGN UP
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.black}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
};
export default RegisterScreen;
