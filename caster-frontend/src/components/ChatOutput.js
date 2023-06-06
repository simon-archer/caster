function ChatOutput({ chatText }) {
    if (!chatText) {
        return null; // Return null or show a loading state if chatText is undefined
    }

    // Remove newline characters after colons
    chatText = chatText.replace(/:\n/g, ': ');

    const messages = chatText.split('\n');

    return (
        <div style={styles.container}>
            {messages.map((message, index) => {
                const [author, text] = message.split(':');
                const isUser = author.trim() === 'User'; // Adjust this condition based on how the author is represented in your messages
                return (
                    <div key={index} style={isUser ? styles.userMessageContainer : styles.assistantMessageContainer}>
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
    userMessageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'blue', // Change this to the color you want for the user's messages
        borderRadius: '10px',
        margin: '5px 0',
        padding: '10px',
        width: '100%'
    },
    assistantMessageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'grey', // Change this to the color you want for the assistant's messages
        borderRadius: '10px',
        margin: '5px 0',
        padding: '10px',
        width: '100%'
    },
    author: {
        fontWeight: 'bold',
        marginBottom: '5px',
        color: 'black'
    },
    message: {
        margin: 0,
        color: 'black'
    }
};

export default ChatOutput;
