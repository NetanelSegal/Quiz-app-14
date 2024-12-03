import { useState } from 'react';
import useAxiosGet from '../hooks/useAxiosGet';
import Question from './Question';

export default function Questions({ selectedCategory = '' }) {
  const url = `http://localhost:3000/questions?cat=${selectedCategory}`;
  const {
    data: questions,
    isLoading,
    error,
  } = useAxiosGet({ url, initialValue: [] });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  return (
    <div>
      {questions.length > 0 && (
        <Question
          key={questions[currentQuestionIndex]._id}
          question={questions[currentQuestionIndex]}
        />
      )}
      <button
        className="w-full hover:scale-105 active:scale-95 p-4 bg-blue-200 text-black rounded-xl"
        onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
}
