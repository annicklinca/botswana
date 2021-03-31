import React, {Component, useState, useEffect} from 'react';
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "skyblue" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "skyblue" }}
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
          <div>
        <div class="card mb-3 mx-2">
          <img class="card-img-top"
            src="image/drain.jpg" style={{ height:170,}} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title text-green-700 text-md font-bold">Chobe National Park</h5>
            <p class="card-text">Chobe National Park is in northern Botswana near the vast, inland Okavango Delta</p>
            <p class="card-text">It's known for its large herds of elephants and Cape buffalo. </p>
        </div>
      </div>
      
          </div>
          <div >
        <div class="card mb-3 mx-2">
          <img class="card-img-top"
            src="image/rock.jpg" style={{ height:170,}} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title text-green-700 font-bold">Tuli Block</h5>
            <p class="card-text">The Tuli Block is a narrow fringe of land at Botswana's eastern border wedged between Zimbabwe in the north and east and South Africa in the south.</p>
            <p class="card-text"></p>
        </div>
      </div>
      
          </div>
          <div >
        <div class="card mb-3 mx-2">
          <img class="card-img-top"
            src="image/tsodilo.jpeg" style={{ height:170,}} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title text-green-700 font-bold">Tsodilo Hills</h5>
            <p class="card-text">The Tsodilo Hills are a UNESCO World Heritage Site, consisting of rock art, rock shelters, depressions, and caves.</p>
            <p class="card-text"> Tsodilo is most visited in Botswana</p>
        </div>
      </div>
      
          </div>
          <div >
        <div class="card mb-3 mx-2">
          <img class="card-img-top"
            src="image/nature.jpg" style={{ height:170,}} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title text-green-700 font-bold text-md">Okovanga Delta</h5>
            <p class="card-text">The Okavango Delta is a vast inland river delta in northern Botswana.</p>
            <p class="card-text">t's known for its sprawling grassy plains, which flood seasonally, becoming a lush animal habitat</p>
        </div>
      </div>
      
          </div>
          <div >
        <div class="card mb-3 mx-2">
          <img class="card-img-top"
            src="image/stone.jpg" style={{ height:170,}} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title text-green-700 font-bold">Linyati Wetlands</h5>
            <p class="card-text">In the northeast of Chobe National Park, the Linyanti River forms a swamp area similar to that of the Okavango Delta but on a much smaller scale. </p>
            <p class="card-text"></p>
        </div>
      </div>
      
          </div>
        </Slider>
      </div>
    );

}
export default Homecarousel;