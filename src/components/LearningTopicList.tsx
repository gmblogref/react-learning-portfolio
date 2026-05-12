import LearningTopicItem from "./LearningTopicItem";

type LearningTopicListProps = {
    topics: string[];
    onRemoveTopic: (topic: string) => void;
};

function LearningTopicList({ topics, onRemoveTopic }: LearningTopicListProps) {
    if (topics.length === 0) {
        return (
            <p>No learning topics added yet.</p>
        )
    }

    return (
        <ul>
            {topics.map((topic) => (
                <LearningTopicItem
                    key={topic}
                    topic={topic}
                    onRemove={() => onRemoveTopic(topic)}
                />
            ))}
        </ul>
    )
}

export default LearningTopicList