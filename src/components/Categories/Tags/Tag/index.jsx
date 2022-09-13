import styles from './styles.module.sass';

function Tag() {
  return (
    <li className={styles.tagItem}>
      <span className={styles.tagDot}>
        <img src="" alt="" />
      </span>
      <span className={styles.tagName}>Tag 1</span>
      <span className={styles.tagSettings}>
        <img src="" alt="" />
      </span>
    </li>
  );
}

export default Tag;
