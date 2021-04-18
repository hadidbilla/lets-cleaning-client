import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import OurServices from "../OurSevices/OurServices";
import Review from "../Review/Review";
import ServiceDemo from "../ServiceDemo/ServiceDemo";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div className="">
      <div className="container">
        <Header></Header>
        <OurServices></OurServices>
        <ServiceDemo></ServiceDemo>
        <Team />
        <Review></Review>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
