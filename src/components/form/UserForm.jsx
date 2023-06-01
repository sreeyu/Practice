import React, { useState } from 'react';
import styles from './UserForm.module.css';
import Button from './Button';

function UserForm(props){

    const [username, setUsername] = useState('');
    const [userAge, setUserAge] = useState('');

    const getUsername = (event) => {
        setUsername(event.target.value);
    }

    const getUserAge = (event) => {
        setUserAge(event.target.value);
    }

    const getUserData = (event) => {
        event.preventDefault();

        const userData = {
            name: username,
            age: +userAge,
            id: Math.random().toString()
        };
        props.onInput(userData);
        setUsername('');
        setUserAge('');
    }

    return(
        <form onSubmit={getUserData} className={styles["user-form"]}>
            <label>Username:</label>
            <input value={username} type="text" onChange={getUsername} />
            <label>Age(Years):</label>
            <input value={userAge} type="number" min={13} onChange={getUserAge} />
            <Button type='submit' >Add User</Button>
        </form>
    );
};

export default UserForm;