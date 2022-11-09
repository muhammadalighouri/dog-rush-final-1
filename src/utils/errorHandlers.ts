export const parseProviderErrorMessage = (error: Error): string => {
    let { message } = error
    try {
        message = JSON.parse(
            message.replace('Internal JSON-RPC error.', ''),
        ).message
    } catch {
        // Do nothing
    }

    if (!message)
        return 'Something went wrong, please check your wallet and try again.'

    message = message
        .replace('execution reverted: ', '')
        .replace('MetaMask Tx Signature: ', '')
        .replace('err: ', '')
        .replace('user', 'you')
        .replace('User', 'You')
        .slice(0, 50)

    return message
}