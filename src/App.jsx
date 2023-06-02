import React, { useState } from 'react'
import styles from './App.module.css';
import UserForm from './components/form/UserForm';
import UserList from './components/list/UserList';
import PopupBox from './components/popup/PopupBox';

function App() {

  const [usersList, setUserList] = useState([
    {name:' Mark', age: 31, id: 'u1'},
    {name: 'Sara', age: 25, id: 'u2'}
  ]);

  const [popup, setPopup] = useState(false);

  const getUser = (newUser) => {
    if(newUser.name === '' || newUser.age === ''){
      setPopup(true);
    }
    else{
      setUserList(prevList => {
        return [newUser, ...prevList]
      })
    }
  }

  const closePopup = () =>{
    setPopup(false);
  }
  
  return (
    <div>
      <section className={styles.form} >
        <UserForm onInput={getUser} />
      </section>
      <section className={styles.user} >
        <UserList users={usersList} />
      </section>
      {popup && <PopupBox className={styles.popups} popAction={closePopup}/>}
    </div>
  );
}

export default App;
