import UserInfo from './UserInfo';
import styles from './UserList.module.css'

function UserList(props){
    return(
        <ul className={styles['user-list']} >
            {props.users.map(user => (
                <UserInfo key={user.id} id={user.id} >
                    {user.name} ({user.age} years old)
                </UserInfo>
            ))}
        </ul>
    );
};

export default UserList;