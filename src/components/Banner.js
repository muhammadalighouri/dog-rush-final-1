import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../scss/banner.scss'
import '../scss/glitch.scss'
const Banner = ({ timeline, ease }) => {
    useEffect(() => {
        AOS.init({})
    }, [])
    const str =
        "OWN YOUR PIECE OF LAND IN THE MOST ANTICIPATED BYOVERSE OPEN WORLD GAME. YOUR LAND WILL GROW RESOURCES NECESSARY FOR PLAYERS TO ROAM THE WORLD AND FIND IT'S TREASURES"
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    }
    const caps = str.split(' ').map(capitalize).join(' ')
    const navigate = useNavigate()
    return (
        <>
            <section className='banner'>
                <div className='glitch topBack'>
                    <div className='glitch__item'></div>
                    <div className='glitch__item'></div>
                    <div className='glitch__item'></div>
                    <div className='glitch__item'></div>
                    <div className='glitch__item'></div>
                </div>
                <div className='container'>
                    <div className='hero__content'>
                        <div className='text__container'>
                            <h2>
                                <img src='images/logo/01-03.png' alt='' />
                            </h2>
                            <p>
                                <p>
                                    Welcome to the world of Doge Rush Where Elon
                                    Meets DogeCoin
                                </p>
                            </p>
                        </div>
                        <div className='btn__container'>
                            <div>
                                <button onClick={() => navigate('/buy')}>
                                    <span>Buy Now</span>
                                </button>
                                <button>
                                    <span onClick={() => navigate('/home')}>
                                        Whitepaper
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
