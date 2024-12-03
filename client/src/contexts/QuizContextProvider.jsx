import { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export default function QuizContextProvider({ children }) {
  const [isQuizOver, setIsQuizOver] = useState(false);

  const toggleIsQuizOver = () => {
    setIsQuizOver((prev) => !prev);
  };

  return (
    <QuizContext.Provider value={{ isQuizOver, toggleIsQuizOver }}>
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