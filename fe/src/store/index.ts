import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import chatSlice from './actions/chatActions';
import userSlice from './actions/userActions';

export const store = configureStore({
  reducer: {
    user: userSlice,
    chat: chatSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
