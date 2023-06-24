import React from "react";
import { Center, Heading, Image, Text } from "native-base";
import Colors from "../color";
import Tabs from "../Profile/Tabs";

const ProfileScreen = () => {
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/zpune/image/upload/v1645429478/random/user_u3itjd.png",
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Admin Doe
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>
      {/* Tabs */}
      <Tabs />
    </>
  );
};

export default ProfileScreen;
