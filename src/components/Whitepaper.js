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
                    <button> Whitepaper</button>
                    <button>KYC</button>
                </div>
            </div>
        </div>
    )
}

export default Whitepaper
