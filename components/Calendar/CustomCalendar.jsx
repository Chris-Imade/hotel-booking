import React, { useState, memo } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { Text, View, TouchableOpacity } from "react-native";
import { colors, fonts } from "../styled";
import { useDispatch } from "react-redux";
import { setDateBooked } from "../../Redux/Splice/AppSlice";

const CustomCalendar = () => {
  const [selected, setSelected] = useState({});
  
  const dispatch = useDispatch();
  dispatch(setDateBooked(selected));

  const handleDayPress = (day) => {
    if (selected && selected.startDay && !selected.endDay) {
      const start = selected.startDay;
      const end = day.dateString;
      setSelected((prevState) => ({
        ...prevState,
        endDay: day.dateString, // Update the endDay property
      }));
    } else {
      setSelected({ startDay: day.dateString, endDay: null }); // Set the endDay property to null
    }
  };

  const isFutureDate = (date) => {
    const currentDate = new Date().toISOString().split("T")[0];
    return date >= currentDate;
  };

  LocaleConfig.locales["en"] = {
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  };
  LocaleConfig.defaultLocale = "en";



  const renderDay = (date) => {
    const dateString = date.dateString;
    const day = new Date(dateString).getDate().toString();
  
    if (!isFutureDate(dateString)) {
      // Render disabled date component with reduced opacity
      const disabledDateStyle = {
        backgroundColor: "#FAFAFF",
        opacity: 0.4,
        width: 34,
        height: 34,
        justifyContent: "center",
        alignItems: "center",
      };
  
      return (
        <View style={disabledDateStyle}>
          <Text>{day}</Text>
        </View>
      );
    }
  
    const handleDayPress = () => {
      // Logic to handle day selection
      if (selected.startDay && selected.startDay === dateString) {
        // If the selected day is already the start day, clear the selection
        setSelected({});
      } else if (selected.startDay && !selected.endDay) {
        // If the start day is already selected and end day is not set, set the end day
        setSelected((prevState) => ({
          ...prevState,
          endDay: dateString,
        }));
      } else {
        // Otherwise, set the start day
        setSelected({ startDay: dateString, endDay: null });
      }
    };
  
    if (selected.startDay && selected.startDay === dateString) {
      // Render start day component with a specific background color
      const startDayStyle = {
        backgroundColor: colors.primary,
        width: 34,
        height: 34,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16
      };
  
      const startDayTxtStyle = {
        fontSize: fonts.text.sm,
        fontFamily: fonts.family.bold,
        color: colors.white,
      };
  
      return (
        <TouchableOpacity onPress={handleDayPress} style={startDayStyle}>
          <Text style={startDayTxtStyle}>{day}</Text>
        </TouchableOpacity>
      );
    }
  
    if (
      selected.startDay &&
      selected.endDay &&
      new Date(dateString) > new Date(selected.startDay) &&
      new Date(dateString) < new Date(selected.endDay)
    ) {
      // Render space between start and end dates with a different background color
      const spaceDayStyle = {
        backgroundColor: colors.primary,
        width: 80,
        height: 34,
        justifyContent: "center",
        alignItems: "center",
      };
  
      const spaceDayTxtStyle = {
        fontSize: fonts.text.sm,
        fontFamily: fonts.family.bold,
        color: colors.white,
      };
  
      return (
        <TouchableOpacity onPress={handleDayPress} style={spaceDayStyle}>
          <Text style={spaceDayTxtStyle}>{day}</Text>
        </TouchableOpacity>
      );
    }
  
    if (selected.startDay && selected.endDay && dateString === selected.endDay) {
      // Render end day component with a specific background color
      const endDayStyle = {
        backgroundColor: colors.primary,
        width: 34,
        height: 34,
        justifyContent: "center",
        alignItems: "center",
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16
      };
  
      const endDayTxtStyle = {
        fontSize: fonts.text.sm,
        fontFamily: fonts.family.bold,
        color: colors.white,
      };
  
      return (
        <TouchableOpacity onPress={handleDayPress} style={endDayStyle}>
          <Text style={endDayTxtStyle}>{day}</Text>
        </TouchableOpacity>
      );
    }
  
    const defaultDayStyle = {
      width: 34,
      height: 34,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FAFAFF"
    };
  
    const defaultDayTxtStyle = {
      fontSize: fonts.text.sm,
      fontFamily: fonts.family.bold,
      color: colors.black,
    };
  
    // Render default day component
    return (
      <TouchableOpacity onPress={handleDayPress} style={defaultDayStyle}>
        <Text style={defaultDayTxtStyle}>{day}</Text>
      </TouchableOpacity>
    );
  };

  

  return (
    <View>
      <Calendar
        theme={{
            calendarBackground: '#FAFAFF',
            textSectionTitleColor: colors.black,
            selectedDotColor: '#ffffff',
            arrowColor: colors.primary,
            monthTextColor: colors.black,
            indicatorColor: colors.primary,
            textDayFontFamily: colors.primary,
            textMonthFontFamily: fonts.family.medium,
            textDayHeaderFontFamily: fonts.family.medium,
            textDayFontSize: fonts.text.lg,
            textMonthFontSize: fonts.text.lg,
            textDayHeaderFontSize: fonts.text.lg,
        }}
        onDayPress={handleDayPress}
        markedDates={selected}
        markingType="period"
        minDate={new Date().toISOString().split("T")[0]}
        disableAllTouchEventsForDisabledDays
        dayComponent={({ date }) => renderDay(date)}
        style={{ 
          height: 380, 
          backgroundColor: "#FAFAFF",
          borderRadius: 8
        }}
      />
    </View>
  );
};

export default memo(CustomCalendar);