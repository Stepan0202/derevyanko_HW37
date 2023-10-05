import{configureStore} from '@reduxjs/toolkit' 
import fetchUsers from '../js/fetchData'

const users = await fetchUsers();
const initialState = {
    users: users, 
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case 'setUsers':
            return{
                users: action.payload
            }
    }
    return state;
}
const store = configureStore({
    reducer: usersReducer
})

export default store; 