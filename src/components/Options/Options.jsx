import styles from "./Options.module.css";
export default function Options({ totalFB, onFeedbackAction }) {
  return (
    <>
      <button
        className={styles.button}
        onClick={() => onFeedbackAction("good")}
        datatype="good"
      >
        Good
      </button>
      <button
        className={styles.button}
        onClick={() => onFeedbackAction("neutral")}
        datatype="neutral"
      >
        Neutral
      </button>
      <button
        className={styles.button}
        onClick={() => onFeedbackAction("bad")}
        datatype="bad"
      >
        Bad
      </button>

      {totalFB > 0 && (
        <button
          className={styles.button}
          type="button"
          onClick={() => onFeedbackAction("reset")}
        >
          Reset
        </button>
      )}
    </>
  );
}
