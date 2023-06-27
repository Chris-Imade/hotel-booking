import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import appSlice from './Splice/AppSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

interface PersistConfig {
  key: string;
  storage: any; // Use the appropriate type for AsyncStorage if available
  whitelist: string[];
}

const persistConfig: PersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [
    // Things to persist would be stored here
  ],
};

const rootReducer = combineReducers({
  data: persistReducer(persistConfig, appSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;