import { useFormFields, useMailChimpForm } from 'use-mailchimp-form'

// The useFormFields is not necessary. You can use your own form component.

export default function App() {
    const url =
        'https://thetravelingdiarytour.us17.list-manage.com/subscribe/post?u=8a57cbfc52f621ac676850200&amp;id=77316c631a&amp;f_id=00d12ae0f0'
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
                            type='text'
                            placeholder='Enter First Name'
                            value={fields.FNAME}
                            onChange={handleFieldChange}
                        />
                    </div>
                    <div className='item'>
                        <input
                            id='LNAME'
                            type='text'
                            placeholder='Enter Last Name'
                            value={fields.LNAME}
                            onChange={handleFieldChange}
                        />
                    </div>
                </div>
                <div className='second'>
                    <input
                        id='EMAIL'
                        type='email'
                        placeholder='Enter Email'
                        value={fields.EMAIL}
                        onChange={handleFieldChange}
                    />
                </div>
                <div className='third'>
                    <button>Submit!</button>
                </div>
            </form>
            {loading && 'submitting'}
            {error && message}
            {success && message}
        </>
    )
}
