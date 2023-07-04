import { Dimensions, Platform } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const STYLES = {
    paddingTop: Platform.OS === "android" ? 25 
    : Platform.OS === "ios" ? 16 
    : undefined,
}

export const colors = {
    primary: "#4C4DDC",
    gray: "#DFE0F3",
    textGray: "#878787",
    mainBorder: "#D6D6D6",
    lightBorder: "#EDEDED",
    white: "#ffffff",
    partialBlack: "#101010",
    black: "#000000",
    darkModeGrayText: "#EBEBEB",
    secondary: "",
    tertiary: "",
    unary: "",
    customGray: "#D6D6D6"
}

export const fonts = {
    text: {
        lg: 16,
        md: 14,
        sm: 12,

        h1: 64,
        h2: 48,
        h3: 32,
        h4: 24,
        h5: 18
    },
    colors: {
        primary: "#A6A6A6",
        black: "#000000"
    },
    family: {
        regular: "Regular-Jakarta",
        bold: "Bold-Jakarta",
        semi_bold: "Semi-Bold-Jakarta",
        semi_bold_italic: "Semi-Bold-Italic-Jakarta",
        extra_bold: "Extra-Bold-Jakarta",
        extra_bold_italic: "Extra-Bold-Italic-Jakarta",
        bold_italic: "Bold-Italic-Jakarta",
        light: "Light-Jakarta",
        extra_light: "Extra-Light-Jakarta",
        light_italic: "Light-Italic-Jakarta",
        extra_light_italic: "Extra-Light-Italic-Jakarta",
        italic: "Italic-Jakarta",
        medium: "Medium-Jakarta",
        medium_italic: "Medium-Italic-Jakarta",


    }
}