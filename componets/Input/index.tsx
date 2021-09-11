import React from 'react';
import styles from './Input.module.scss';

const Input: React.FC = () =>{
    return(
        <div className={styles.input_block}>
            <input 
                className={styles.input} 
                type="text"
                placeholder='Поиск по объявлениям' 
            />   
        </div>
    )
}

export default Input;