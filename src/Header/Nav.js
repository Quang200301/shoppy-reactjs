import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import nav from './nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Naver = () => {
    return (
        <div >
            <Navbar bg="" data-bs-theme="dark" className='headerall'>
                <Container>
                <Navbar.Brand href="/"><img className='prologo' src='https://iweb.tatthanh.com.vn/pic/3/blog/images/image(1304).png'/>KINGSUPPORT.VN</Navbar.Brand>
                <Nav className="_headerbar">
                    <Nav.Link href="/home">HOME</Nav.Link>
                    <Nav.Link className='nike-adidas'href="/nike">NIKE
                        <NavDropdown.Item className='nikenam' href="/nikenam">BOY</NavDropdown.Item>
                        <NavDropdown.Item  className='nikenu'href="/nikenu" >GIRL</NavDropdown.Item>
                    </Nav.Link>
                    <Nav.Link className='nike-adidas' href="/adidas">ADIDAS
                    <NavDropdown.Item className='nikenam' href="/adidasnam">BOY</NavDropdown.Item>
                        <NavDropdown.Item  className='nikenu'href="/adidasnu" >GIRL</NavDropdown.Item>
                    </Nav.Link>
                    <Nav.Link href="/sale">SALE</Nav.Link>
                    <Nav.Link href="/contact">CONTACT</Nav.Link>
                    <Nav.Link href="/show">ADMIN</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Naver;