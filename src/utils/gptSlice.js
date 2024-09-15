import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        language: "en"
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        selectLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export const { toggleGptSearch, selectLanguage } = gptSlice.actions
export default gptSlice.reducer