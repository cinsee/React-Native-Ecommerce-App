import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { Button } from "native-base";
interface ButtonProps {
  mt: string;
  bg: string;
  color: string;
  children: ReactNode;
  onPress: () => void;
}
const Buttone = ({ mt, bg, color, children, onPress }: ButtonProps) => {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{ color: color, fontWeight: "bold" }}
      _pressed={{ bg: bg }}
      onPress={onPress}>
      {children}
    </Button>
  );
};
export default Buttone;
