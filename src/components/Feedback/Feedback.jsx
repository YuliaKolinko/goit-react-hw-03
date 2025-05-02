import styles from "./Feedback.module.css";
export default function Feedback({
  feedback,
  FeedbackSummary,
  FeedbackPositiveProcents,
}) {
  return (
    <div className={styles.feedback}>
      <p className={styles.text}>Good: {feedback.good}</p>
      <p className={styles.text}>Neutral: {feedback.neutral}</p>
      <p className={styles.text}>Bad: {feedback.bad}</p>
      <p className={styles.text}>Total: {FeedbackSummary}</p>
      <p className={styles.text}>
        Positive feedback: {FeedbackPositiveProcents}%
      </p>
    </div>
  );
}
