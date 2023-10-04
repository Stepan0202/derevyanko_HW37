import {createStore} from 'redux';
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
const store = createStore(usersReducer)

export default store; 