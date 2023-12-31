import './components/sass/app.scss'
import Root from './routes/root'
import UsersTable from './components/jsx/UsersTable'
import AddUser from './components/jsx/AddUser'
import EditUser from './components/jsx/EditUser'
 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:  <Root />, 
      children: [
        {
          path: "/",
          element: <UsersTable/>
        },
        {
          path: "/addingUser",
          element: <AddUser/>,
        },
        {
          path: "/editUser/:userID",
          element: <EditUser/>,
        }
      ]
    }
  ]);
  return (
      <RouterProvider router={router}/>
  )
}

export default App;
