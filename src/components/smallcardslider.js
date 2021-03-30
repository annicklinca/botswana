import React, { Component } from "react";
import Slider from "react-slick";

export default class SmallcardSlider extends Component {
  render() {
    var settings = {
      // dots: true,
      infinite: false,
      // speed: 100,
      slidesToShow: 6,
      autoplay: true,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    return (
      <div>
        <h2></h2>
        <Slider {...settings}>
          <div>
          <div class="ml-2 max-w-md mx-2 p-1 block bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            
            <img class="  text-white ml-5" style={{width: 60, height: 70}} src="/image/kutta.jpg"/>
          
            <p class="ml-5">hhhhhhhhh</p>
           
           
            </div>
          </div>
          <div>
          <div class=" ml-2 max-w-md mx-2 p-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            
            <img class="  text-white ml-5" style={{width: 60, height: 70}} src="/image/stone.jpg"/>
          
            <p class="ml-5">hhhhhhhhhh</p>
           
           
            </div>
          </div>
          <div>
          <div class="ml-2 max-w-md mx-2 p-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            
            <img class="  text-white ml-5" style={{width: 60, height: 70}} src="/image/nature.jpg"/>
          
            <p class="ml-5">hhhhhhhhh</p>
           
           
            </div>
          </div>
          <div>
          <div class="max-w-md mx-2 p-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            
            <img class="  text-white ml-5" style={{width: 60, height: 70}} src="/image/image5.jpg"/>
          
            <p class="ml-5">hhhhhhhhhhhhh</p>
           
           
            </div>
          </div>
          <div>
          <div class="max-w-md mx-2 p-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            
            <img class="  text-white ml-5" style={{width: 60, height: 70}} src="/image/image9.jpg"/>
          
            <p class="ml-5">hhhhhhhhhh</p>
           
           
            </div>
          </div>
          <div>
          <div class="max-w-md mx-2 p-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            
            <img class="  text-white ml-5" style={{width: 60, height: 70}} src="/image/nature.jpg"/>
          
            <p class="ml-5">hhhhhhhhhh</p>
           
           
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}