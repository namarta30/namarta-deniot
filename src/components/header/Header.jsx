import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


function Header() {
    return (
        <Navbar  fixed="top"  collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 58" width="45" height="48" focusable="false" tabindex="-1" class="logo"><g transform="translate(0 6)"><defs><filter id="a" filterUnits="userSpaceOnUse" x="-5" y="-5" width="64.1" height="56"><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask maskUnits="userSpaceOnUse" x="-5" y="-5" width="64.1" height="56" id="b"><g filter="url(#a)"><path d="M22.8 12.8L10.1.2 6.6 3.8 22.9 20c5.5-5.5 11-11 16.4-16.3L35.6 0 22.8 12.8zM.1 10.2l12.8 12.7C8.4 27.2 4.2 31.5 0 35.7l3.6 3.6L19.9 23 3.5 6.7.1 10.2zm34 4.2l-7.8 7.8c-.2.2-.4.5-.6.6l16.7 16.7 8.2-8.2c2.9-2.9 4.1-6.5 3.2-10.5-1-4.6-3.9-7.7-8.4-9.1-1.2-.4-2.5-.6-3.6-.6-2.8 0-5.4 1.1-7.7 3.3zm-1.2 8.3c1.5-1.5 3-3 4.5-4.6 2.8-2.7 6.3-2.9 9.4-.4 3.1 2.5 3.3 7 .6 9.8-1.6 1.6-3.2 3.2-4.8 4.7-3.3-3.1-6.5-6.2-9.7-9.5zM6.5 42.3l3.6 3.6c4.3-4.2 8.6-8.5 13-12.9l12.6 12.6 3.5-3.4C33.8 36.8 28.3 31.4 22.9 26L6.5 42.3z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"></path></g></mask><path d="M-5 51h64.1V-5H-5v56z" mask="url(#b)" fill-rule="evenodd" clip-rule="evenodd" class="logo-top"></path></g><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="22.876" y1="52.275" x2="22.876" y2="32.682"><stop offset=".2" stop-color="#c69952"></stop><stop offset=".26" stop-color="#ca9f5b"></stop><stop offset=".59" stop-color="#dbba88"></stop><stop offset=".85" stop-color="#e6cca4"></stop><stop offset="1" stop-color="#ead2ae"></stop></linearGradient><path d="M22.9 32l16.3 16.3-3.5 3.4-12.6-12.6L10.2 52l-3.6-3.6L22.9 32" fill-rule="evenodd" clip-rule="evenodd" fill="url(#c)"></path></svg>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav> */}
                    <Nav>
                        <Nav.Link href="#deets" className='nav-font text-white'>Interior Design</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className='nav-font text-white'>
                        Architecture
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className='nav-font text-white'>
                        Furniture
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className='nav-font text-white'>
                        Q&amp;A with JLD
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className='nav-font text-white'>
                        Books
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className='nav-font text-white'>
                        Instagram
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes" className='nav-font text-white'>
                        Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;