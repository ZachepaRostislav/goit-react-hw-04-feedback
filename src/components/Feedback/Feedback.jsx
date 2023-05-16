// import React, { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Statistics from '../Statistics';
import Notification from '../Notification';

// export default class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countFeedback = category => {
//     this.setState(prevState => ({
//       [category]: prevState[category] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total === 0 ? 0 : Math.round((good / total) * 100);
//   };

//   render() {
//     const feedbackKeys = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const positiveFdbk = this.countPositiveFeedbackPercentage();
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             countFeedback={this.countFeedback}
//             feedbackKeys={feedbackKeys}
//           />
//         </Section>
//         {total > 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               state={this.state}
//               feedbackKeys={feedbackKeys}
//               total={total}
//               positiveFdbk={positiveFdbk}
//             />
//           </Section>
//         ) : (
//           <Notification message={'There is no feedback'} />
//         )}
//       </>
//     );
//   }
// }

import React from 'react';
import { useState } from 'react';

export default function Feedback() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countFeedback = category => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [category]: prevFeedback[category] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const feedbackKeys = Object.keys(feedback);
  const total = countTotalFeedback();
  const positiveFdbk = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          countFeedback={countFeedback}
          feedbackKeys={feedbackKeys}
        />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            state={feedback}
            feedbackKeys={feedbackKeys}
            total={total}
            positiveFdbk={positiveFdbk}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
}
