import styles from '../components/Button.module.css';

export function Button() {
  return (
    <button
      type="button"
      className={styles.error}
    >
      Destroy
    </button>
  );
}
