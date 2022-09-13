import styles from './styles.module.sass';
import downArrowIcon from '../../../img/icons/downarrow.svg';
import plusIcon from '../../../img/icons/plus.svg';
import Tag from './Tag';

function Tags() {
  return (
    <div>
      <div className={styles.tagPanel}>
        <span className={styles.tagPanelImg}>
          <img src={downArrowIcon} alt="Tag Panel" />
        </span>
        <span className={styles.tagPanelName}>Tags</span>
        <button className={styles.tagPanelPlus}>
          <img src={plusIcon} alt="Plus" />
        </button>
      </div>
      <ul className={styles.tagList}>
        <Tag></Tag>
      </ul>
    </div>
  );
}

export default Tags;
