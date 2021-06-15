import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="New Apple iPhone 11 (128GB) - Green"
          price={899}
          image="https://images-eu.ssl-images-amazon.com/images/I/41R0o8pGJjL._SY445_SX342_QL70_FMwebp_.jpg"
        />{" "}
        <Product
          id="2"
          title="2021 Apple 11-inch iPad Pro with Apple M1 chip"
          price={1199}
          image="https://images-eu.ssl-images-amazon.com/images/I/41viAWscfNS._SY445_SX342_QL70_FMwebp_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Dettol Body Wash and Shower Gel, Cool - 250ml"
          price={39}
          image="https://m.media-amazon.com/images/I/71bRXn40vIL._AC_AA180_.jpg"
        />{" "}
        <Product
          id="4"
          title="Ikigai: The Japanese secret to a long and happy life"
          price={29}
          image="https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg"
        />{" "}
        <Product
          id="5"
          title="Philips Daily Collection HD9218 Air Fryer"
          price={139}
          image="https://images-eu.ssl-images-amazon.com/images/I/41VpxevBiuL._SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Godrej Germ Protection Liquid Handwash Refill, 1500ml"
          price={9}
          image="https://m.media-amazon.com/images/I/61w7FF927gL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="7"
          title="Beardo Godfather Perfume for Men, 100 ml"
          price={199}
          image="https://images-na.ssl-images-amazon.com/images/I/51jjee8UvEL._SL1080_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="8"
          title="Samsung Curved Monitor Ultrawide QLED"
          price={699}
          image="https://images-eu.ssl-images-amazon.com/images/I/41jaaiEKb6L._SY300_SX300_QL70_FMwebp_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
