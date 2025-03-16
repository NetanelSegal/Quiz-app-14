import { useState } from 'react';
import { useQuizContext } from '../contexts/QuizContextProvider';

export default function Question({ question, incrementQuestion }) {
  const { addQuestionRecordToQuizResult } = useQuizContext();
  const [selectedAnswer, setSelectedAnser] = useState(-1);

  const handleClick = (index) => {
    setSelectedAnser(index);
    addQuestionRecordToQuizResult({
      ...question,
      selectedAnswer: index,
    });
  };

  return (
    <div className='py-2'>
      <h3 className='text-2xl min-h-24'>{question.question}</h3>
      <ul className='my-4 flex flex-col gap-2'>
        {question.options.map((option, i) => (
          <li key={i} className='h-20'>
            <button
              disabled={selectedAnswer !== -1}
              onClick={() => handleClick(i)}
              className={` size-full hover:scale-105 active:scale-95 p-4 rounded-xl transition-all duration-150
                ${getClassesForOption(question.answer, i, selectedAnswer)}`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <button
        disabled={selectedAnswer === -1}
        className='disabled:bg-gray-400 disabled:text-white disabled:hover:scale-100 
        disabled:hover:cursor-not-allowed cursor-pointer w-full hover:scale-105 active:scale-95 p-4 bg-blue-200 text-black rounded-xl'
        onClick={incrementQuestion}
      >
        Next
      </button>
    </div>
  );
}

const getClassesForOption = (correctAnswer, currentIndex, selectedAnswer) => {
  if (selectedAnswer === -1) {
    return 'bg-slate-900';
  }

  const className =
    'disabled:hover:scale-100 disabled:hover:cursor-not-allowed';

  if (correctAnswer === currentIndex) {
    return `${className} bg-green-600`;
  }

  if (selectedAnswer === currentIndex) {
    return `${className} bg-red-500`;
  }

  return `${className} bg-slate-900 disabled:bg-gray-400 disabled:text-white  disabled:hover:scale-100`;
};
