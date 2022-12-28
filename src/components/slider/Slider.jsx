import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, EffectFade } from "swiper";
import "./slider.scss";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import sliderOne from "../../assets/img/slider1.jpg";
import sliderTwo from "../../assets/img/slide2.jpg";
import { Link } from "react-router-dom";
const data = [
  {
    img: sliderOne,
    title: "express yourself",
    text: "Some of our customers say that they trust us  because they believe us and always happy to buy our product.",
  },
  {
    img: sliderTwo,
    title: "owning your style",
    text: "You can buy our product without any hegitation because we always consus about our product quality .",
  },
];
const Slider = () => {
  return (
    <Swiper
      navigation={true}
      modules={[EffectFade, Navigation]}
      className="mySwiper slider"
      loop={true}
      loopFillGroupWithBlank={true}
      effect={"fade"}
    >
      {data.map(({ img, title, text }, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`img-${++index}`} />
          <Container className="slider__container">
            <div className="slider__inner">
              <h2> {title}</h2>
              <p> {text} </p>
              <Link to="/E-commerce-app/shop" className="shop__link">
                Shop Now
              </Link>
            </div>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
