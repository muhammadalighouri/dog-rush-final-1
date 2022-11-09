import '../scss/holder.scss'
const Holder = () => {
    const holder = [
        {
            head: '',
            desc: 'Exclusive giveaways',
            icon: 'images/icon/affiliate-marketing.png',
        },
        {
            head: '',
            desc: 'Merch drops',
            icon: 'images/icon/content-management.png',
        },
        {
            head: '',
            desc: 'Poll which change campaigns the community will support',
            icon: 'images/icon/copy-writing.png',
        },
        {
            head: '',
            desc: 'Whitelist giveaways in cooperation with other projects',
            icon: 'images/icon/growth.png',
        },
        {
            head: '',
            desc: 'More benefits to be added in the future',
            icon: 'images/icon/online-marketing.png',
        },
    ]

    return (
        <>
            <section className='holder'>
                <div className='heading'>
                    <h1>
                        Holder{' '}
                        <span style={{ color: '#fff', fontFamily: 'inherit' }}>
                            Benefits{' '}
                        </span>
                    </h1>
                </div>

                <div className='container'>
                    <div className='grid'>
                        {holder.map((item, i) => {
                            return (
                                <div className='item'>
                                    <img
                                        width={'60px'}
                                        src={item.icon}
                                        alt=''
                                    />
                                    {/* <span>0{i + 1}</span> */}
                                    <h3>{item.head}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Holder
