import { MenuItems } from './MenuItems'
import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';



function Menu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href={MenuItems[0].url}>One Fifty Nine Productions</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={MenuItems[4].url}>{MenuItems[4].title}</Nav.Link>
          </Nav>
          <Nav>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href={MenuItems[1].url}>{MenuItems[1].title}</NavDropdown.Item>
              <NavDropdown.Item href={MenuItems[2].url}>{MenuItems[2].title}</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href={MenuItems[3].url}>{MenuItems[3].title}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Menu;