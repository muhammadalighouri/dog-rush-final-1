import AOS from 'aos'
import 'aos/dist/aos.css'
import { Back, gsap } from 'gsap'
import { Power4 } from 'gsap/gsap-core'
import { useEffect, useRef, useState } from 'react'
import { ImCross } from 'react-icons/im'
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { collection } from '../assests/data'
import '../scss/Collection.scss'

const Collection = ({ ease }) => {
    const [modal, setModal] = useState(false)
    const [id, setId] = useState([])
    const modalanim = useRef(null)
    const [item, setItem] = useState(3)
    const [padding, setPadding] = useState(40)
    function sliderResponsive() {
        if (window.innerWidth > 1200) {
            setItem(4)
        }
        if (window.innerWidth < 1000) {
            setItem(2.5)
        }
        if (window.innerWidth < 1200) {
            setItem(3)
        }
        if (window.innerWidth < 780) {
            setItem(2)
            setPadding(10)
        }
        if (window.innerWidth < 520) {
            setItem(1)
            setPadding(60)
        }
    }
    const crossBtn = () => {
        setModal(false)
        tl.to('.widdd', 0, {
            width: 0,
            ease: Power4.easeOut,
        })
        setId(null)
    }
    useEffect(() => {
        sliderResponsive()
    }, [item])
    console.log(id)
    const tl = new gsap.timeline()
    const handleModel = (idd) => {
        const filterItem = collection.filter((ite) => {
            return ite.id === idd
        })

        setModal(true)
        setId(filterItem)
    }
    window.addEventListener('scroll', () => {})
    useEffect(() => {
        tl.to('.contain', 0.5, {
            scale: modal ? 1 : 0,
            ease: Back.easeOut,
            opacity: modal ? 1 : 0,
            // delay: 100,
        })
        tl.fromTo(
            '.pop-image',
            0.5,
            {
                x: -50,
                scale: 1,
                ease: Power4.easeIn,
            },
            {
                x: 0,
                scale: 1,
                ease: Power4.easeIn,
            },
        )
        tl.from('.widdd', 0.5, {
            width: 0,
            ease: Power4.easeOut,
        })
    }, [modal])

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        })
    }, [])
    SwiperCore.use([Autoplay])

    return (
        <>
            <section className='collection' id='collection'>
                <img src='images/topGrad.png' alt='' />
                <div className='heading' style={{ overflow: 'hidden' }}>
                    <h1 data-aos='fade-down' class='aos-init aos-animate'>
                        The CHARACTERS
                    </h1>
                    <p
                        data-aos='fade-up'
                        data-aos-duration='2000'
                        data-aos-easing='ease-out'
                        class='aos-init aos-animate'
                    >
                        The Collection you all have been waiting for!
                    </p>
                </div>
                <div className='container'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={item}
                        spaceBetween={20}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 0,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        parallax={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination]}
                        className='mySwiper'
                    >
                        {collection.map((item, i) => {
                            return (
                                <SwiperSlide key={i} className='item'>
                                    <div
                                        className={`nft `}
                                        data-aos-delay={10 * i}
                                        onClick={() => handleModel(item.id)}
                                    >
                                        <div className='top'>
                                            <img
                                                src='images/logo.gif'
                                                alt=''
                                            />
                                            <h4>{item.name}</h4>
                                        </div>
                                        <div className='img'>
                                            <img
                                                src={
                                                    item.path
                                                        ? item.path
                                                        : `/images/nft/2.png`
                                                }
                                                alt=''
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div
                    className='pop'
                    style={
                        modal
                            ? {
                                  transform: 'translate(-50%, -50%) scale(1)',
                                  opacity: '1',
                              }
                            : {
                                  transform: 'translate(-50%, -50%) scale(0)',
                                  opacity: '0',
                              }
                    }
                    onClick={() => setModal(false)}
                >
                    {id?.map((item, i) => {
                        return (
                            <div className='contain'>
                                <ImCross onClick={() => setModal(false)} />
                                <div className='head'>
                                    <h3>{item.name}</h3>
                                    <p>
                                        Humanoids Back on planet Earth, a new
                                        version of humans was created. Humanoids
                                        developed human abilities by using
                                        complex technologies and became V2.0 of
                                        humans. They are full of creativity,
                                        innovation and improvisation. Their
                                        human nature allows them to triumph over
                                        their opponents, although sometimes
                                        their emotions get the best of them.
                                    </p>
                                </div>
                                <div className='grid'>
                                    <div className='img'>
                                        <img
                                            data-aos='zoom-out'
                                            src={item.path}
                                            alt=''
                                            className='pop-image'
                                        />
                                    </div>
                                    <div className='detail'>
                                        <ul>
                                            {[
                                                12, 32, 43, 12, 32, 1, 343, 56,
                                                76, 78, 79, 89,
                                            ].map((ite) => {
                                                return (
                                                    <li>
                                                        <h4>Power</h4>
                                                        <div>
                                                            <div
                                                                className='widdd'
                                                                style={{
                                                                    width: `${Math.floor(
                                                                        Math.random() *
                                                                            100,
                                                                    )}%`,
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Collection
