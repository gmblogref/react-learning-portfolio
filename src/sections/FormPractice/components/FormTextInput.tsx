type FormTextInputProps = {
    id: string,
    name: string
    label: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function FormTextInput({ id, name, label, value, onChange }: FormTextInputProps) {
    return (
        <div>
            <label htmlFor={id}>{label}: </label>
            <input
                type='text'
                id={id}
                name={name}
                value={value}
                onChange={onChange} />
        </div>
    )
}

export default FormTextInput