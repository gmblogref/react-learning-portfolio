type ActionButtonProps = {
    label: string;
    onClick: () => void;
}

function ActionButton({ label, onClick }: ActionButtonProps) {
    return (
        <button type="button" className="action-button" onClick={onClick}>
            {label}
        </button>
    )
}

export default ActionButton