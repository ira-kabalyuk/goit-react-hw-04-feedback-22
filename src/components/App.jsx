import { useState } from 'react';
import { Container } from './Container';
import { Statistic } from './Statistic';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = type => {
    if (type === 'Good') {
      setGood(prevState => {
        return prevState + 1;
      });
    }
    if (type === 'Neutral') {
      setNeutral(prevState => {
        return prevState + 1;
      });
    }
    if (type === 'Bad') {
      setBad(prevState => {
        return prevState + 1;
      });
    }
  };

  const options = ['Good', 'Neutral', 'Bad'];

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    const totalValue = countTotalFeedback();
    return Math.round((good * 100) / totalValue);
  };

  return (
    <Container>
      <FeedbackOptions
        options={options}
        onLeaveFeedback={handleLeaveFeedback}
      />
      {countTotalFeedback() >= 1 ? (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={positivePercentage()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
}

export { App };
