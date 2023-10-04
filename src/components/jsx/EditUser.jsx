import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

function EditUser(){
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  if (users.length === 0) return <div>Loading...</div>;
  
  let userID = useParams();
  userID = userID.userID;
  const navigate = useNavigate();
  const lcUsers = JSON.parse(localStorage['users']);
  const userIndex = getIndexbyID(lcUsers, userID);
  const currentUser = lcUsers[userIndex];

  const [userName, setUserName]  = useState(currentUser.name);
  const [userUsername, setUserUsername]  = useState(currentUser.username);
  const [userEmail, setUserEmail]  = useState(currentUser.email);
  const [userPhone, setUserPhone]  = useState(currentUser.phone);
  const [userWebsite, setUserWebsite]  = useState(currentUser.website);
  
  function processAddUserForm(e){
      e.preventDefault();
      const fields = [...e.target];
      fields.forEach(field => {
        currentUser[field.name] = field.value;
      });
      
        localStorage.setItem('users', JSON.stringify(lcUsers));
        dispatch({
          type: "setUsers",
          payload: lcUsers
        })
        navigate("/")
    }
    function getIndexbyID(array, ID){
      let ind;
      array.forEach((el, index) => {if(el.id == ID) ind = index})
      return ind;
    }
    function handleNameChange(e){
      setUserName(e.target.value)
    }
    function handleUsernameChange(e){
      setUserUsername(e.target.value)
    }
    function handleEmailChange(e){
      setUserEmail(e.target.value)
    }
    function handlePhoneChange(e){
      setUserPhone(e.target.value)
    }
    function handleWebsiteChange(e){
      setUserWebsite(e.target.value)
    }
    return (
      <> 
        <h2>Edit user</h2>
        <Form onSubmit={processAddUserForm} >
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              ID 
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" name="id" readOnly value={userID}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" name='name' value={userName} onChange={handleNameChange}/>
            </Col>
          </Form.Group>             
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
            <Form.Label column sm="2">
              Username
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" name="username" value={userUsername} onChange={handleUsernameChange}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              E-mail
            </Form.Label>
            <Col sm="10">
              <Form.Control type="mail" name='email' value={userEmail} onChange={handleEmailChange}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhone">
            <Form.Label column sm="2">
            Phone
            </Form.Label>
            <Col sm="10">
              <Form.Control type="tel" name='phone' value={userPhone} onChange={handlePhoneChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextWebsite">
            <Form.Label column sm="2">
            Website
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" name='website' value={userWebsite} onChange={handleWebsiteChange}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextSubmit">
            <Col sm="10">
            <Button type="submit" className="btn" variant="primary" color="white">Submit</Button>
            <Link to="/"><Button className="btn" variant="secondary" color="white" data-goto="usersTable">Back</Button></Link>
            </Col>
          </Form.Group>

        </Form>
      </>
      );
}

export default EditUser;