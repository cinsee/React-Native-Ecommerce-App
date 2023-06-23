import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FormControl,
  Heading,
  Select,
  Text,
  TextArea,
  VStack,
} from "native-base";
import Colors from "../color";
import Rating from "./Rating";
import Message from "./Message";
import Buttone from "./Buttone";

const Review = () => {
  const [ratings, setRatings] = useState<string>("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        Review
      </Heading>
      {/* If there is no review */}
      {/* <Message
        color={Colors.main}
        bg={Colors.deepGray}
        bold
        children={`NO REVIEW`}
      /> */}
      {/* Review */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          Jan 12 2022
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={12}
          children={`Before you throw dirty or stained canvas shoes in the washing machine, try hand cleaning them with a cloth or soft brush instead.`}
        />
      </Box>
      {/* Write Review */}
      {/* <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label _text={{ fontSize: "12px", fontWeight: "bold" }}>
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={3}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}>
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label _text={{ fontSize: "12px", fontWeight: "bold" }}>
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="This product is good ...."
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{ bg: Colors.subGreen }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>
            SUBMIT
          </Buttone>
          If not Login
          <Message
            color={Colors.white}
            bg={Colors.black}
            bold
            children={`Please 'Login' to write a review`}
          />
        </VStack>
      </Box> */}
    </Box>
  );
};

export default Review;
