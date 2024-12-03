import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}>
        <span
          className={`${styles.loaderInner} ${styles.loaderInnerFirst}`}
        ></span>
        <span
          className={`${styles.loaderInner} ${styles.loaderInnerSecond}`}
        ></span>
        <span
          className={`${styles.loaderInner} ${styles.loaderInnerThird}`}
        ></span>
      </span>
    </div>
  );
}
