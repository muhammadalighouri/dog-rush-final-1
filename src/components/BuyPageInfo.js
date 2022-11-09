import '../scss/steps.scss'
import SendMessage from './SendMessage'
import TokenInfo from './TokenInfo'
import Whitepaper from './Whitepaper'
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
]
const customStyles = {
    menu: (provided, state) => ({
        width: state.selectProps.width,
        borderBottom: '1px dotted pink',
        color: state.selectProps.menuColor,
        padding: 20,
        background: 'red',
    }),
}

const Step1 = () => {
    return (
        <div className="first">
            <div className="start">
                <h2>Step 1/3</h2>
                <p>
                    <span>
                        {" "}
                        To begin, make sure you have a MetaMask wallet installed on your
                        browser, or use one of the wallets supported by Wallet Connect (we
                        recommend Trust Wallet).
                    </span>{" "}
                    <span>
                        Purchasing on a desktop browser will give you a smoother purchasing
                        experience. For this we recommend Metamask. If you are purchasing on
                        mobile, we recommend using Trust Wallet and connecting through the
                        in built browser.
                    </span>
                </p>
            </div>
            <div className="end">
                <figure>
                    <img src="/images/Dog Run/side.png" alt="" />
                </figure>
            </div>
        </div>
    );
};
const Step2 = () => {
    const info = [
        {
            name: "Buy with ETH",
            desc: "Once you have sufficient ETH in your wallet (if you do not have ETH, USDT, please read option 1 first), you can now swap your ETH for Doge Rush. Type in the amount of Doge Rush you wish to purchase ($15 minimum) and then click “Buy with ETH” or “Buy with USDT”. Your wallet provider will ask you to confirm the transaction and will also show you the cost of gas.",
            img: "/images/icon/8193886.png",
        },
        {
            name: "Buy with USDT",
            desc: "Please ensure you have at least $20 of USDT in your wallet before commencing the transaction. Type in the amount of Doge Rush you wish to purchase ($15 minimum). Click “Convert USDT”. You will then be asked to approve the purchase TWICE. The first approval is for the USDT contract and the second is for the transaction amount. Please ensure you go through both approval steps in order to complete the transaction.",

            img: "/images/icon/8193873.png",
        },
    ];
    return (
        <div className="second">
            <h2>Step 2/3</h2>
            <p>
                <span>
                    Once you have your preferred wallet provider ready, click “Connect
                    Wallet” and select the appropriate option. For mobile wallet apps you
                    will need to select “Wallet Connect”.
                </span>
                <span>You will then have 3 options:</span>
            </p>
            <div className="grid">
                <div className="item">
                    <div className="top">
                        <img src="/images/icon/7147157.png" alt="" />
                        <span>Buy ETH with card</span>
                    </div>
                    <p>
                        Visit&nbsp;
                        <a
                            style={{
                                color: "rgb(15, 218, 244)",
                                display: "inline-block",
                            }}
                            target={"_blank"}
                            href="https://www.moonpay.com/buy"
                        >
                            https://www.moonpay.com/buy
                        </a>
                        &nbsp; this will allow you to purchase ETH that will be sent to your
                        wallet. You will then be able to use this ETH to purchase Doge Rush.
                        Visit&nbsp;
                        <a
                            style={{
                                color: "rgb(15, 218, 244)",
                                display: "inline-block",
                            }}
                            target={"_blank"}
                            href="https://www.moonpay.com/buy"
                        >
                            https://www.moonpay.com/buy
                        </a>
                        &nbsp; to begin and follow the on screen steps. We recommend
                        purchasing a minimum of $20 worth of ETH to cover the minimum Doge
                        Rush purchase.
                    </p>
                </div>
                {info.map((item, ind) => {
                    return (
                        <div className="item">
                            <div className="top">
                                <img src={item.img} alt="" />
                                <span>{item.name}</span>
                            </div>
                            <p>{item.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
const Step3 = () => {
    return (
        <div className="third">
            <div className="start">
                <h2>Step 3/3</h2>
                <p>
                    <span>
                        Once the presale has concluded, you will be able to claim your Doge
                        Rush tokens. We will release details closer to the time, however you
                        will need to visit the main site: {" "}
                        <a
                            href="https://dogerush.io/ "
                            style={{
                                color: "rgb(15, 218, 244)",
                                display: "inline-block",
                            }}
                            target={"_blank"}
                        >
                            https://dogerush.io/
                        </a>{" "}
                        and click on the ‘claim’ button.
                    </span>{" "}
                </p>
            </div>
            <div className="end">
                <figure>
                    <img src="/images/ezgif.com-gif-maker.png" alt="" />
                </figure>
            </div>
        </div>
    );
};

const BuyPageInfo = ({ MintGrid }) => {
    return (
        <section className='steps'>
            <span></span>

            <div className='container'>
                <MintGrid />
                <div className='heading'>
                    <h1>How to buy?</h1>
                </div>
                <Step1 />
                <Step2 />
                <Step3 />
                <Whitepaper />
                <TokenInfo />
                <SendMessage />
            </div>
        </section>
    )
}

export default BuyPageInfo
