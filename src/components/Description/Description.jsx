import styles from "./Description.module.css";
export default function Description() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title_span}>Sip</span> Happens Café
      </h1>
      <p className={styles.text}>
        Please leave your feedback <span className={styles.span}>about </span>
        our service by selecting one{" "}
        <span className={styles.span}> of the </span>
        options <span className={styles.span}>below</span>.
      </p>
    </div>
  );
}
