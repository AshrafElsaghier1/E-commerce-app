import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Filter from "../../components/filter/Filter";
import Loading from "../../components/loader/Loading";
import Slider from "../../components/slider/Slider";
import { getProducts } from "../../store/productsSlice";
import SingleProduct from "../product/SingleProduct";
import classes from "./products.module.scss";
const Products = () => {
  const { products, isLoading, isError } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <section>
      <Slider />
      <Container className="py-5">
        <Row>
          <Col md="12" lg="9">
            <Row>
              {isLoading ? (
                <Loading />
              ) : isError ? (
                <h2 className="alert alert-danger"> Error Network</h2>
              ) : (
                products.map((product) => (
                  <Col
                    xs="12"
                    sm="6"
                    md="4"
                    xl="4"
                    key={product.id}
                    className="mb-3"
                  >
                    <SingleProduct {...product} />
                  </Col>
                ))
              )}
            </Row>
          </Col>
          <Col md="12" lg="3" className={classes.filter__products_container}>
            <Filter />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Products;
