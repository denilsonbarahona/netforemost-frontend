import { configureStore } from "@reduxjs/toolkit";
import { FetchApi } from "../api/fetch-api";
import rootReducers from "./reducers";

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: new FetchApi(),
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
