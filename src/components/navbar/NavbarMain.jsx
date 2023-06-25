import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './NavbarMain.module.scss';

const NavbarMain = () => {
  return (
    <Navbar
      expand="lg"
      className={`bg-body-tertiary ${styles.navbar_main_cont}`}
    >
      <Container fluid>
        <Navbar.Brand href="#" className={styles.nav_link}>
          Navbar scroll
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginLeft: 'auto' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className={styles.nav_link}>
              Home
            </Nav.Link>
            <Nav.Link href="#action2" className={styles.nav_link}>
              Link
            </Nav.Link>
            <NavDropdown
              title="Link"
              id="navbarScrollingDropdown"
              className={styles.nav_link}
              style={{color: 'blue'}}
            >
              <NavDropdown.Item href="#action3" className={styles.nav_link}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className={styles.nav_link}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className={styles.nav_link}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled className={styles.nav_link}>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            /> */}
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
