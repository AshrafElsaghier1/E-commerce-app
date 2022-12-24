import { ListGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
function Header() {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="navbar navbar__container p-0"
          collapseOnSelect
        >
          <Container className="h-100">
            <ListGroup
              horizontal
              className="ul__list rounded-0 d-none d-lg-flex align-items-center    h-100 "
            >
              <NavLink
                to="E-commerce-app/products/1"
                className="d-flex align-items-center    h-100 justify-content-center"
              >
                Woman
              </NavLink>

              <NavLink
                to="E-commerce-app/products/2"
                className="d-flex    h-100 align-items-center justify-content-center"
              >
                Men
              </NavLink>

              <NavLink
                to="E-commerce-app/products/3"
                className="d-flex align-items-center 
                h-100  
                justify-content-center"
              >
                Children
              </NavLink>
            </ListGroup>
            <div className="logo d-flex justify-content-center h-100 d-flex align-items-center">
              <h2 className="mb-0 ">
                <Link to="E-commerce-app/home" className="fs-3 logo__link">
                  MALOLOO
                </Link>
              </h2>
            </div>

            <Navbar.Toggle className="menubar__toggle p-0 border-0  shadow-none" />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="offcanvas__sidebar sidebar h-100 "
            >
              <Offcanvas.Header closeButton className="shadow-none">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link
                    to="E-commerce-app/home"
                    className="fs-4 text-uppercase logo__link"
                  >
                    maloloo
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="h-100">
                <Nav
                  className="justify-content-end flex-grow-1 pe-md-3 pe-lg-0 
                gap-lg-3
                align-align-items-lg-center align-items-md-start h-100 "
                >
                  <ListGroup className="ul__list rounded-0 d-flex d-lg-none">
                    <NavLink
                      to="E-commerce-app/products/1"
                      className="my-2 my-lg-0  "
                      aria-label="Close"
                    >
                      Woman
                    </NavLink>

                    <NavLink
                      to="E-commerce-app/products/2"
                      className="my-2 my-lg-0"
                    >
                      Men
                    </NavLink>

                    <NavLink
                      to="E-commerce-app/products/3"
                      className="my-2 my-lg-0"
                    >
                      Children
                    </NavLink>
                  </ListGroup>
                  <ListGroup className="d-flex flex-lg-row ul__list ">
                    <NavLink
                      to="E-commerce-app/home"
                      className="my-2 my-lg-0 h-100  "
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="E-commerce-app/about"
                      className="my-2 my-lg-0 h-100"
                    >
                      about
                    </NavLink>
                    <NavLink
                      to="E-commerce-app/contact"
                      className="my-2 my-lg-0 h-100  "
                    >
                      contact
                    </NavLink>

                    <NavLink
                      to="E-commerce-app/stores"
                      className="my-2 my-lg-0 h-100"
                    >
                      stores
                    </NavLink>
                  </ListGroup>

                  <ListGroup className="d-flex flex-lg-row ul__list icons h-100 align-items-lg-center align-items-start">
                    <li>
                      <SearchRoundedIcon />
                    </li>
                    <li>
                      <PersonOutlineOutlinedIcon />
                    </li>
                    <li>
                      <FavoriteBorderOutlinedIcon />
                    </li>
                    <li className="cart__container  ">
                      <span className="cart__count  d-flex align-items-center justify-content-center ">
                        0
                      </span>
                      <ShoppingCartOutlinedIcon />
                    </li>
                  </ListGroup>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
