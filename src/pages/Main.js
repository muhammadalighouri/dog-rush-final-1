import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavigationSec from '../components/NavigationSec'
import '../scss/glitch.scss'
import '../scss/main.scss'
import PDF from './WhitePaper_2.pdf'
const Main = () => {
    const [navToggler, setNavToggler] = useState(false)
    function barBtn() {
        setNavToggler(!navToggler)
    }
    const navigate = useNavigate()
    return (
        <>
            <section className='main'>
                <div className='glitch topBack'>
                    <div className='glitch__item'></div>
                    <div className='glitch__item'></div>
                    <div className='glitch__item'></div>
                    <div className='glitch__item'></div>
                    <div className='glitch__item'></div>
                </div>
                <NavigationSec text={'JOIN NOW!'} />
                <div className='container'>
                    <div className='grid'>
                        <div className='btns__container'>
                            <button onClick={() => navigate('/home')}>
                                HOME
                            </button>
                            <button onClick={() => navigate('/buy')}>
                                Buy Now
                            </button>
                            <a href={PDF} >Whitepaper</a>
                            <button onClick={() =>
                                window.open("https://t.me/dogerushcommunity", "_blank")
                            }>Telegram</button>
                        </div>
                    </div>
                </div>
                <p className='bottom'>
                    Copyright © 2022, Doge Rush | All Rights Reserved.
                </p>
            </section>
        </>
    )
}

export default Main
