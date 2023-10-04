
import Button from 'react-bootstrap/esm/Button';
import ModalDeleting from './ModalDeleting';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
function UsersTable(){
    const [show, setShow] = useState(false);
    const [confirmDeleting, setConfirmDeleting] = useState(false)
    const [userID, setUserID] = useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const users = useSelector(state => state.users)
    const dispatch =  useDispatch();

    function handleDeleting(e){
      handleShow();
      setUserID(e.target.dataset.userid)
    }
    useEffect(() => {
      deleteUser()
    }, [confirmDeleting])
    function deleteUser(){
      if(confirmDeleting){
        const newTable = users.filter(user => user.id != userID);
        dispatch({
          type: "setUsers",
          payload: newTable,

        });
        localStorage.setItem('users', JSON.stringify(newTable));
        setConfirmDeleting(false);
      }
      
    }


    return (
      <>
        <ModalDeleting setConfirmDeleting={setConfirmDeleting} show={show} handleClose={handleClose}/>
        <div className="usersTable">
            <div className="usersTable__row usersTable__row_header">
                <div className="usersTable__header">ID</div>
                <div className="usersTable__header">Name</div>
                <div className="usersTable__header">Username</div>
                <div className="usersTable__header">E-mail</div>
                <div className="usersTable__header">Phone</div>
                <div className="usersTable__header">Website</div>
                <div className="usersTable__header">Controls</div>
            </div>
          {users.map((user) => (
            <div className="usersTable__row" key={user.id}>
                <div className="usersTable__item key">{user.id ? user.id : "—"}</div>
                <div className="usersTable__item name">{user.name ? user.name : "—"}</div>
                <div className="usersTable__item username">{user.username ? user.username : "—"}</div>
                <div className="usersTable__item email">{user.email ? user.email : "—"}</div>
                <div className="usersTable__item phone">{user.phone ? user.phone : "—"}</div>
                <div className="usersTable__item website">{user.website ? user.website : "—"}</div>
                <div className="usersTable__item">
                  <Button className="btn" variant="warning" color="white" data-userid={user.id} onClick={handleDeleting}>Delete</Button>
                  <Link to={`/editUser/${user.id}`}><Button className="btn" variant="dark" color="white" >Edit</Button> </Link>
                  </div> 
            </div>
          ))}
        </div>
      </>
    )
}
export default UsersTable;