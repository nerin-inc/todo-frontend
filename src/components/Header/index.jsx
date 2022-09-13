import styles from './styles.module.sass';
import menuIcon from '../../img/icons/menu.svg';
import homeIcon from '../../img/icons/home.svg';
import searchIcon from '../../img/icons/search.svg';
import settingsIcon from '../../img/icons/settings.svg';
import userIcon from '../../img/icons/userIcon.jpg';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.section}>
        <div className={styles.item}>
          <span className={styles.icon}>
            <img src={menuIcon} alt="menu" />
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>
            <img src={homeIcon} alt="menu" />
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>
            <img src={searchIcon} alt="menu" />
          </span>
          <input className={styles.search} type="text" />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.item}>
          <span className={styles.icon}>
            <img src={settingsIcon} alt="menu" />
          </span>
        </div>
        <div className={styles.item}>
          <span className={styles.icon}>
            <img className={styles.userIcon} src={userIcon} alt="menu" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
