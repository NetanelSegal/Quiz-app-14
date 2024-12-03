import { useEffect, useState } from 'react';

export default function Question({ question }) {
  const [selectedAnswer, setSelectedAnser] = useState(-1);

  const handleClick = (index) => {
    setSelectedAnser(index);
    if (question.answer === index) {
      console.log('Correct answer');
    }
  };

  return (
    <div className="py-4">
      <h3 className="text-2xl min-h-24 ">{question.question}</h3>
      <ul className="mt-4 flex flex-col gap-2">
        {question.options.map((option, i) => (
          <li key={i} className="h-20">
            <button
              onClick={() => handleClick(i)}
              className={`size-full hover:scale-105 active:scale-95 p-4 rounded-xl
                ${getClassesForOption(question.answer, i, selectedAnswer)}`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const getClassesForOption = (correctAnswer, currentIndex, selectedAnswer) => {
  if (selectedAnswer === -1) {
    return 'bg-slate-900';
  }

  if (correctAnswer === currentIndex) {
    return 'bg-green-600';
  }

  if (selectedAnswer === currentIndex) {
    return 'bg-red-500';
  }

  return 'bg-slate-900';
};
