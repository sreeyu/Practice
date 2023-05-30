import styles from './UserForm.module.css';
import Button from './Button';

function UserForm(){

    return(
        <form className={styles["user-form"]}>
            <label>Username:</label>
            <input type="text" />
            <label>Age(Years):</label>
            <input type="number" min={13} />
            <Button type='submit' >Add User</Button>
        </form>
    );
};

export default UserForm;