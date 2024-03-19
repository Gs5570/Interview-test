import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from '/media/thumb1.png';
import img2 from '/media/thumb2.png';

import '../styles/carousel.css';
export default function MyCarousel() {
  const responsive = {
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 320 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      centerMode={true}
      additionalTransfrom={0}
      swipeable={false}
      renderArrowsWhenDisabled
      // autoPlay={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      // rtl={true}
      ssr={true}
      infinite={true}
      arrows={true}
      // partialVisible={false}
      // autoPlay={this.props.deviceType !== 'mobile' ? true : false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      // containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item"
      sliderClass="carousel-slider"
    >
      <div className="carousel-item">
        <img src={img1} alt="carousel img" />
      </div>
      <div className="carousel-item">
        <img src={img2} alt="carousel img" />
      </div>
      <div className="carousel-item">
        <img src={img1} alt="carousel img" />
      </div>
      <div className="carousel-item">
        <img src={img2} alt="carousel img" />
      </div>
      {/* <SwiperMyCarousel /> */}
    </Carousel>
  );
}
