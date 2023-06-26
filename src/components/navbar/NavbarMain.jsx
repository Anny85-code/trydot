import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
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
        <Navbar.Brand href="#" className={styles.logo}>
          TRYDOT SYNERGY
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
            <NavDropdown
              title="Pages"
              id={`navbarScrollingDropdown ${styles.nav__link}`}
              className={styles.nav_link}
              style={{ color: 'red' }}
            >
              <NavDropdown.Item href="#action3" className={styles.nav_link_item}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className={styles.nav_link_item}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className={styles.nav_link_item}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Portfolio"
              id={`navbarScrollingDropdown ${styles.nav__link}`}
              className={styles.nav_link}
              style={{ color: 'red' }}
            >
              <NavDropdown.Item href="#action3" className={styles.nav_link_item}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className={styles.nav_link_item}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className={styles.nav_link_item}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Blog"
              id={`navbarScrollingDropdown ${styles.nav__link}`}
              className={styles.nav_link}
              style={{ color: 'red' }}
            >
              <NavDropdown.Item href="#action3" className={styles.nav_link_item}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className={styles.nav_link_item}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className={styles.nav_link_item}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Shop"
              id={`navbarScrollingDropdown ${styles.nav__link}`}
              className={styles.nav_link}
              style={{ color: 'red' }}
            >
              <NavDropdown.Item href="#action3" className={styles.nav_link_item}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4" className={styles.nav_link_item}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className={styles.nav_link_item}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled className={styles.nav_link}>
             Elements
            </Nav.Link>
          </Nav>
        
            <Button variant="outline-success" className={styles.navBtn}>+2347036471219</Button>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
