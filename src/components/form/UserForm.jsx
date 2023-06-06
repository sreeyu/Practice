import React, { useRef } from 'react';
import styles from './UserForm.module.css';
import Button from './Button';

function UserForm(props){


    const inputNameRef = useRef();
    const inputAgeRef = useRef();

    const getUserData = (event) => {
        event.preventDefault();

        const userData = {
            name: inputNameRef.current.value,
            age: +inputAgeRef.current.value,
            id: Math.random().toString()
        };
        props.onInput(userData);
        inputNameRef.current.value = '';
        inputAgeRef.current.value = '';
    }

    return(
        <form onSubmit={getUserData} className={styles["user-form"]}>
            <label>Username:</label>
            <input type="text" ref={inputNameRef} />
            <label>Age(Years):</label>
            <input type="number" ref={inputAgeRef} />
            <Button type='submit' >Add User</Button>
        </form>
    );
};

export default UserForm;