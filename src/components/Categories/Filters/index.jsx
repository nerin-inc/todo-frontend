import styles from './styles.module.sass';
import inboxIcon from '../../../img/icons/inbox.svg';
import todayIcon from '../../../img/icons/today.svg';
import upcomingIcon from '../../../img/icons/upcoming.svg';

function Filters() {
  return (
    <ul className={styles.Filters}>
      <li className={styles.filter}>
        <span className={styles.icon}>
          <img src={inboxIcon} alt="InboxIcon" />
        </span>
        <span className={styles.name}>Inbox</span>
      </li>
      <li className={styles.filter}>
        <span className={styles.icon}>
          <img src={todayIcon} alt="TodayIcon" />
        </span>
        <span className={styles.name}>Today</span>
      </li>
      <li className={styles.filter}>
        <span className={styles.icon}>
          <img src={upcomingIcon} alt="UpcomingIcon" />
        </span>
        <span className={styles.name}>Upcoming</span>
      </li>
    </ul>
  );
}

export default Filters;
