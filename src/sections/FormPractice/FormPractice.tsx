import { useState } from "react";
import './FormPractice.css';
import FormMessage from "./components/FormMessage";
import FormTextInput from "./components/FormTextInput";

function FormPractice() {
    const [formData, setFormData] = useState({
        name: '',
        favoriteTopic: ''
    })

    const isFormValid =
        formData.name.trim() !== '' &&
        formData.favoriteTopic.trim() !== '';

    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!formData.name.trim()) {
            setErrorMessage('Name is required')
            setSuccessMessage('')
            return
        }
        if (!formData.favoriteTopic.trim()) {
            setErrorMessage('Favorite React Topic is required')
            setSuccessMessage('')
            return
        }

        setErrorMessage('')
        setSuccessMessage(`Form submitted for ${formData.name}. Favorite topic: ${formData.favoriteTopic}.`);

        setFormData({
            name: '',
            favoriteTopic: ''
        })
    }

    return (
        <section className='form-practice'>
            <h2>React Form Practice</h2>
            <p>Practice building controlled inputs and form state.</p>

            <form onSubmit={handleSubmit}>
                <FormTextInput
                    id='name'
                    name="name"
                    label="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                />

                <FormTextInput
                    id='favoriteTopic'
                    name="favoriteTopic"
                    label="Favorite React Topic"
                    value={formData.favoriteTopic}
                    onChange={handleInputChange}
                />

                <FormMessage message={errorMessage} type="error" />
                <FormMessage message={successMessage} type="success" />

                <button type="submit" disabled={!isFormValid}>
                    Submit Form
                </button>
            </form>
        </section>
    )
}

export default FormPractice