import styles from './App.module.css';
import UserForm from './components/form/UserForm';

function App() {
  return (
    <div>
      <section className={styles.form} >
        <UserForm />
      </section>
    </div>
  );
}

export default App;
