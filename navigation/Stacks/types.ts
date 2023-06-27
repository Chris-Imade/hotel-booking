import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  "home-screen": undefined;
  search:undefined;
  "search-location": undefined;
  "hotels-nearby": undefined;
  notification: undefined;
  "detailed-screen": { itemId: string };
};

export type ScreenProps<RouteName extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  RouteName
>;
