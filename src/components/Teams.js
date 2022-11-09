import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { IoLogoLinkedin } from 'react-icons/io'
import { team } from '../assests/data'
import '../scss/team.scss'

const Teams = () => {
    const [item, setItem] = useState(1)
    const [padding, setPadding] = useState(40)
    const [offsetY, setOffsetY] = useState(0)
    const [presentTeam, setPresentTeam] = useState({})
    const [show, setshow] = useState(false)
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        sliderResponsive()
    }, [item])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    function sliderResponsive() {
        if (window.innerWidth > 1000) {
            setItem(4)
        }
        if (window.innerWidth < 1000) {
            setItem(3)
        }
        if (window.innerWidth < 780) {
            setItem(2)
        }
        if (window.innerWidth < 520) {
            setItem(1)
            setPadding(70)
        }
    }
    useEffect(() => {
        sliderResponsive()
    }, [])
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 100,
        })
    }, [])
    window.addEventListener('resize', () => {
        // sliderResponsive();
    })
    const teamModal = (item) => {
        setPresentTeam(item)
        setshow(true)
    }
    return (
        <>
            <section id='team' className='team'>
                <div
                    className='present__team'
                    style={{
                        position: 'fixed',
                        top: '0px',
                        left: '0px',
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.83)',
                        zIndex: '10000',
                        display: show ? 'grid' : 'none',
                        placeContent: 'center',
                        placeItems: 'center',
                    }}
                    onClick={() => setshow(false)}
                >
                    <div
                        className='item'
                        style={{
                            maxWidth: '550px',
                            background: 'rgb(4 17 29)',
                            padding: '50px 25px',
                            textAlign: 'center',
                            margin: '0px 10px',
                            boxShadow: 'rgba(0, 0, 0, 0.19) 0px 0px 10px',
                            borderRadius: '32px',
                        }}
                    >
                        {/* <div className="img" style={{ textAlign: "center" }}>
              <img
                style={{
                  width: "150px",
                  borderRadius: "1000px",
                  margin: "auto",
                  height: "150px",
                  objectFit: "contain",
                }}
                src={presentTeam?.path}
                alt=""
              />
            </div> */}
                        <div>
                            {' '}
                            <h3
                                className='name'
                                style={{
                                    fontWeight: '500',
                                    textTransform: 'capitalize',
                                    fontSize: '2.2rem',
                                    textAlign: 'start',

                                    marginBottom: '7px',
                                    marginRight: '12px',
                                }}
                            >
                                {presentTeam?.name}
                            </h3>
                            <h4
                                style={{
                                    textTransform: 'capitalize',
                                    marginTop: '5px',
                                    textAlign: 'start',
                                    fontSize: '18px',

                                    fontWeight: '600',
                                    opacity: '.5',
                                }}
                            >
                                {presentTeam?.position}
                            </h4>
                            <p
                                style={{
                                    fontSize: '18px',
                                    marginTop: '10px',
                                    textAlign: 'start',
                                    lineHeight: '1.3',

                                    fontWeight: '100',
                                }}
                            >
                                {presentTeam?.desc}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='heading'>
                        <h1
                            data-aos='fade-down'
                            className='aos-init aos-animate'
                        >
                            Team
                        </h1>
                        {/* <p>The ones who are making everything happen.</p> */}
                    </div>
                    <div className='team__grid'>
                        {team.map((ite, ind) => {
                            return (
                                <div className='outer'>
                                    <div
                                        key={ind}
                                        className='item'
                                        data-aos='fade-up'
                                        data-aos-delay={150 * ind}
                                        data-aos-easing='ease-out'
                                        onClick={() => teamModal(ite)}
                                    >
                                        <div className='inner'>
                                            <div className='img'>
                                                <img
                                                    src={
                                                        'https://robotera.io/img/team-2.75ffda88.png'
                                                    }
                                                    alt=''
                                                />
                                            </div>
                                            <div className='detail'>
                                                <div>
                                                    {' '}
                                                    <h3
                                                        className='name'
                                                        style={{
                                                            fontSize: '20px',
                                                            fontWeight: '700',
                                                            textTransform:
                                                                'uppercase',
                                                        }}
                                                    >
                                                        {ite.name}
                                                    </h3>
                                                    <h4
                                                        style={{
                                                            fontWeight: '200',
                                                            textTransform:
                                                                'capitalize',
                                                            marginTop: '5px',
                                                            opacity: '.8',
                                                        }}
                                                    >
                                                        {ite.position}
                                                    </h4>
                                                </div>
                                                <div className='btns'>
                                                    {ite.twitter && (
                                                        <a
                                                            className='twitter'
                                                            href={ite.twitter}
                                                        >
                                                            <FaTwitterSquare />
                                                        </a>
                                                    )}
                                                    {ite.linkedin && (
                                                        <a
                                                            className='linkedin'
                                                            href={ite.linkedin}
                                                        >
                                                            <IoLogoLinkedin />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Teams
