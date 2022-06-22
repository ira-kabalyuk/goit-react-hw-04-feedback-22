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
        //return console.log('click')
      });
    }
    if (type === 'Neutral') {
      setNeutral(prevState => {
        return prevState + 1;
        //return console.log('click')
      });
    }
    if (type === 'Bad') {
      setBad(prevState => {
        return prevState + 1;
        //return console.log('click')
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

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleLeaveFeedback = type => {
//     this.setState(prevState => {
//       return {
//         [type]: prevState[type] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   positivePercentage = () => {
//     const totalValue = this.countTotalFeedback();
//     return Math.round((this.state.good * 100) / totalValue);
//   };

//   render() {
//     const options = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;

//     return (
//       <Container>
//         <FeedbackOptions
//           options={options}
//           onLeaveFeedback={this.handleLeaveFeedback}
//         />
//         {this.countTotalFeedback() >= 1 ? (
//           <Statistic
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={this.countTotalFeedback()}
//             positivePercentage={this.positivePercentage()}
//           />
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//       </Container>
//     );
//   }
// }

export { App };
