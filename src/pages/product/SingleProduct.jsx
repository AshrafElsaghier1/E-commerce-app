import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Navigation, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "./singleProduct.css";

const SingleProduct = (product) => {
  let {
    id,
    title,
    description,
    brand,
    category,
    discountPercentage,
    images,
    price,
    rating,
    stock,
    thumbnail,
  } = product;
  return (
    <Card className={`p-0  mx-auto  position-relative border-0  product `}>
      <Swiper
        navigation={true}
        className="w-100 img__container"
        modules={[Navigation, Scrollbar]}
        loop={true}
      >
        {images.map((imgSrc, index) => {
          return (
            <SwiperSlide key={index}>
              <Card.Img
                src={imgSrc}
                width="100%"
                className="product__img"
                alt={`img-${index}`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Card.Body>
        <h2
          className={` productLink fw-semibold text-black fs-6  d-block mb-2`}
        >
          {title}
        </h2>

        <div className="cardFooter">
          <div className="prices">
            <span className="price">
              {discountPercentage
                ? `$${price - ((price * discountPercentage) / 100).toFixed(0)}`
                : ""}
            </span>
            <span
              className={` ms-2  price ${
                discountPercentage ? "discount" : ""
              } `}
            >
              ${price}
            </span>
          </div>

          <button
            // onClick={() => submitHandler(data, id)}
            className={` seemoreBtn  productLink text-black p-1  border-0 mb-2 bg-white`}
          >
            Show More
          </button>
          <Button
            className="d-block ms-auto btn-sm"
            variant="dark"
            // onClick={() => addItemToCart(data)}
          >
            <ShoppingCartIcon />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
