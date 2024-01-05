import React from 'react';
import { useState } from 'react';
import './Navbar.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@mui/icons-material/Home';


import { Button } from '@mui/material';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import { useFirebase } from '../context/Firebase';
import { useGlobal } from '../context/Global';
function Navbar1() {
    const useglobal = useGlobal()
    // -----------------
    // const [isOpen, setIsOpen] = useState(false);
    // const toggleSidebar = () => setIsOpen((prev) => !prev);

    const article = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(!useglobal.check7)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)


    }
    const signin = () => {
        useglobal.setcheck4(!useglobal.check4)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)


    }
    const signup = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(!useglobal.check3)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)

    }
    const userspace = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(!useglobal.check5)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)

    }
    const setprofile = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(!useglobal.check2)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)

    }
    const profile = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(!useglobal.check1)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)

    }
    const home = () => {
        useglobal.setcheck4(false)
        useglobal.setcheck3(false)
        useglobal.setcheck2(false)
        useglobal.setcheck1(false)
        useglobal.setcheck5(false)
        useglobal.setcheck6(false)
        useglobal.setcheck7(false)
        useglobal.setcheck8(false)
        useglobal.setcheck9(false)

    }
    //-----------
    return (

        // <div>
        // {/* ---------------------------------------------------------------------------------------------------------------- */}





        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">HRJ Health-care</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"><Button component="label" variant="contained"   onClick={() => { article() }}>Article</Button></Nav.Link>

                        <NavDropdown title="Profile" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"><Button component="label" variant="outlined" onClick={() => { signin() }}> sign in</Button></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                <Button component="label" variant="outlined" onClick={() => { signup() }}>sign  up</Button>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><Button component="label" variant="outlined"  onClick={() => { profile() }}>Show Profile</Button></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                <Button component="label" variant="outlined"  onClick={() => { setprofile() }}>Edit Profile</Button>
                                </NavDropdown.Item>
                            </NavDropdown>

                       
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"><Button component="label" variant="contained"  onClick={() => { home() }}><HomeIcon />Home</Button></Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <Button  component="label" variant="contained"  onClick={() => { userspace() }}>userSpace</Button>

                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>








        //     {/* --------------------------------------------------------------------------------------------------------------------------- */}


        //     {/* <div><button className='userSpace' onClick={() => { home() }}>Home</button></div>
        //     <div><button className='userSpace' onClick={() => { userspace() }}>userSpace</button></div>

        //     <div><button className='userSpace' onClick={() => { article() }}>Article</button></div>


        //     <button onClick={toggleSidebar} className='profile'>Profile </button>
        //     <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        //         <button onClick={() => { signin() }}> <h3 className='rectangle4'>sign in</h3></button>
        //         <button onClick={() => { signup() }}><h3 className='rectangle4'>sign up</h3></button>
        //         <button onClick={() => { setprofile() }}><h3 className='rectangle4'>Edit Profile</h3></button>
        //         <button onClick={() => { profile() }}><h3 className='rectangle4'>Show Profile</h3></button>
        //     </div>
        // </div> */}


    );
}

export default Navbar1;