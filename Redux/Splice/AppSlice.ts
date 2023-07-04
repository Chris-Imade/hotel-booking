import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type RecentType = {
  id: number;
  prevSearch: string;
}
type TypingProp = string | null;
type DatesBooked = {
  startDay: string | undefined;
  endDay: string | undefined;
}
type DarkModeAction = boolean;

// Specify type for initialState
interface AppState {
  user: Record<string, any> | undefined;
  searchParams: string | null;
  category: string | null;
  recent: Array<RecentType>;
  recentCount: number;
  searching: TypingProp;
  bookingPeriod: DatesBooked;
  darkMode: DarkModeAction;
}

const initialState: AppState = {
  user: undefined,
  searchParams: null,
  category: "All Hotels",
  recent: [],
  recentCount: 0,
  searching: null,
  bookingPeriod: {
    startDay: undefined,
    endDay: undefined
  },
  darkMode: false
}

// Specify type for setAccessToken payload
type SetUserPayload = {
    name?: string,
    photo?: string,
    // Add any more properties you are sure of here
} & Record<string, any> | undefined

type SearchQuery = string;
type CategorySearch = string;
type RecentPayload = RecentType;
type DeleteRecentProps = number | null;


export const appSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // reducers should go here
    setAccessToken: (state, action: PayloadAction<SetUserPayload>) => {
      state.user = action.payload;
    },
    setSearchParams: (state, action: PayloadAction<SearchQuery>) => {
      state.searchParams = action.payload;
    },
    setCategory: (state, action: PayloadAction<CategorySearch>) => {
      state.category = action.payload;
    },
    addRecent: (state, action: PayloadAction<RecentPayload>) => {
      if(action.payload.prevSearch.length > 4 && state.recent.length != 0) {
        let duplicates = state.recent.filter((item) => item.prevSearch === action.payload.prevSearch);
        if(duplicates.length == 0) {
          state.recent.push(action.payload);
        }
      } else {
        state.recent.push(action.payload);
      }
    },
    isSearching: (state, action: PayloadAction<TypingProp>) => {
      state.searching = action.payload;
    },
    deleteRecent: (state, action: PayloadAction<DeleteRecentProps>) => {
      let sortedRecent = state.recent.filter((item) => item.id !== action.payload);
      state.recent = sortedRecent;
    },
    setDateBooked: (state, action: PayloadAction<DatesBooked>) => {
      state.bookingPeriod = action.payload;
    },
    setDarkMode: (state, action: PayloadAction<DarkModeAction>) => {
      state.darkMode = action.payload;
    }
  }
})
// Action creators are generated for each case reducer function
export const { 
    // Export reducers
    setAccessToken,
    setSearchParams,
    setCategory,
    addRecent,
    isSearching,
    deleteRecent,
    setDateBooked,
    setDarkMode
 } = appSlice.actions

export default appSlice.reducer;