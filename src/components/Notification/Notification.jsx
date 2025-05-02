import styles from "./Notification.module.css";
export default function Notification() {
  return (
    <div className={styles.notification}>
      <p className={styles.text}>No feedback yet! </p>
    </div>
  );
}
