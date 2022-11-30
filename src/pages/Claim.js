import Footer from '../components/Footer'
import NavigationSec from '../components/NavigationSec'
import SendMessage from '../components/SendMessage'
import TokenInfo from '../components/TokenInfo'
import '../scss/claim.scss'
import '../scss/steps.scss'
const Claim = () => {
    const stylo = {
        background: '#113c5a',

    }
    return (
        <>
            <NavigationSec />
            <section className='steps'>
                <span></span>
                <div className='container'>
                    <div className='heading'>
                        <h1 style={{ marginTop: "150px" }}>CLAIM YOUR DOGE RUSH TOKENS</h1>
                        <p style={{
                            display: 'block',
                            lineHeight: '1.3',
                            width: '80%',
                            margin: '0 auto 25px',
                            textAlign: 'center'
                        }}>
                            Pre-sale is now under progress. You can use this page to claim your purchased $DR tokens. Hit the connect wallet button below, and you’ll be able to see your claimable token balance. Once you’ve connected your wallet, hit claim and authorise the transaction. You can use the token information to track your $DR in your wallet.</p>
                        <button style={{
                            background: '#055eaf',
                            border: '0',
                            borderRadius: '10px',
                            color: '#fff',
                            cursor: 'pointer',
                            height: '50px',
                            justifySelf: 'self-end',
                            textTransform: 'uppercase',
                            transition: 'all .3s',
                            width: '100%',
                            margin: '15px auto',
                            maxWidth: '205px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>CONNECT WALLET
                        </button>
                    </div>
                    <TokenInfo />
                    <SendMessage />
                </div>
            </section>
            <Footer stylo={stylo} />
        </>
    )
}

export default Claim
