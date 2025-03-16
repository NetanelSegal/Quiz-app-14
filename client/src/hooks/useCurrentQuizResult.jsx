import { useRef } from 'react';

export default function useCurrentQuizResult() {
  const currentQuizResultData = useRef({ category: {}, questionsRecord: [] });

  const addQuestionRecordToQuizResult = (question) => {
    console.log(currentQuizResultData.current);

    currentQuizResultData.current.questionsRecord.push(question);
  };

  const addSelectedCategoryToQuizResult = (name, code) => {
    currentQuizResultData.current.category = { name, code };
  };

  const resetCurrentQuizResult = () => {
    currentQuizResultData.current = { category: {}, questionsRecord: [] };
  };

  return {
    currentQuizResultData,
    addQuestionRecordToQuizResult,
    addSelectedCategoryToQuizResult,
    resetCurrentQuizResult,
  };
}
