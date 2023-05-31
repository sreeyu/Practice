import styles from './App.module.css';
import UserForm from './components/form/UserForm';
import UserList from './components/list/UserList';

function App() {

  const usersList = [
    {name:' Mark', age: 31, id: 'u1'},
    {name: 'Sara', age: 25, id: 'u2'}
  ];
  
  return (
    <div>
      <section className={styles.form} >
        <UserForm />
      </section>
      <section className={styles.user} >
        <UserList users={usersList} />
      </section>
    </div>
  );
}

export default App;
