import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BackgroundSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="slider-container" style={{ width: "100%", height: "50px" }}>
      <Slider {...settings}>
        <div>
          <img src={"/imgs/bc1.jpg"} alt="Slide 1" style={{ width: "100%", height: "500px", objectFit: "cover",borderRadius:"20px"}} />
        </div>
        <div>
          <img src="/imgs/bc2.jpg" alt="Slide 2" style={{ width: "100%", height: "500px", objectFit: "cover",borderRadius:"20px"}} />
        </div>
        <div>
          <img src="/imgs/bc3.jpg" alt="Slide 3" style={{ width: "100%", height: "500px", objectFit: "cover",borderRadius:"20px"}} />
        </div>
      </Slider>
    </div>
  );
};

export default BackgroundSlider;
