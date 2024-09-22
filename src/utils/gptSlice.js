import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        language: "en",
        searchResults: null
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch
        },
        selectLanguage: (state, action) => {
            state.language = action.payload
        },
        addSearchResults: (state, action) => {
            state.searchResults = action.payload
        }
    }
})

export const { toggleGptSearch, selectLanguage, addSearchResults } = gptSlice.actions
export default gptSlice.reducer