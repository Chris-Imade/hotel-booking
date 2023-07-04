import { ScreenProps } from "../../navigation/Stacks/types";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from "react-native";
import { styles } from "./styles";
import { CustomButton, CustomCalendar, Header } from "../../components/index";
import { colors } from "../../components/styled";
import { Image } from "react-native";
import { icons } from "../../assets/images";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { calculateDays } from "../../utils/dayCalculator";

const BookNow: React.FC<ScreenProps<"book-now">> = (props) => {
  const bookingPeriod = useSelector(
    (state: RootState) => state.data.bookingPeriod
  );
  const totalNights = calculateDays(bookingPeriod.startDay, bookingPeriod.endDay);

  console.log(JSON.stringify(props.navigation));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      <Header type={"booking"} title="Book Now" />
      <ScrollView showsVerticalScrollIndicator={false} style={{}}>
        <View style={{ marginHorizontal: 20 }}>
          <CustomCalendar />
        </View>
        <View style={styles.divider} />
        <View style={styles.totalCostContainer}>
          <Text style={styles.totalCostTxt}>Total Cost</Text>
          <View style={styles.innerContainer}>
            <View style={styles.formatTotal}>
              <Text style={styles.leftText}>State Date</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.date}
                  style={{ width: 18, height: 18, marginRight: 8 }}
                  resizeMode="contain"
                />
                <Text style={styles.rightText}>
                  {bookingPeriod.startDay === undefined
                    ? "Select Start Date"
                    : bookingPeriod.startDay}
                </Text>
              </View>
            </View>
            <View style={[styles.innerContainer, styles.formatTotal]}>
              <Text style={styles.leftText}>End Date</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={icons.date}
                  style={{ width: 18, height: 18, marginRight: 8 }}
                  resizeMode="contain"
                />
                <Text style={styles.rightText}>
                  {bookingPeriod.endDay === undefined
                    ? "Select End Date"
                    : bookingPeriod.endDay}
                </Text>
              </View>
            </View>
            <View style={[styles.innerContainer, styles.formatTotal]}>
              <Text style={styles.leftText}>Total Nights</Text>
              <Text style={[styles.rightText, { color: colors.primary }]}>
                {totalNights ? totalNights : 0}
              </Text>
            </View>
            <View style={[styles.innerContainer, styles.formatTotal]}>
              <Text style={styles.leftText}>Price Per Night</Text>
              <Text style={[styles.rightText, { color: colors.primary }]}>
                ₦65K
              </Text>
            </View>
            {/* Total Price */}
            <View style={[styles.innerContainer, styles.formatTotal]}>
              <Text style={styles.totalCostTxt}>Total Price</Text>
              <Text style={[styles.rightText, { color: colors.primary }]}>
                {"₦" + (totalNights ? (65 * totalNights) : 65) + "K"}
              </Text>
            </View>
            {/* Warning Area */}
            <View style={styles.warningContainer}>
              <Image
                source={icons.warn}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
              <Text style={styles.warningText}>
                You'd pay half the price here to confirm your bookings and pay
                the balance at your arival
              </Text>
            </View>
          </View>
        </View>
      <View style={styles.bottomButtonContainer}>
        <CustomButton
          border={{ addBorder: false, color: "#D6D6D6" }}
          txtStyle={[{ color: "white", textAlign: "center" }]}
          title={"PAY" + " " + "₦195K"}
          btnStyle={[{ backgroundColor: "#4C4DDC" }]}
          type={"payment"}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookNow;