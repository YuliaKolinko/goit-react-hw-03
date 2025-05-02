import "./App.css";
import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";
import { useState, useEffect } from "react";
// import clsx from "clsx";

function App() {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem("feedback")) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  );
  const FeedbackSummary = feedback.good + feedback.neutral + feedback.bad;
  const FeedbackPositiveProcents =
    FeedbackSummary > 0
      ? Math.round((feedback.good / FeedbackSummary) * 100)
      : 0;
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  const updateFeedback = (feedbackType) => {
    feedbackType === "reset"
      ? setFeedback({ good: 0, neutral: 0, bad: 0 })
      : setFeedback({
          ...feedback,
          [feedbackType]: feedback[feedbackType] + 1,
        });
  };
  return (
    <>
      <div className="spacing">
        <Description />
      </div>
      <div className="spacing">
        <Options onFeedbackAction={updateFeedback} totalFB={FeedbackSummary} />
      </div>
      <div className="spacing">
        {FeedbackSummary > 0 ? (
          <Feedback
            feedback={feedback}
            FeedbackSummary={FeedbackSummary}
            FeedbackPositiveProcents={FeedbackPositiveProcents}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
export default App;
