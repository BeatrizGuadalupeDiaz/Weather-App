import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/slices/CounterSlice";
import { weatherApi } from "../services/weather";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
