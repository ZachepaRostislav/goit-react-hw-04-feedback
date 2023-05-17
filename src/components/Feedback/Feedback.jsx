import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Statistics from '../Statistics';
import Notification from '../Notification';

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
