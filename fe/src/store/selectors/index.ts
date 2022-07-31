import { RootState } from "store";

export const selectUsers = (state: RootState) => state.user.users;
export const selectUser = (state: RootState) => state.user.user;
export const selectChats = (state: RootState) => state.chat.chatList;
