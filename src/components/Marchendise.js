import '../scss/marchendise.scss'
const Marchendise = () => {
    return (
        <>
            <section className='march'>
                <div className='container'>
                    <div className='heading' style={{ overflow: 'hidden' }}>
                        <h1 data-aos='fade-down' class='aos-init aos-animate'>
                            100% Secure
                        </h1>
                        <p
                            data-aos='fade-up'
                            data-aos-duration='2000'
                            data-aos-easing='ease-out'
                            class='aos-init aos-animate'
                        >
                            RobotEra building a sandbox-like planet-rebuilding
                            metaverse. You will become a robot, managing your
                            own land and participating in the creationof the
                            world. It can also acquire resources from the land,
                            create robot companions. Here, create everything you
                            can imagine and start a new era with other robots.
                        </p>
                        <button>Read Whitepaper!</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Marchendise
