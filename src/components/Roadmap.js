import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useRef, useState } from 'react'
import { roadmap } from '../assests/data'
import '../scss/roadmap.scss'

const Roadmap = () => {
    const [first, setfirst] = useState(null)
    const sec = useRef()
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        })
        // how to check page distance from top
    }, [])

    window.addEventListener('scroll', () => {
        const distance = window.scrollY
        console.log(distance)
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop
        if (scrollTop > 2100 && scrollTop < 3700) {
            setfirst(scrollTop)
        }

        const scrollHeight = document.documentElement.scrollHeight
        const clientHeight = document.documentElement.clientHeight
        const scrolled = scrollTop / (scrollHeight - clientHeight)
    })

    return (
        <>
            <section id='roadmap' className='roadmap' ref={sec}>
                <div className='heading' style={{ overflow: 'hidden' }}>
                    <h1 data-aos='fade-down' class='aos-init aos-animate'>
                        ROADMAP
                    </h1>
                    <p
                        data-aos='fade-up'
                        data-aos-duration='2000'
                        data-aos-easing='ease-out'
                        class='aos-init aos-animate'
                    >
                        Doge Rush roadmap is a high-level breakdown of the
                        actions we’ve taken, the milestones we’ve unlocked, and
                        the goals we’re striving to achieve our vision for the
                        Doge Rush Game and the $DR token.
                    </p>
                </div>
                <div className='container'>
                    <div className='roadmap__grid'>
                        {roadmap.map((item, i) => {
                            return (
                                <div
                                    className={`item no${i + 1}`}
                                    data-aos='fade-up'
                                >
                                    <h2>Phase {i + 1}</h2>
                                    <ul>
                                        {item.points.map((item, i) => {
                                            return <li key={i}>{item}</li>
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Roadmap
