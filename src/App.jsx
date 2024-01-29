import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification'

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFeedback = good + neutral + bad;
  const options = ['good', 'neutral', 'bad'];

  const handleClickButton = (e) => {
    const key = e.target.name;

    switch(key) {

      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = (total) => {
    return total === 0 ? 0 : Math.round((good * 100) / total);
  }

  return (
          <>
            <Section title="Please leave feedback">
              <FeedbackOptions options={options}
              onLeaveFeedback={handleClickButton}
              />
            </Section>
            <Section title="Statistics">
              {totalFeedback === 0 ? 
                (<Notification message="There is no feedback"/>):
                (<Statistics 
                good={good}
                neutral={neutral} 
                bad={bad} 
                total={countTotalFeedback}
                positivePercentage={countPositiveFeedbackPercentage}
                />)
              }
            </Section>
          </>
  )
}
// export class App extends Component {

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   }

//   handleClickButton = (e) => {
//     const key = e.target.name;
//     this.setState((prevState) => {
//       return {[key]: prevState[key] +1};
//     });
//   }

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }

//   countPositiveFeedbackPercentage = (total) => {
//     const { good } = this.state;
//     return total === 0 ? 0 : Math.round((good * 100) / total);
//   }

//   render() {

//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions options={Object.keys(this.state)}
//           onLeaveFeedback={this.handleClickButton}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? 
//             (<Notification message="There is no feedback"/>):
//             (<Statistics 
//             good={this.state.good}
//             neutral={this.state.neutral} 
//             bad={this.state.bad} 
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//             />)
//           }
//         </Section>
//       </>
//     );
//   }
// }
