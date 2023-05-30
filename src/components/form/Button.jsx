import styles from './Button.module.css'

function Button(props){

    return(
        <button type={props.type} className={styles.btn}>{props.children}</button>
    );
};

export default Button;