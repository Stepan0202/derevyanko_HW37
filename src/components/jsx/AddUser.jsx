import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/esm/Button';
import { Link, useNavigate } from 'react-router-dom';

function AddUser({users, setUsers}){
  const navigate = useNavigate()

  if (users.length === 0) {
    return <div>Loading...</div>;
  }
    function processAddUserForm(e){
      e.preventDefault();
      const fields = [...e.target];
      const newUser = {};
      fields.forEach(field => {
        newUser[field.name] = field.value;
      });
      const lcUsers = JSON.parse(localStorage['users']);
      if(lcUsers){
        lcUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(lcUsers));
        setUsers(lcUsers);
      }
      
      navigate("/")
    }
    function getUniqueID(){
        let max = parseInt(users[0].id);
        for(let i = 1; i < users.length; i++){
          let id = parseInt(users[i].id)
          if (id > max) max = id
        }
        return max + 1;
    }

    return (
      <>
        <h2>Add user</h2>
        <Form onSubmit={processAddUserForm} >
          <Form.Group as={Row} className="mb-3" controlId="formPlaintext">
            <Form.Label column sm="2">
              ID 
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" name="id" readOnly value={getUniqueID()}/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" name='name' placeholder="Ivan" />
            </Col>
          </Form.Group>             
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextUsername">
            <Form.Label column sm="2">
              Username
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" name="username" placeholder="SuperI" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              E-mail
            </Form.Label>
            <Col sm="10">
              <Form.Control type="mail" name='email' placeholder="user@usr.user" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextPhone">
            <Form.Label column sm="2">
            Phone
            </Form.Label>
            <Col sm="10">
              <Form.Control type="tel" name='phone' placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextWebsite">
            <Form.Label column sm="2">
            Website
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" name='website' placeholder="website.user.com" />
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

export default AddUser;