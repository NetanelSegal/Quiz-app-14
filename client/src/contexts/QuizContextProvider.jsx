import { createContext, useContext, useRef, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useCurrentQuizResult from '../hooks/useCurrentQuizResult';
const QuizContext = createContext();

export default function QuizContextProvider({ children }) {
  const { storageData: quizResultRecords, updateStorageData: updateRecords } =
    useLocalStorage({ key: 'quizResultRecords', initialValue: [] });
  const [isQuizOver, setIsQuizOver] = useState(false);

  const {
    addQuestionRecordToQuizResult,
    addSelectedCategoryToQuizResult,
    currentQuizResultData,
    resetCurrentQuizResult,
  } = useCurrentQuizResult();

  const addQuizResultToLastQuizList = () => {
    updateRecords([...quizResultRecords, currentQuizResultData.current]);
  };

  const toggleIsQuizOver = () => {
    setIsQuizOver((prev) => !prev);
    addQuizResultToLastQuizList(currentQuizResultData.current);
  };

  const restartQuiz = () => {
    setIsQuizOver(false);
    resetCurrentQuizResult();
  };

  return (
    <QuizContext.Provider
      value={{
        isQuizOver,
        toggleIsQuizOver,
        currentQuizResultData,
        restartQuiz,
        quizResultRecords,
        addQuestionRecordToQuizResult,
        addSelectedCategoryToQuizResult,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => {
  const data = useContext(QuizContext);
  if (!data) {
    throw new Error('Quiz context can be use only inside a provider');
  }

  return data;
};
