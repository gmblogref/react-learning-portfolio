import { useState } from "react";
import ActionButton from "../components/ActionButton";
import LearningTopicList from "../components/LearningTopicList";
import TextInput from "../components/TextInput";

function CollectionPractice() {
    const [learningTopics, setLearningTopics] = useState([
        'React Components',
        'Props',
        'State',
        'Events',
        'Dynamic Rendering',
    ]);

    const [newTopic, setNewTopic] = useState('');

    function handleAddTopic() {
        if (newTopic.trim() === '') {
            return
        }
        setLearningTopics([...learningTopics, newTopic]);
        setNewTopic('');
    }

    function handleRemoveTopic(topicToRemove: string) {
        setLearningTopics(learningTopics.filter(topic => topic !== topicToRemove));
    }

    return (
        <section>
            <h2>Dynamic Rendering and Collections</h2>
            <p>We will render a list of items from an array</p>

            <p>
                Total topics: {learningTopics.length}
            </p>

            <div>
                <TextInput
                    id="new-topic"
                    label="New Topic"
                    type="text"
                    value={newTopic}
                    onChange={setNewTopic}
                />
            </div>

            <ActionButton
                onClick={handleAddTopic}
                label="Add Topic"
            />

            <LearningTopicList
                topics={learningTopics}
                onRemoveTopic={handleRemoveTopic}
            />
        </section>
    )
}

export default CollectionPractice