import { createSlice } from "@reduxjs/toolkit";

const workspacesSlice = createSlice({
    name: "workspaces",
    initialState: {
        selectedWorkspace: 'Mathematics',
        workspaces: [
            {
                title: 'Mathematics',
                notes: [
                    {
                        title: 'Big O Notation'
                    }
                ]
            },
            {
                title: 'JavaScript',
                notes: [
                    {
                        title: 'Clousures'
                    },
                    {
                        title: 'Async Await'
                    }
                ]
            }
        ]
    },
    reducers: {
        selectWorkspace: (state, action) => {
           return {...state, selectedWorkspace: action.payload}
        },

    }
    
})

export const {
    selectWorkspace,
} = workspacesSlice.actions

export default workspacesSlice.reducer
