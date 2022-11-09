import Footer from '../components/Footer'
import NavigationSec from '../components/NavigationSec'
import '../scss/conditions.scss'
const Disclaimer = () => {
    const stylo = {
        position: 'fixed',
        bottom: '0',
        zIndex: '100',
        width: '100%',
    }
    window.scroll(0, 0)
    return (
        <>
            <NavigationSec style={{ position: 'relative' }} />
            <section className='privacy'>
                <div className='container'>
                    <h1>Disclaimer</h1>
                    <p>
                        <span>
                            Participating in an ICO or IDO is a high-risk
                            activity. By participating in the Doge Rush ICO, the
                            buyer is aware of and accepts the risks related to
                            security, the implied lack of technical and economic
                            results, and the complete or partial loss of their
                            capital. $DR is not a security token and does not
                            bestow rights other than specified in this document.
                        </span>
                        <span>
                            {' '}
                            The purchaser declares being aware of the legal
                            uncertainty of this type of transaction and having
                            conducted their own legal guidance according to the
                            applicable law to which they subscribe.
                        </span>
                        <span>
                            {' '}
                            This version of the whitepaper and its contents are
                            subject to change according to the technical working
                            of each feature; an updated and final version of
                            this paper will be published at a later date.
                        </span>
                        <span>
                            {' '}
                            Doge Rush will strive to make sure that all the
                            information in this publication is correct at the
                            time. However, it will not be liable for any errors
                            or omissions. Doge Rush will aim to deliver all
                            stated features, but there is no guarantee that
                            every feature mentioned in whitepaper will be
                            delivered.
                        </span>
                        <span>
                            The information and gaming platform provided by Doge
                            Rush on{' '}
                            <a
                                href='https://www.dogerush.io/ '
                                style={{ color: 'rgb(15, 218, 244)' }}
                                target={'_blank'}
                            >
                                https://www.dogerush.io/{' '}
                            </a>{' '}
                            (the “Site”) and our mobile application game are for
                            general enjoyment purposes only. All information and
                            gameplay offered on the Site and our mobile
                            application are provided in good faith; however, we
                            make no representation or warranty of any kind,
                            express or implied, regarding the accuracy,
                            adequacy, validity, reliability, availability, or
                            completeness of any information or gaming services
                            on the Site or our mobile application. UNDER NO
                            CIRCUMSTANCES SHALL WE HAVE ANY LIABILITY TO YOU FOR
                            ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT
                            OF THE USE OF THE SITE OR OUR MOBILE APPLICATION OR
                            RELIANCE ON ANY INFORMATION OR SERVICES PROVIDED ON
                            THE SITE AND OUR MOBILE APPLICATION. YOUR USE OF THE
                            SITE AND OUR MOBILE APPLICATION AND YOUR RELIANCE ON
                            ANY INFORMATION ON THE SITE AND OUR MOBILE
                            APPLICATION IS SOLELY AT YOUR OWN RISK.
                        </span>
                    </p>
                </div>
            </section>
            <Footer stylo={stylo} />
        </>
    )
}

export default Disclaimer
