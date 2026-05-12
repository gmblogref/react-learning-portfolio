import ActionButton from "./ActionButton";

type LearningTopicItemProps = {
    topic: string;
    onRemove: () => void;
};

function LearningTopicItem({ topic, onRemove }: LearningTopicItemProps) {
    return (
        <li>{topic}
            <ActionButton onClick={onRemove} label="Remove" />
        </li>
    )
}

export default LearningTopicItem