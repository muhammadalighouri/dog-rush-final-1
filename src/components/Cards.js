// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper'
import '../scss/card.scss'
const Cards = () => {
    const videos = [
        'images/video/1-unseen.mp4',

        'images/video/2.mp4',
        'images/video/3.mp4',
    ]
    return (
        <>
            <section className='cards'>
                <div className='heading'>
                    <h1>OUR GOAL</h1>
                </div>
                <div className='container'>
                    <div className='cards__grid'>
                        <Swiper
                            spaceBetween={0}
                            effect={'fade'}
                            navigation={false}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[EffectFade, Navigation, Pagination]}
                            className='mySwiper'
                        >
                            {videos.map((video, index) => {
                                return (
                                    <SwiperSlide>
                                        <div key={index} className='item'>
                                            <span className='one'></span>
                                            <span className='two'></span>
                                            <span className='three'></span>
                                            <span className='four'></span>
                                            <video
                                                controls={false}
                                                loop={true}
                                                autoPlay={true}
                                                muted={true}
                                                playsInline={true}
                                                height='400px'
                                                src={video}
                                            ></video>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>

                        <div className='item'></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cards
