import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import classes from "./footer.module.scss";
import "./footer.css";
import { useEffect, useState } from "react";
const Footer = () => {
  const [open, setOpen] = useState(false);
  const resizeHandler = () => {
    if (window.innerWidth < 576) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return (
    <div className={`${classes.footer} pt-5 pb-3`}>
      <Container>
        <Accordion
          defaultActiveKey={open ? ["0", "1", "2", "3"] : ""}
          alwaysOpen={open ? true : false}
          className={classes.accordion__container}
        >
          <Row>
            <Col md="6" sm="12">
              <Row>
                <Col sm="6" className="mb-2 d-flex">
                  <Accordion.Item
                    eventKey="0"
                    className={`border-0 bg-transparent ${classes.accordion__item} w-100 `}
                  >
                    <h5
                      className={`mb-0 ${classes.heading__title} d-none d-sm-block `}
                    >
                      Categories
                    </h5>

                    <Accordion.Header
                      className={`d-block d-sm-none  ${classes.accordion__header} ${classes.heading__title} `}
                    >
                      Categories
                    </Accordion.Header>

                    <Accordion.Body
                      className={`px-sm-0  py-3 ${classes.accordion__body}`}
                    >
                      <ListGroup className={`${classes.ul__list} rounded-0  `}>
                        <NavLink
                          to="E-commerce-app/products/1"
                          className="mb-2"
                        >
                          Woman
                        </NavLink>
                        <NavLink
                          to="E-commerce-app/products/2"
                          className="mb-2"
                        >
                          Men
                        </NavLink>
                        <NavLink
                          to="E-commerce-app/products/2"
                          className="mb-2"
                        >
                          Shoes
                        </NavLink>
                        <NavLink
                          to="E-commerce-app/products/2"
                          className="mb-2"
                        >
                          Accessories
                        </NavLink>
                        <NavLink
                          to="E-commerce-app/products/2"
                          className="mb-2"
                        >
                          New Arrival
                        </NavLink>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col sm="6" className="mb-2">
                  <Accordion.Item
                    eventKey="1"
                    className={`border-0 bg-transparent ${classes.accordion__item}`}
                  >
                    <h5
                      className={`mb-0 ${classes.heading__title} d-none d-sm-block `}
                    >
                      Links
                    </h5>

                    <Accordion.Header
                      className={`d-block d-sm-none  ${classes.accordion__header} ${classes.heading__title} `}
                    >
                      Links
                    </Accordion.Header>
                    <Accordion.Body
                      className={`px-sm-0  py-3 ${classes.accordion__body}`}
                    >
                      <ListGroup className={`${classes.ul__list} rounded-0  `}>
                        <NavLink to="E-commerce-app" className="mb-2">
                          FAQ
                        </NavLink>
                        <NavLink to="E-commerce-app" className="mb-2">
                          Pages
                        </NavLink>
                        <NavLink to="E-commerce-app" className="mb-2">
                          Stores
                        </NavLink>
                        <NavLink to="E-commerce-app" className="mb-2">
                          Compare
                        </NavLink>
                        <NavLink to="E-commerce-app" className="mb-2">
                          Cookies
                        </NavLink>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
            </Col>
            <Col md="6" sm="12">
              <Row>
                <Col sm="6" className="mb-2">
                  <Accordion.Item
                    eventKey="2"
                    className={`border-0 bg-transparent ${classes.accordion__item}`}
                  >
                    <h5
                      className={`mb-0 ${classes.heading__title} d-none d-sm-block `}
                    >
                      About
                    </h5>

                    <Accordion.Header
                      className={`d-block d-sm-none  ${classes.accordion__header} ${classes.heading__title} `}
                    >
                      About
                    </Accordion.Header>
                    <Accordion.Body
                      className={`px-sm-0  py-3 ${classes.accordion__body}`}
                    >
                      <p className="mb-0">
                        Once upon a time, walking was sort of cool. Back in the
                        1980s, when indoor shopping malls were
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
                <Col sm="6" className="mb-2">
                  <Accordion.Item
                    eventKey="3"
                    className={`border-0 bg-transparent ${classes.accordion__item}`}
                  >
                    <h5
                      className={`mb-0 ${classes.heading__title} d-none d-sm-block `}
                    >
                      Contact
                    </h5>

                    <Accordion.Header
                      className={`d-block d-sm-none  ${classes.accordion__header} ${classes.heading__title} `}
                    >
                      Contact
                    </Accordion.Header>
                    <Accordion.Body
                      className={`px-sm-0  py-3 ${classes.accordion__body}`}
                    >
                      <p className="mb-0">
                        Once upon a time, walking was sort of cool. Back in the
                        1980s, when indoor shopping malls were
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Accordion>
        <div className="my-2">
          <p className="text-center mb-0 ">
            Copyright &#169;&nbsp;
            <Link to="E-commerce-app" className="text-dark  ">
              M A L O L O&nbsp;
            </Link>
            All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
