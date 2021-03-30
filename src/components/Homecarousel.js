import React, {Component, useState, useEffect} from 'react';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "blue" }}
        onClick={onClick}
      />
    );
  }
  function Homecarousel(){
// export default class Homecarousel extends Component {

    var settings = {
      // dots: true,
      infinite: false,
      // autoplay: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div >
        <div class="card mb-3 mx-2">
          <img class="card-img-top"
            src="image/kutta.jpg" style={{ height:170,}} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">hhhh</h4>
            <p class="card-text">hhhhhhhhhhhh</p>
            <p class="card-text">hhhhhhhhhhhhhh</p>
        </div>
      </div>
      
          </div>
          <div >
        <div class="card mb-3 mx-2">
          <img class="card-img-top"
            src="image/image5.jpg" style={{ height:170,}} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">hhhh</h4>
            <p class="card-text">hhhhhhhhhhhh</p>
            <p class="card-text">hhhhhhhhhhhhhh</p>
        </div>
      </div>
      
          </div>
          <div >
        <div class="card mb-3 mx-2">
          <img class="card-img-top"
            src="image/image9.jpg" style={{ height:170,}} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">hhhh</h4>
            <p class="card-text">hhhhhhhhhhhh</p>
            <p class="card-text">hhhhhhhhhhhhhh</p>
        </div>
      </div>
      
          </div>
          <div >
        <div class="card mb-3 mx-2">
          <img class="card-img-top"
            src="image/nature.jpg" style={{ height:170,}} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">hhhh</h4>
            <p class="card-text">hhhhhhhhhhhh</p>
            <p class="card-text">hhhhhhhhhhhhhh</p>
        </div>
      </div>
      
          </div>
          <div >
        <div class="card mb-3 mx-2">
          <img class="card-img-top"
            src="image/stone.jpg" style={{ height:170,}} alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">hhhh</h4>
            <p class="card-text">hhhhhhhhhhhh</p>
            <p class="card-text">hhhhhhhhhhhhhh</p>
        </div>
      </div>
      
          </div>
        </Slider>
      </div>
    );

}
export default Homecarousel;