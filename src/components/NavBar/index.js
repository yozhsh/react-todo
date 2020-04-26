import React from "react"
import Navbar from 'react-bootstrap/Navbar'


function NavBar(){
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                React Todo
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavBar;