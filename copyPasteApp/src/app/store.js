
import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from "../features/copyPasteSlice.js"

export const store = configureStore({
  reducer: {
    paste: pasteReducer
  },
})