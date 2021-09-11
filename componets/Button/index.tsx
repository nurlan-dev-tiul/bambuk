import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import { ButtonProps } from './Button.props';



export const colors = {
    green: styles.greenBody,
    grey: styles.greyBody,
    white: styles.whiteBody,
    border: styles.borderBody
}

export const sizes = {
    small: styles.small,
    middle: styles.middle,
    large: styles.large
}


const Button: React.FC<ButtonProps> = ({children, color, className, size, onClick}) => {
    return (
        <>
            <button 
                onClick={onClick}
                className={clsx(styles.btn, className, colors[color], sizes[size])}
            >
                {children}    
            </button>  
        </>
    )
}

export default Button;
