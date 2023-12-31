import React from "react";
import img1 from "../../assets/package/1.jpg";
import "./Package.css";
import { FaStar, FaClock } from "react-icons/fa";

export default function Product(prop) {
  return (
    <div className="card single">
      <div className="pack_image">
        <img src={prop.imageURL} alt="image1" />
      </div>
      <div className="package-hover">
        <div className="pull-left">{prop.country}</div>
        <div className="pull-right">
          <span className="pack_price">{prop.price}</span>
        </div>
        <div className="rating">
          <i>
            <FaStar />
          </i>
          <i>
            <FaStar />
          </i>
          <i>
            <FaStar />
          </i>
          <i>
            <FaStar />
          </i>
          <i>
            <FaStar />
          </i>
        </div>
        <span className="time_zone">
          <i><FaClock /></i>
          {prop.time}
        </span>
        <p>{prop.description}</p>
        <a className="btn-bg">Book Now</a>
      </div>
    </div>
  );
}