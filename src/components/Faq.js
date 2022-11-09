import Accordion from '@material-ui/core/Accordion'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { FAQ } from '../assests/data'
import '../scss/faq.scss'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}))

const Faq = () => {
    const classes = useStyles()
    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])
    return (
        <>
            <section id='faq' className='accordian'>
                {/* <svg
          // xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="layer"
          x="0px"
          y="0px"
          viewBox="0 0 1920 155"
          // style=""
          // xml:space="preserve"
          class="fn__svg replaced-svg"
        >
          <polygon
            class="st0"
            points="1920,120 1920,155 0,155 0,120 380,50 321,100 648,30 581,82 960,0 1339,82 1272,30 1599,100 1540,50   "
            style={{ fill: "#fff" }}
          ></polygon>
          <polygon
            class="st1"
            points="1920,120 1920,155 0,155 0,120 360,60 321,100 619,43 581,82 960,20 1339,82 1301,43 1599,100 1560,60   "
            style={{ fill: "#feeb1a" }}
          ></polygon>
        </svg>
        <svg
          // xmlns="http://www.w3.org/2000/svg"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Layer_2"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100"
          // style="enable-background:new 0 0 1920 100;"
          // xml:space="preserve"
          class="fn__svg bottom replaced-svg"
        >
          <polygon class="st0" points="0,0 840,0 810,100 0,1 "></polygon>
          <polygon
            class="st0"
            points="1920,0 1080,0 1110,100 1920,1 "
          ></polygon>
        </svg> */}
                <div className='heading'>
                    <h1 data-aos='fade-down' className='aos-init aos-animate'>
                        FAQs
                    </h1>
                    <p>Wanna know more? Look no further</p>
                </div>
                <div className='container'>
                    <div className='accordian__grid'>
                        <div className='end'>
                            <div
                                style={{ width: '100%' }}
                                className={classes.root}
                            >
                                {FAQ.map((item, i) => {
                                    return (
                                        <Accordion key={i}>
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls='panel1a-content'
                                                id='panel1a-header'
                                            >
                                                <Typography
                                                    className={classes.heading}
                                                >
                                                    {item.q}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography>
                                                    {item.ans}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    )
                                })}
                            </div>
                        </div>
                        {/* <div className="start">
              <div className="img">
                <img src="/images/nft/4.jpeg" width="100%" alt="" />
              </div>
            </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Faq
