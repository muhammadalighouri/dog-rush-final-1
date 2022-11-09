import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../scss/aboutnft.scss'
const AboutNft = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 100,
        })
    }, [])

    return (
        <>
            {/* <div className="mar">
        <Marquee
          Reverse={false}
          speed={100}
          background="#fff"
          height="80px"
          gradient={false}
        >
          {[1, 2, 3, 4, 5, 6].map((item, index) => {
            return (
              <h1
                style={{
                  textTransform: "uppercase",
                  marginRight: "20px",
                  fontWeight: "700",
                  fontSize: "20px !important",
                  width: "400px",
                  color: "black",
                }}
              >
                Skeleton Shop
              </h1>
            );
          })}
        </Marquee>
      </div> */}
            <section id='about' className='about'>
                <div className='container'>
                    <div className="about__grid first">
                        <div
                            className="img aos-init aos-animate"
                            data-aos="zoom-out-up"
                            data-aos-delay="400"
                        >
                            <img src="/images/sections/A.jpg" alt="" />
                        </div>
                        <div data-aos="fade-up" className="aos-init aos-animate details">
                            <div>
                                <div>
                                    <span>THE STORY</span>
                                </div>
                                <h1>WHAT IS DOGE RUSH?</h1>
                            </div>
                            <p>
                                <span>
                                    Doge Rush is the world's first P2E single-player mobile runner
                                    game with NFT assets, Collectible coins have been a feature in
                                    side-scrolling runners from the beginning; Sonic Dash had
                                    rings, and Super Mario had coins. What if those coins were
                                    real, bonafide currency? Doge Rush rewards you for every coin
                                    you collect with the opportunity to pile up $DR coins for
                                    in-game prizes and real-world cash.
                                </span>
                                <span>
                                    In our groundbreaking P2E runner, every coin you collect
                                    in-game goes right to your wallet at the end of the level. For
                                    the first time, play a hilarious side-scrolling runner that’s
                                    worth your time—literally.
                                </span>
                            </p>
                            <div className="btns">
                                <a
                                    style={{ display: "inline-block" }}
                                    href="https://t.me/dogerushchat"
                                    target={"_blank"}
                                    class="item-desc aos-init aos-animate"
                                    data-aos="notific-right"
                                >
                                    <button>Join Community</button>
                                </a>
                                <Link
                                    style={{ display: "inline-block" }}
                                    to="/buy"
                                    class="item-desc aos-init aos-animate"
                                    data-aos="notific-right"
                                >
                                    <button>Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="about__grid even">
                        <div
                            className="img aos-init aos-animate"
                            data-aos="zoom-out-up"
                            data-aos-delay="400"
                        >
                            <img src="/images/sections/B.jpg" alt="" />
                        </div>
                        <div data-aos="fade-up" className="aos-init aos-animate details">
                            <div>
                                <div>
                                    <span>THE STORY</span>
                                </div>
                                <h1>HOW TO PLAY?</h1>
                            </div>
                            <p>
                                <span>
                                    You play as Doge. Your mission? Escape Elon Musk while dashing
                                    through the derelict subways of a dystopian underworld. Yeah,
                                    Doge Rush has serious meme potential.
                                </span>
                                <span>
                                    Control Doge by swiping up, down, left, and right to collect
                                    coins while you evade Elon’s clutches. As you progress through
                                    the game, the pace grows faster; more obstacles get in your
                                    way. The harder the game gets, the better your opportunity to
                                    earn points, and as a result, more crypto.
                                </span>
                                <span>
                                    Doge Rush has a variety of unique characters with upgradable
                                    NFT skins, which differ in prices and est. ROI that players
                                    will get. Upgrade your character to higher levels, fuse it
                                    with another one to boost your earnings from playing, or sell
                                    it to other players via the Doge Rush marketplace.
                                </span>
                                <span>
                                    The ability
                                    of this game is insane; get into $DR before it goes viral.
                                </span>
                            </p>
                            <div className="btns">
                                <a
                                    style={{ display: "inline-block" }}
                                    href="https://t.me/dogerushchat"
                                    target={"_blank"}
                                    class="item-desc aos-init aos-animate"
                                    data-aos="notific-right"
                                >
                                    <button>Join Community</button>
                                </a>
                                <Link
                                    style={{ display: "inline-block" }}
                                    to="/buy"
                                    class="item-desc aos-init aos-animate"
                                    data-aos="notific-right"
                                >
                                    <button>Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="about__grid">
                        <div
                            className="img aos-init aos-animate"
                            data-aos="zoom-out-up"
                            data-aos-delay="400"
                        >
                            <img src="/images/sections/C.jpg" alt="" />
                        </div>
                        <div data-aos="fade-up" className="aos-init aos-animate details">
                            <div>
                                <div>
                                    <span>THE STORY</span>
                                </div>
                                <h1>PLAY TO EARN </h1>
                            </div>
                            <p>
                                <span>
                                    Play and Earn crypto in the free-to-play mode or amplify your
                                    earnings by acquiring NFTs which differ in rarity and
                                    estimated ROI.
                                </span>
                                <span>
                                    The appeal of Doge Rush extends far beyond the lulz—the stakes
                                    are high because when you do well, you can earn real money.
                                </span>

                                <span>
                                    Think of all the time you sink into video games. If you were
                                    paid to play video games, you’d be making bank, right? Doge
                                    Rush gives gamers the chance to make real money. Play 2 Earn
                                    games like Doge Rush reward the time and effort you put into
                                    the game with the chance to earn $DR.
                                </span>
                            </p>
                            <div className="btns">
                                <a
                                    style={{ display: "inline-block" }}
                                    href="https://t.me/dogerushchat"
                                    target={"_blank"}
                                    class="item-desc aos-init aos-animate"
                                    data-aos="notific-right"
                                >
                                    <button>Join Community</button>
                                </a>
                                <Link
                                    style={{ display: "inline-block" }}
                                    to="/buy"
                                    class="item-desc aos-init aos-animate"
                                    data-aos="notific-right"
                                >
                                    <button>Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutNft
