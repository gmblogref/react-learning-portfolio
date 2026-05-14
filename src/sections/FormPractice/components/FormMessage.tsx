type FormMessageProps = {
    message: string
    type?: 'error' | 'success'
}

function FormMessage({ message, type }: FormMessageProps) {
    if (message === '') {
        return null
    }

    return (
        <p className={`form-message form-message--${type}`}>
            {message}
        </p>
    )
}

export default FormMessage