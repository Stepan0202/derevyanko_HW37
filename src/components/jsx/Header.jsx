import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

 function Header(){
    return (
        <header className="header">
            <div className="header__logo">LOGO<br/>GOGO</div>
            <div className="header__menu">
            </div>
            <div className="header__buttons">
            <Link to="/"><Button className="btn" variant="primary" >MAIN PAGE</Button></Link>
            <Link to="/addingUser"> <Button className="btn" variant="primary" id="addUser" >ADD USER</Button></Link>
            </div>
        </header>

    )
 }
 export default Header;