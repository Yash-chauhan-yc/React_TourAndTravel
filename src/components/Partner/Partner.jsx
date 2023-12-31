import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../../assets/partner/1.jpg";
import img2 from "../../assets/partner/2.jpg";
import img3 from "../../assets/partner/3.jpg";
import img4 from "../../assets/partner/4.jpg";
import img5 from "../../assets/partner/5.jpg";
import img6 from "../../assets/partner/6.jpg";
import "./Partner.css";


export default function Partner() {
  return (
    <section id="partner" className="section-padding">
      <div className="partner-logo">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav ={false}
          stagePadding={480}
          dots={false}
          rewind={true}
        >
          <div class="item">
            <img src={img1} />
          </div>
          <div class="item">
            <img src={img2} />
          </div>
          <div class="item">
            <img src={img3} />
          </div>
          <div class="item">
            <img src={img4} />
          </div>

          <div class="item">
            <img src={img5} />
          </div>
          <div class="item">
            <img src={img6} />
          </div>
          <div class="item">
            <img src={img1} />
          </div>
          <div class="item">
            <img src={img2} />
          </div>
          <div class="item">
            <img src={img3} />
          </div>
          <div class="item">
            <img src={img4} />
          </div>

          <div class="item">
            <img src={img5} />
          </div>
          <div class="item">
            <img src={img6} />
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
}
