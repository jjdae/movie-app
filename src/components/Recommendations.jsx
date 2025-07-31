import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';




// import required modules
import { Autoplay, Navigation, FreeMode  } from 'swiper/modules';

const Recommendations = () => {
    const API_KEY=process.env.REACT_APP_API_KEY;
    const [recommend, setRecommend] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getRecommendations = async () => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/550/recommendations?api_key=${API_KEY}&language=ko`);
            setRecommend(response.data.results);
            console.log(response.data.results);
            setIsLoading(false);
        } catch (error) {
            console.error("추천 영화 가져오기 실패:", error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getRecommendations();       
    }, []);

    return (
        <div className='recommendations'>
            <h2>추천 영화</h2>
            <div className="recommendationList">
                {isLoading ? (<div className='loading'>Loading...</div>):(
                   <div className="swiper-navigation">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={5}
                           
                            autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            }}
                            speed={10000}
                            loop={true}

                             navigation={{
                                nextEl:'.swiperNext',
                                prevEl:'.swiperPrev'
                             }}
                              breakpoints={{
                                // when window width is >= 320px
                               480: {
                                slidesPerView: 3,
                                spaceBetween: 20
                                },
                                // when window width is >= 480px
                               780: {
                                slidesPerView: 4,
                                spaceBetween: 10
                                },
                                // when window width is >= 640px
                               1240: {
                                slidesPerView: 5,
                                spaceBetween: 5
                                }
                            }} 
                             freeMode={true}
      grabCursor={true}

                            modules={[Navigation, Autoplay, FreeMode]}
                            className="mySwiper"
                        >
                            {recommend.map((movie) => (
                                <SwiperSlide key={movie.id}>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                    <h3>{movie.title}</h3>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="navigationWrap">
                            <div className="swiperNext"><GrFormNext className='icon'/></div>
                            <div className="swiperPrev"><GrFormPrevious className='icon' /></div>
                        </div>
                   </div>
                )}
            </div>
        </div>
    );
};

export default Recommendations;