import PDF from './WhitePaper_2.pdf'
const Whitepaper = () => {

    return (
        <div className='fifth'>
            <div className='heading' style={{ overflow: 'hidden' }}>
                <h1>100% SECURE</h1>
                <p>
                    Contract fully audited by Solid Proof and shown to be 100% secure. Team fully verified by CoinSniper to ensure anti-rug and complete project security.
                </p>
                <div className='btn__container'>
                    <button onClick={() => window.open('https://app.solidproof.io/projects/dogerush', '_blank')}>Audit</button>
                    <a style={{
                        height: '45px',
                        borderRadius: '10px',
                        color: 'rgb(255, 255, 255)',
                        border: '3px solid rgb(0, 133, 255)',
                        background: 'rgb(0, 133, 255)',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        justifySelf: 'center',
                        transition: 'all 0.3s ease 0s',
                        padding: '0px 40px',
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '18px',
                        fontFamily: '\'Barlow-medium\''
                    }} href={PDF} >Whitepaper</a>
                    <button>KYC</button>
                </div>
            </div>
        </div>
    )
}

export default Whitepaper
