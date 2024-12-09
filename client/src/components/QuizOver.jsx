import { useQuizContext } from '../contexts/QuizContextProvider';

export default function QuizOver() {
  const { quizResult } = useQuizContext();

  return (
    <div className="py-2">
      <h3 className="text-2xl text-center">Quiz finished!</h3>
      <div className="relative">
        <div className="h-8 absolute z-10 top-0  w-full from-gray-700 to-transparent bg-gradient-to-b"></div>
        <ul className="my-4 flex relative flex-col h-96 overflow-y-scroll gap-4 p-5">
          {quizResult.current.map(
            ({ answer, selectedAnswer, question, options }, i) => (
              <li
                key={question._id}
                className="flex flex-col gap-2 border-b-2 pb-5 border-gray-500"
              >
                <div className="flex">
                  <h4 className="text-xl font-semibold relative">{question}</h4>
                  <span
                    className={`pr-2 ${
                      selectedAnswer !== answer
                        ? 'text-red-500'
                        : 'text-green-500'
                    }`}
                  >
                    {selectedAnswer !== answer ? 'Incorrect' : 'Correct'}
                  </span>
                </div>
                <p className="p-2 bg-green-600 rounded-lg">{options[answer]}</p>
                {selectedAnswer !== answer && (
                  <p className="p-2 bg-red-600 rounded-lg">
                    {options[selectedAnswer]}
                  </p>
                )}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
