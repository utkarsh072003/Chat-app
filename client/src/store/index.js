import { create } from "zustand";
import { createAuthSlice } from "./slices/authSlice";
import { createchatSlice } from "./slices/chat-slice";




export const useAppStore =create()((...a) => ({
    ...createAuthSlice(...a),
    ...createchatSlice(...a)
}))