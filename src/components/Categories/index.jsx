import styles from './styles.module.sass';
import Filters from './Filters';
import Tags from './Tags';

function Categories() {
  return (
    <div className={styles.categories}>
      <Filters />
      <Tags />
    </div>
  );
}

export default Categories;
