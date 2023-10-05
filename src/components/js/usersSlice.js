import {createSlice} from "@reduxjs/toolkit";
import fetchUsers from "./fetchData";
const users = await fetchUsers();

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: users,
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        }
    }

})

export const usersActions = usersSlice.actions;
export const usersReducer =  usersSlice.reducer;