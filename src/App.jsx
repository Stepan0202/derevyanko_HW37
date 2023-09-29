/*Створити просту телефонну книгу.

Реалізувати перемикання між сторінками за допомогою react-router
Додати сторінку редагування запису
Додати підтвердження видалення запису (у вигляді модального вікна)


*/

import { useState} from 'react'
import './components/sass/app.scss'
import Root from './routes/root'
import UsersTable from './components/jsx/UsersTable'
import AddUser from './components/jsx/AddUser'
import EditUser from './components/jsx/EditUser'
import fetchUsers from './components/js/fetchData';
import {useEffect } from 'react';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const[users, setUsers] = useState([]);
  useEffect(()=>{fetchUsers(setUsers)}, [])
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Root />,
      children: [
        {
          path: "/",
          element: <UsersTable users={users} setUsers={setUsers}/>
        },
        {
          path: "/addingUser",
          element: <AddUser users={users} setUsers={setUsers}></AddUser>,
        },
        {
          path: "/editUser/:userID",
          element: <EditUser users={users} setUsers={setUsers}></EditUser>,
        }
      ]
    }
  ]);
  return (
      <RouterProvider router={router}/>
  )
}

export default App;
