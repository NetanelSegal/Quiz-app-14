import { useState } from 'react';
import useAxiosGet from '../hooks/useAxiosGet';
import Question from './Question';
import Loader from './Loader/Loader';
import Error from './Error/Error';
import { useQuizContext } from '../contexts/QuizContextProvider';

export default function QuestionsList({ selectedCategory = '' }) {
  const url = `http://localhost:3000/questions?cat=${selectedCategory}`;
  const {
    data: questions,
    isLoading,
    error,
  } = useAxiosGet({ url, initialValue: [] });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { toggleIsQuizOver } = useQuizContext();
  
  const incrementQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      toggleIsQuizOver();
    }
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <div>
      <p className="w-fit mt-4 mx-auto p-2 bg-blue-300 rounded-xl text-black">{`${
        currentQuestionIndex + 1
      } / ${questions.length}`}</p>
      {isLoading && <Loader />}
      {error && <Error message={error} />}
      {questions.length > 0 && (
        <Question
          key={questions[currentQuestionIndex]._id}
          question={questions[currentQuestionIndex]}
          incrementQuestion={incrementQuestion}
        />
      )}
    </div>
  );
}
