import { createSlice } from "@reduxjs/toolkit";

const editorSlice = createSlice({
    name: "editor",
    initialState: {
        showPreview: false,
        rawText: '',
        markdown: ''
    },
    reducers: {
        togglePreview: (state) => {
            return {...state, showPreview: !state.showPreview}
        },
        updateRawText: (state, action) => {
            return {...state, rawText: action.payload}
        },
        updateMarkdown: (state, action) => {
            return {...state, markdown: action.payload}
        }

    }
    
})

export const {
    togglePreview,
    updateRawText,
    updateMarkdown,
    
} = editorSlice.actions

export default editorSlice.reducer
