import React from "react";
import { Center, Text } from "native-base";
interface MessageProps {
  bg: string;
  color: string;
  children: React.ReactNode;
  size: number;
  bold?: any;
}
const Message = ({ bg, color, children, size, bold }: MessageProps) => {
  return (
    <Center bg={bg} p={4} rounded={5}>
      <Text color={color} fontSize={size} bold={bold}>
        {children}
      </Text>
    </Center>
  );
};

export default Message;
