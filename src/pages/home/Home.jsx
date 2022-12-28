import React from "react";
import Helmet from "../../components/helmet/Helmet";
import Slider from "../../components/slider/Slider";

const Home = () => {
  return (
    <Helmet title="Home">
      <>
        <Slider />
      </>
    </Helmet>
  );
};

export default Home;
