import React from 'react';
import styles from './Tag.module.scss';
import clsx from 'clsx';
import { TagProps } from './Tag.props';

export const colors = {
    green: styles.greenBody,
    grey: styles.greyBody,
    white: styles.whiteBody
}

export const sizes = {
    small: styles.small,
    middle: styles.middle,
}


const Tag: React.FC<TagProps> = ({children, color, className, size}) => {
    return (
        <>
            <a 
                className={clsx( className, styles.tag, colors[color], sizes[size])}
                href='#'
            >
                    {children}
            </a>
        </>
    )
}

export default Tag;
