import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
// import Roadmap from "../components/Roadmap";
import AboutNft from '../components/AboutNft'
import Banner from '../components/Banner'
import Faq from '../components/Faq'
import Partners from '../components/Partners'
import RoadMapOne from '../components/RoadMapOne'
import Teams from '../components/Teams'
import Token from '../components/Token'
const Home = () => {
    const dataRoadmap = [
        {
            id: 1,
            time: 'Q2 2022',
            list: [
                {
                    text: 'Aenean tempor',
                },
                {
                    text: 'Fusce arcu maecenas',
                },
                {
                    text: 'Malesuada felis sem elementum',
                },
                {
                    text: 'Risus eu metus',
                },
            ],
            positon: 'left',
            style: 'normal',
        },
        {
            id: 2,
            time: 'Q1 2022',
            list: [
                {
                    text: 'Release website and logo',
                },
                {
                    text: 'Grow community',
                },
                {
                    text: 'Launch the project',
                },
                {
                    text: 'Social media setup',
                },
            ],
            positon: 'right',
            style: 'normal',
        },
        {
            id: 3,
            time: 'Q4 2022',
            list: [
                {
                    text: 'Aenean tempor',
                },
                {
                    text: 'Fusce arcu maecenas',
                },
                {
                    text: 'Malesuada felis sem elementum',
                },
                {
                    text: 'Risus eu metus',
                },
            ],
            positon: 'left',
        },
        {
            id: 4,
            time: 'Q3 2022',
            list: [
                {
                    text: 'Aenean tempor',
                },
                {
                    text: 'Fusce arcu maecenas',
                },
                {
                    text: 'Malesuada felis sem elementum',
                },
                {
                    text: 'Risus eu metus',
                },
            ],
            positon: 'right',
        },
        {
            id: 5,
            time: 'Q2 2022',
            list: [
                {
                    text: 'Aenean tempor',
                },
                {
                    text: 'Fusce arcu maecenas',
                },
                {
                    text: 'Malesuada felis sem elementum',
                },
                {
                    text: 'Risus eu metus',
                },
            ],
            positon: 'left',
        },
        {
            id: 6,
            time: 'Q1 2022',
            list: [
                {
                    text: 'Aenean tempor',
                },
                {
                    text: 'Fusce arcu maecenas',
                },
                {
                    text: 'Malesuada felis sem elementum',
                },
                {
                    text: 'Risus eu metus',
                },
            ],
            positon: 'right',
        },
        {
            id: 7,
            time: 'Q4 2022',
            list: [
                {
                    text: 'Aenean tempor',
                },
                {
                    text: 'Fusce arcu maecenas',
                },
                {
                    text: 'Malesuada felis sem elementum',
                },
                {
                    text: 'Risus eu metus',
                },
            ],
            positon: 'left',
        },
        {
            id: 8,
            time: 'Q3 2022',
            list: [
                {
                    text: 'Aenean tempor',
                },
                {
                    text: 'Fusce arcu maecenas',
                },
                {
                    text: 'Malesuada felis sem elementum',
                },
                {
                    text: 'Risus eu metus',
                },
            ],
            positon: 'right',
        },
        {
            id: 9,
            time: 'Q2 2022',
            list: [
                {
                    text: 'Aenean tempor',
                },
                {
                    text: 'Fusce arcu maecenas',
                },
                {
                    text: 'Malesuada felis sem elementum',
                },
                {
                    text: 'Risus eu metus',
                },
            ],
            positon: 'left',
        },
        {
            id: 10,
            time: 'Q1 2022',
            list: [
                {
                    text: 'Aenean tempor',
                },
                {
                    text: 'Fusce arcu maecenas',
                },
                {
                    text: 'Malesuada felis sem elementum',
                },
                {
                    text: 'Risus eu metus',
                },
            ],
            positon: 'right',
        },
    ]

    window.scrollTo(0, 0)
    return (
        <>
            <Navigation />
            <Banner />
            <AboutNft />
            <div className='top__bg'>
                {/* <RoadMap  /> */}
                <RoadMapOne data={dataRoadmap} />
                {/* <Roadmap /> */}
                {/* <Token /> */}
                {/* <Teams /> */}
            </div>

            <Partners />
            <Faq />

            <Footer />
        </>
    )
}

export default Home
