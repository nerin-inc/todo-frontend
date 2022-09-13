import styles from './App.module.sass';
import Header from './components/Header';
import Categories from './components/Categories';
import TaskContainer from './components/TaskContainer';

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <div className={styles.content}>
        <Categories />
        <TaskContainer />
      </div>
    </div>
  );
}

export default App;
