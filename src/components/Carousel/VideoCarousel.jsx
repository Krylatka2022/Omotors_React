import { useRef, useEffect, useState } from 'react';
import './Carousel.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoCarousel = () => {
    const videosRef = useRef([]);
    const audioRef = useRef(new Audio('/audios/audio.mp3'));
    const [isMuted, setIsMuted] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const handleMuteToggle = () => {
        if (audioRef.current) {
            if (isMuted) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
            setIsMuted(!isMuted);
        }
    };

    useEffect(() => {
        audioRef.current.muted = isMuted;
        if (!isMuted) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

        const handleBeforeUnload = () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isMuted]);

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div className="video-slide">
                    <video
                        ref={el => videosRef.current[0] = el}
                        width="100%"
                        height="auto"
                        autoPlay
                        loop
                        muted
                        poster="/images/preview1.jpg"
                    >
                        <source src="/videos/video1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video-slide">
                    <video
                        ref={el => videosRef.current[1] = el}
                        width="100%"
                        height="auto"
                        autoPlay
                        loop
                        muted
                        poster="/images/preview2.jpg"
                    >
                        <source src="/videos/video2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="video-slide">
                    <video
                        ref={el => videosRef.current[2] = el}
                        width="100%"
                        height="auto"
                        autoPlay
                        loop
                        muted
                        poster="/images/preview3.jpg"
                    >
                        <source src="/videos/video3.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </Slider>
            <button
                className="mute-button"
                onClick={handleMuteToggle}
                style={{
                    position: 'absolute',
                    top: '56%',
                    right: '10%',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    zIndex: 1
                }}
            >
                {isMuted ? 'Включить звук' : 'Отключить звук'}
            </button>
        </div>
    );
}

export default VideoCarousel;