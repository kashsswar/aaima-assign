import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Countdown from 'react-native-countdown-component';

const QuizComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    // Fetch questions from your backend API
    fetch('https://your-backend-api/questions')
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleOptionPress = (selectedOption) => {
    if (!quizCompleted) {
      setUserResponses([
        ...userResponses,
        { questionId: questions[currentQuestionIndex].id, selectedOption },
      ]);
      if (currentQuestionIndex === questions.length - 1) {
        setQuizCompleted(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  const renderQuestion = () => {
    const question = questions[currentQuestionIndex];
    return (
      <View>
        <Text>{question.text}</Text>
        {question.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOptionPress(option)}
            disabled={quizCompleted}
          >
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const submitQuiz = () => {
    // Submit user responses to your backend API
    fetch('https://your-backend-api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userResponses),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Responses submitted successfully:', data);
        setUserResponses([]);
        setCurrentQuestionIndex(0);
        setQuizCompleted(false);
      })
      .catch((error) => {
        console.error('Error submitting responses:', error);
      });
  };

  return (
    <View>
      <Countdown until={3600} onPress={() => alert('Timer Pressed')} size={20} />
      {questions.length > 0 && renderQuestion()}
      {quizCompleted && <Button title="Submit Quiz" onPress={submitQuiz} />}
    </View>
  );
};

export default QuizComponent;
