import React from 'react';

const QuizResults = ({ lastQuizResults }) => {
  return (
    <div className='mt-8 p-6 bg-gray-700 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-4  border-b pb-2'>
        Quiz Results Summary
      </h2>

      {lastQuizResults.length === 0 ? (
        <p className='text-gray-600 italic'>No quiz results available yet.</p>
      ) : (
        <ul className='flex flex-col gap-4'>
          {lastQuizResults.map(({ category, questionsRecord }, i) => {
            const totalQuestions = questionsRecord.length;
            const correctAnswers = questionsRecord.reduce(
              (acc, curr) =>
                curr.answer === curr.selectedAnswer ? acc + 1 : acc,
              0
            );

            const percentage = Math.round(
              (correctAnswers / totalQuestions) * 100
            );

            return (
              <li
                key={i}
                className='bg-slate-800 rounded-md p-4 hover:bg-gray-100 hover:text-gray-900 transition-all duration-150'
              >
                <div className='flex justify-between gap-5'>
                  <h3 className='font-semibold  mb-2 sm:mb-0'>
                    {category.name}
                  </h3>

                  <div className='flex items-center space-x-2'>
                    <div className='text-sm '>
                      <span className='font-medium '>{correctAnswers}</span>
                      <span> / {totalQuestions} correct</span>
                    </div>

                    <div className='w-24 bg-gray-200 rounded-full h-2.5'>
                      <div
                        className={`h-2.5 rounded-full ${
                          percentage >= 70
                            ? 'bg-green-500'
                            : percentage >= 40
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>

                    <span
                      className={`font-medium text-sm ${
                        percentage >= 70
                          ? 'text-green-600'
                          : percentage >= 40
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}
                    >
                      {percentage}%
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default QuizResults;
