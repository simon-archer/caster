const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Configuration, OpenAIApi } = require("openai");
dotenv.config();


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();

app.use(cors());
app.use(express.json());

app.post('/generate-chat', async (req, res) => {
    try {
        console.log('This is the request body:', req.body)
        const { celebrity1, celebrity2, topic } = req.body;

        // Structure the chat models and message prompt
        const messages = [
            { role: "system", content: `You are a helpful conversation script writer assistant. You will take into considerations the person and their experience. You will think like they do, while making it sound like they are talking as they would naturally.` },
            { role: "user", content: `Write a conversation between ${celebrity1} and ${celebrity2} discussing ${topic}` },
        ];

        // Send the request to OpenAI's API
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: messages,
        });

        console.log({
            model: "gpt-3.5-turbo",
            messages: messages,
        })

        console.log('Messages being sent:', messages)
        console.log('chatText:', completion.data.choices[0].message.content, { depth: null })

        // Extract the chat text from the response
        const chatText = completion.data.choices[0].message.content

        // Send the chat text back to the client
        res.send({ chatText });
    } catch (error) {
        if (error.response) {
            console.error(error);
            console.log(error.response.status);
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
