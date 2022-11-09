// import dataRoadmap from '../assets/fake-data/data-roadmap';
// import PageTitle from '../components/pagetitle';
import '../scss/roadmap.scss'
import RoadMapNew from './RoadMapNew'
function RoadMapOne(props) {
    const dataRoadmap = [
        {
            id: 1,
            time: 'Q2 2022',
            list: [
                'Full Security audit',
                'Develop game concept ',
                'Verification of all socials ',
                'Pre-sale website live',
                'Pre-sale live',
                '10,000+ Telegram members',
                'YouTube campaign',
                'Massive PR Marketing campaigns',
                'Sponsorships on crypto websites',
            ],
            positon: 'left',
            style: 'normal',
        },
        {
            id: 2,
            time: 'Q1 2022',
            list: [
                'Launch on Uniswap',
                'CMC & CG listing',
                'Tier 1 CEX listings',
                'Demo gameplay',
                'Influencer marketing',
                'Global game launch',
            ],
            positon: 'right',
            style: 'normal',
        },
        {
            id: 3,
            time: 'Q4 2022',
            list: [
                'Doge Rush NFT drop',
                'Third-Party Audits (Certik as the main one) ',
                'Large focus on the CEX partnerships ',
                'P2E leaderboard and giveaways',
                'influencers marketing push',
                'YouTube shoutouts from known influencers',
            ],
            positon: 'left',
        },
        {
            id: 4,
            time: 'Q3 2022',
            list: [
                'Doge Rush aims to be on all main exchanges',
                'Partnerships with top-tier gaming studios ',
                'Expanding Doge Rush',
                'Launch of Doge Rush AR Game',
            ],
            positon: 'right',
        },
    ]
    return (
        <div className='page-roadmap'>
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
                    Doge Rush roadmap is a high-level breakdown of the actions
                    we’ve taken, the milestones we’ve unlocked, and the goals
                    we’re striving to achieve our vision for the Doge Rush Game
                    and the $DR token.
                </p>
            </div>

            <RoadMapNew data={dataRoadmap} />
        </div>
    )
}

export default RoadMapOne
