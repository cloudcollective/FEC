import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuestionAndAnswerEntry from './QuestionAndAnswerEntry';

const QuestionsAnswersList = ({ productName, questions }) => {
  const [slicer, setSlicer] = useState(2);
  const [currentQuestions, setCurrentQuestions] = useState(null);
  const [numOfQuestionsLeft, setNumOfQuestionsLeft] = useState(null);
  const [sortedQuestions, setSortedQuestions] = useState(null);

  const sortByHelpfulness = (a, b) => b.question_helpfulness - a.question_helpfulness;

  useEffect(() => {
    if (questions.length) {
      setSortedQuestions([...questions].sort(sortByHelpfulness));
    }
  }, [questions]);

  useEffect(() => {
    if (sortedQuestions !== null) {
      const initialQuestions = sortedQuestions.slice(0, slicer);
      setCurrentQuestions(initialQuestions);
      setNumOfQuestionsLeft(sortedQuestions.length - initialQuestions.length);
    }
  }, [sortedQuestions]);

  useEffect(() => {
    if (sortedQuestions !== null) {
      const newSortedQuestions = sortedQuestions.slice(0, slicer);
      setCurrentQuestions(newSortedQuestions);
      setNumOfQuestionsLeft(sortedQuestions.length - newSortedQuestions.length);
    }
  }, [slicer, sortedQuestions]);

  if (!currentQuestions) {
    return (
      <h4>Loading questions...</h4>
    );
  }

  return (
    <div data-testid="qa-list" style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      {currentQuestions.map((question) => (
        <QuestionAndAnswerEntry
          productName={productName}
          key={question.question_id}
          question={question}
          answers={Object.values(question.answers)}
        />
      ))}
      {numOfQuestionsLeft > 0
        && (
          <button
            type="button"
            onClick={() => setSlicer(slicer + 2)}
          >
            See More Questions
          </button>
        )}
    </div>
  );
};

// QuestionsAnswersList.propTypes = {
//   questions: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(
//     PropTypes.shape({
//       answers: PropTypes.shape({
//         answer_id: PropTypes.number,
//         body: PropTypes.string,
//         date: PropTypes.string,
//         answerer_name: PropTypes.string,
//         helpfulness: PropTypes.number,
//         photos: PropTypes.arrayOf(PropTypes.string),
//       }),
//       question_id: PropTypes.number,
//       question_body: PropTypes.string,
//       question_date: PropTypes.string,
//       asker_name: PropTypes.string,
//       question_helpfulness: PropTypes.number,
//       reported: PropTypes.bool,
//     }),
//   )]),
//   productName: PropTypes.string.isRequired,
// };

// QuestionsAnswersList.defaultProps = {
//   questions: [],
// };

export default QuestionsAnswersList;
