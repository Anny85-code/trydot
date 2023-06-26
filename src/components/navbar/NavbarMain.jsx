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
        <Navbar.Collapse id="navbarScroll" className={styles.navbar_collapse}>
          <Nav
            className={`me-auto my-2 my-lg-0 ${styles.Nav}`}
            navbarScroll
          >
            <Nav.Link href="#action1" className={styles.nav_link}>
              Home
            </Nav.Link>
            <NavDropdown
              title="Pages"
              id={`navbarScrollingDropdown ${styles.nav__link}`}
              className={styles.nav_link}
            >
              <NavDropdown.Item
                href="#action3"
                className={styles.nav_link_item}
              >
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action4"
                className={styles.nav_link_item}
              >
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action5"
                className={styles.nav_link_item}
              >
                Faq&apos;s
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action5"
                className={styles.nav_link_item}
              >
                Agents
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action5"
                className={styles.nav_link_item}
              >
                Testimonials
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action5"
                className={styles.nav_link_item}
              >
                Service Box
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action5"
                className={styles.nav_link_item}
              >
                Partners
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action5"
                className={styles.nav_link_item}
              >
                Services
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action5"
                className={styles.nav_link_item}
              >
                Single Service
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action5"
                className={styles.nav_link_item}
              >
                404
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Portfolio"
              id={`navbarScrollingDropdown ${styles.nav__link}`}
              className={styles.nav_link}
            >
              <NavDropdown.Item
                href="#action3"
                className={styles.nav_link_item}
              >
                Portfolio List
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action4"
                className={styles.nav_link_item}
              >
                Single Project
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Blog"
              id={`navbarScrollingDropdown ${styles.nav__link}`}
              className={styles.nav_link}
            >
              <NavDropdown.Item
                href="#action3"
                className={styles.nav_link_item}
              >
                Blog
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action4"
                className={styles.nav_link_item}
              >
                Single Post
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Shop"
              id={`navbarScrollingDropdown ${styles.nav__link}`}
              className={styles.nav_link}
            >
              <NavDropdown.Item
                href="#action3"
                className={styles.nav_link_item}
              >
                Shop
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#action4"
                className={styles.nav_link_item}
              >
                Single Product
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled className={styles.nav_link}>
              Elements
            </Nav.Link>
          </Nav>

          <Button variant="outline-success" className={styles.navBtn}>
            +234-7036471219
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMain;
