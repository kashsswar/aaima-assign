const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Sample quiz questions (replace with your own data)
const quizQuestions = [
  {
    id: 1,
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris',
  },
  // Add more questions
];

// Store user responses
const userResponses = {};

// Fetch quiz questions
app.get('/questions', (req, res) => {
  res.json(quizQuestions);
});

// Submit user responses
app.post('/submit', (req, res) => {
  const { userId, responses } = req.body;
  userResponses[userId] = responses;
  res.json({ message: 'Responses submitted successfully' });
});

// Get user responses
app.get('/responses/:userId', (req, res) => {
  const { userId } = req.params;
  const responses = userResponses[userId] || [];
  res.json(responses);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
