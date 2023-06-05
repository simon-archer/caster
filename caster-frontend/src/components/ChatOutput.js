import React from 'react';

function ChatOutput({ chatText }) {
    if (!chatText) {
        return null; // Return null or show a loading state if chatText is undefined
    }

    const messages = chatText.split('\n');

    return (
        <div style={styles.container}>
            {messages.map((message, index) => {
                const [author, text] = message.split(':');
                return (
                    <div key={index} style={styles.messageContainer}>
                        <p style={styles.author}>{author}:</p>
                        <p style={styles.message}>{text}</p>
                    </div>
                );
            })}
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        overflowY: 'scroll',
        maxHeight: '500px',
        border: '1px solid grey',
        borderRadius: '10px',
        padding: '10px',
        width: '500px',
        margin: 'auto'
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        margin: '5px 0',
        padding: '10px',
        width: '100%'
    },
    author: {
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    message: {
        margin: 0
    }
};

export default ChatOutput;
