// import { View, Text } from "react-native";
import { Box, Heading, ScrollView } from "native-base";
import React from "react";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "../color";
import OrderItem from "../Components/OrderItem";
import OrderInfo from "../Components/OrderInfo";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import OrderModel from "../Components/OrderModel";

const OrderScreen = () => {
  return (
    <Box bg={Colors.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Admin Doe"
            text="admin@mail.com"
            success
            icon={<FontAwesome name="user" size={30} color={Colors.white} />}
          />
          <OrderInfo
            title="ORDER INFO"
            subTitle="Shipping: Tanzania"
            danger
            text="Payment Method: Paypal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={Colors.white}
              />
            }
          />
          <OrderInfo
            title="DELIVER TO"
            subTitle="Address:"
            danger
            text="John Doe, Bangkok, Thailand"
            icon={
              <Ionicons name="location-sharp" size={30} color={Colors.white} />
            }
          />
        </ScrollView>
      </Box>
      {/* Order Item */}
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        {/* Total */}
        <OrderModel />
      </Box>
    </Box>
  );
};

export default OrderScreen;
