import { useQuizContext } from '../contexts/QuizContextProvider';

export default function QuizOver({ resetCategory }) {
  const { currentQuizResultData, restartQuiz } = useQuizContext();

  const currectAnswerCount =
    currentQuizResultData.current.questionsRecord.reduce(
      (acc, curr) => (curr.answer === curr.selectedAnswer ? acc + 1 : acc),
      0
    );

  const handleReset = () => {
    restartQuiz();
    resetCategory();
  };

  return (
    <div className='py-2 px-5'>
      <h3 className='text-2xl text-center'>Quiz finished!</h3>
      <div className='relative'>
        <div className='h-8 absolute z-10 top-0  w-full from-gray-700 to-transparent bg-gradient-to-b'></div>

        <QuizResultQuestionsList
          questionsRecords={currentQuizResultData.current.questionsRecord}
        />
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
          <p className='font-semibold underline'>
            Category: {currentQuizResultData.current.category.name}
          </p>
          <p className='font-semibold underline'>
            Correct answers: {currectAnswerCount}/
            {currentQuizResultData.current.questionsRecord.length}
          </p>
        </div>

        <button
          onClick={handleReset}
          className='bg-slate-800 px-4 py-2 rounded-full'
        >
          Restart quiz
        </button>
      </div>
    </div>
  );
}

function QuizResultQuestionsList({ questionsRecords }) {
  return (
    <ul className='my-4 flex relative flex-col h-96 pt-6 overflow-y-scroll gap-4 '>
      {questionsRecords.map(
        ({ answer, selectedAnswer, question, options }, i) => (
          <li
            key={question._id}
            className='flex flex-col gap-2 border-b-2 pb-5 border-gray-500'
          >
            <div className='flex'>
              <h4 className='text-xl font-semibold relative'>{question}</h4>
              <AnswerStatus
                correctAnswer={answer}
                selectedAnswer={selectedAnswer}
              />
            </div>
            <p className='p-2 bg-green-600 rounded-lg'>
              Correct answer: {options[answer]}
            </p>
            {selectedAnswer !== answer && (
              <p className='p-2 bg-red-600 rounded-lg'>
                Your answer: {options[selectedAnswer]}
              </p>
            )}
          </li>
        )
      )}
    </ul>
  );
}

function AnswerStatus({ correctAnswer: answer, selectedAnswer }) {
  return (
    <div
      className={`px-3 py-1 rounded-full self-start ${
        selectedAnswer !== answer ? 'bg-red-500' : 'bg-green-500'
      }`}
    >
      {selectedAnswer !== answer ? 'Incorrect' : 'Correct'}
    </div>
  );
}
