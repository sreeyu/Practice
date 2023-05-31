import styles from './UserInfo.module.css'

function UserInfo(props){
    return (
        <li className={styles['user-info']} >
            {props.children}
        </li>
    );
};

export default UserInfo;