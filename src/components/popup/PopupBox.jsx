import styles from './PopupBox.module.css'

function PopupBox(props){

    let content;

    if(props.popContent === 'empty'){
        content = 'Please enter a valid name and age (non-empty values)';
    }

    else if(props.popContent === 'age-inv'){
        content = 'Please enter a valid age (>0).'
    }

    const close = () => {
        props.popAction();
    }

    return(
        <div className={styles.container}>
            <div className={styles.popup}>
                <h1 className={styles['popup-header']}>Invalid Input</h1>
                <p className={styles['popup-content']}>{content}</p>
                <button className={styles['ok-button']} onClick={close}>Okay</button>
            </div>
        </div>
    );
};

export default PopupBox;