import{configureStore} from '@reduxjs/toolkit' 
import fetchUsers from '../js/fetchData'
import {usersReducer }from './usersSlice';




const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export default store; 