import React, { useState } from 'react';

function ChatInput({ onGenerateChat }) {
    const [celebrity1, setCelebrity1] = useState("");
    const [celebrity2, setCelebrity2] = useState("");
    const [topic, setTopic] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onGenerateChat({ celebrity1, celebrity2, topic });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Celebrity 1:
                <input
                    type="text"
                    value={celebrity1}
                    onChange={(event) => setCelebrity1(event.target.value)}
                    required
                />
            </label>
            <label>
                Celebrity 2:
                <input
                    type="text"
                    value={celebrity2}
                    onChange={(event) => setCelebrity2(event.target.value)}
                    required
                />
            </label>
            <label>
                Topic:
                <input
                    type="text"
                    value={topic}
                    onChange={(event) => setTopic(event.target.value)}
                    required
                />
            </label>
            <button type="submit">Generate Conversation</button>
        </form>
    );
}

export default ChatInput
