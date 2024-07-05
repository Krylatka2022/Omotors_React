import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Carousel/Carousel.css';
// import VideoCarousel from '../VideoCarousel/VideoCarousel';


const PhotoCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="photo-slide">
                    <img src="/images/background.png" alt="Photo 1"
                        // style={{ width: '100%', height: 'auto' }}
                        className="carousel-image"
                    />
                </div>
                <div className="photo-slide">
                    <img src="/images/background.png" alt="Photo 2"
                        // style={{ width: '100%', height: 'auto' }}
                        className="carousel-image" />
                </div>
                <div className="photo-slide">
                    <img src="/images/preview3.jpg" alt="Photo 3"
                        // style={{ width: '100%', height: 'auto' }}
                        className="carousel-image" />
                </div>
            </Slider>
        </div>
    );
}

export default PhotoCarousel;
