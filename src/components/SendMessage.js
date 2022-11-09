import { useState } from 'react'
import Select from 'react-select'
import { codes } from '../assests/Code'
const SendMessage = () => {
    const [selectedOptionBottomCountryCode, setSelectedOptionCountryCode] =
        useState()
    const [investment, setInvestment] = useState()
    const [time, setTime] = useState()
    const countryCode = codes.map((item, i) => {
        return {
            label: `${item.name} (${item.dial_code})`,
            value: `${item.name} (${item.dial_code})`,
        }
    })
    const amount = [
        {
            value: ' $0 - $5k',
            label: ' $0 - $5k',
        },
        {
            value: '$5k - $10k',
            label: '$5k - $10k',
        },
        {
            value: '$10k - $25k',
            label: '$10k - $25k',
        },

        {
            value: '$25k - $50k',
            label: '$25k - $50k',
        },
        {
            value: '  $50k +',
            label: '  $50k +',
        },
    ]
    const differentTime = [
        {
            value: ' Morning',
            label: ' Morning',
        },
        {
            value: 'Afternoon',
            label: 'Afternoon',
        },
        {
            value: '',
            label: 'Evening',
        },
    ]

    return (
        <div className='fourth'>
            <div className='heading'>
                <h1>Talk to us</h1>
                <p>
                    Leave your details below and we’ll contact you to discuss
                    purchasing Doge Rush.
                </p>
            </div>
            <div className='grid'>
                <div className='first'>
                    <div className='item'>
                        <input type='text' placeholder='Enter First Name' />
                    </div>
                    <div className='item'>
                        <input type='text' placeholder='Enter Last Name' />
                    </div>
                </div>
                <div className='second'>
                    <Select
                        placeholder='Country Code'
                        onChange={setSelectedOptionCountryCode}
                        options={countryCode}
                    />
                    <div className='item'>
                        <input type='text' placeholder='Enter Contact Number' />
                    </div>
                    <Select
                        onChange={setTime}
                        placeholder='Select a time to contact'
                        options={differentTime}
                    />
                </div>
                <div className='third'>
                    <Select
                        onChange={setInvestment}
                        placeholder='Enter Investment Budget'
                        options={amount}
                    />
                    <button>Submit!</button>
                </div>

                <p id='p'>
                    <input type='checkbox' name='' id='checkbo' for='p' />
                    <label htmlFor="checkbo">  By submitting this form you agree to our Terms and Privacy
                        Policy</label>
                </p>
            </div>
        </div>
    )
}

export default SendMessage
