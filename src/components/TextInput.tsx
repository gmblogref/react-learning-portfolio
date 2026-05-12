type TextInputProps = {
    id: string;
    label: string;
    type: string;
    value: string;
    onChange: (newValue: string) => void;
}

function TextInput({ id, label, type, value, onChange }: TextInputProps) {
    return (
        <div>
            <label htmlFor={id}>{label}: </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default TextInput