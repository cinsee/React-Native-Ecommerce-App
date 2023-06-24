import React from "react";
import { Box, FormControl, Input, ScrollView, Text, VStack } from "native-base";
import Colors from "../color";
import Buttone from "../Components/Buttone";
interface InputsProps {
  label: string;
  type: string;
}
const Inputs: InputsProps[] = [
  {
    label: "USERNAME",
    type: "text",
  },
  {
    label: "EMAIL",
    type: "email",
  },
  {
    label: "PASSWORD",
    type: "password",
  },
  {
    label: "CONFIRM PASSWORD",
    type: "password",
  },
];

const Profile = () => {
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{ fontSize: "12px", fontWeight: "bold" }}>
                {i.label}
              </FormControl.Label>
              <Input
                borderColor={Colors.main}
                borderWidth={0.2}
                bg={Colors.subGreen}
                py={4}
                type={i.type}
                color={Colors.main}
                fontSize={15}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 1,
                }}
              />
            </FormControl>
          ))}
          <Buttone bg={Colors.main} color={Colors.white}>
            UPDATE PROFILE
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Profile;
