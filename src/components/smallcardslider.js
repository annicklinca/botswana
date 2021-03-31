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
            slidesToShow: 7,
            slidesToScroll: 7,
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
          <div class="ml-2 max-w-md mx-2 pt-4 h-32 p-1 block bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
     
            <a href="#"><p class="ml-16 text-green-700 font-bold mt-4">Gaborone</p></a>
           
           
            </div>
            
          </div>
          <div>
          <div class="ml-2 max-w-md mx-2 pt-4 h-32 p-1 block bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
     
            <a href="#"><p class="ml-16 text-green-700 font-bold mt-4">Francistown</p></a>
           
           
            </div>
            
          </div>
          <div>
          <div class="ml-2 max-w-md mx-2 pt-4 h-32 p-1 block bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            <a href="#">   <p class="ml-16 text-green-700 font-bold mt-4">Maun</p></a>

            </div>
            
          </div>
          <div>
          <div class="ml-2 max-w-md mx-2 pt-4 h-32 p-1 block bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
           <a href="#">  <p class="ml-16 text-green-700 font-bold mt-4">Lobaste</p></a>

            </div>
            
          </div>
          <div>
          <div class=" ml-2 max-w-md mx-2 pt-4 h-32 p-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
          <a href="#"> <p class="ml-16 text-green-700 font-bold mt-4">Selebi Phikwe</p></a>
       
            </div>
          </div>
          <div>
          <div class="ml-2 max-w-md mx-2 pt-4 h-32 p-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            <a href="#"> <p class="ml-16 text-green-700 font-bold mt-4">Serowe</p></a>
      
            </div>
          </div>
          <div>
          <div class="max-w-md mx-2 pt-4 h-32 p-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            <a href="#">  <p class="ml-16 text-green-700 font-bold mt-4">Molepole</p></a>
            </div>
          </div>
          <div>
          <div class="max-w-md mx-2 pt-4 h-32 p-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            <a href="#"><p class="ml-16 text-green-700 font-bold mt-4">Mahalapye</p></a>
      
            </div>
          </div>
          <div>
          <div class="max-w-md mx-2 pt-4 h-32 p-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
            <a href="#">  <p class="ml-16 text-green-700 font-bold mt-4">Kanye</p></a>
    
            </div>
          </div>
          <div>
          <div class="max-w-md mx-2 pt-4 h-32 p-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
             <a href="#"> <p class="ml-16 text-green-700 font-bold mt-4">Palapye</p></a>
     
            </div>
          </div>
          <div>
          <div class="max-w-md mx-2 pt-4 h-32 p-1 bg-white rounded-xl shadow-md overflow-hidden md:max-w-full">
             <a href="#"> <p class="ml-16 text-green-700 font-bold mt-4">Jwaneng</p></a>
         
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}