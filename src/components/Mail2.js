import { useFormFields, useMailChimpForm } from 'use-mailchimp-form'

// The useFormFields is not necessary. You can use your own form component.

export default function App() {
    const url =
        'https://gmail.us21.list-manage.com/subscribe/post?u=1507b1926cf16506d47fa358f&amp;id=0a2bec43c4&amp;f_id=0043c3e1f0'
    // The url looks like the url below:
    // https://aaaaaaaaa.us20.list-manage.com/subscribe/post?u=xxxxxxxxxxxxxxxxxx&amp;id=yyyyyyyyyy
    const { loading, error, success, message, handleSubmit } =
        useMailChimpForm(url)
    const { fields, handleFieldChange } = useFormFields({
        EMAIL: '',
    })
    const amount = [
        {
            value: '$0 - $5k',
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
            value: '$50k +',
            label: '  $50k +',
        },
    ]
    return (
        <>
            <form
                onSubmit={(event) => {
                    event.preventDefault()
                    handleSubmit(fields)
                }}
            >
                <div className='first'>
                    <div className='item'>
                        <input
                            id='FNAME'
                            autoFocus
                            type='text'
                            placeholder='Enter First Name'
                            value={fields.FNAME}
                            onChange={handleFieldChange}
                        />
                    </div>
                    <div className='item'>
                        <input
                            id='LNAME'
                            autoFocus
                            type='text'
                            placeholder='Enter Last Name'
                            value={fields.LNAME}
                            onChange={handleFieldChange}
                        />
                    </div>
                </div>
                <div className='second'>
                    <input
                        id='MMERGE5'
                        autoFocus
                        type='number'
                        placeholder='Country Code'
                        value={fields.MMERGE5}
                        onChange={handleFieldChange}
                    />

                    <div className='item'>
                        <input
                            id='PHONE'
                            autoFocus
                            type='number'
                            placeholder='Enter Phone Number'
                            value={fields.PHONE}
                            onChange={handleFieldChange}
                        />
                    </div>
                    <input
                        id='EMAIL'
                        autoFocus
                        type='email'
                        placeholder='Enter Email'
                        value={fields.EMAIL}
                        onChange={handleFieldChange}
                    />
                </div>
                <div className='third'>
                    <select
                        id='MMERGE7'
                        value={fields.MMERGE7}
                        onChange={handleFieldChange}
                    >
                        {amount.map((item, i) => {
                            return (
                                <option value={item.value}>{item.value}</option>
                            )
                        })}
                    </select>
                    <select
                        id='MMERGE3'
                        value={fields.MMERGE3}
                        onChange={handleFieldChange}
                    >
                        <option value='Morning'>Morning</option>
                        <option value='Afternoon'>Afternoon</option>
                        <option value='Evening'>Evening</option>
                    </select>
                    <button>Submit!</button>
                </div>
            </form>
            {loading && 'submitting'}
            {error && message}
            {success && message}
        </>
    )
}
