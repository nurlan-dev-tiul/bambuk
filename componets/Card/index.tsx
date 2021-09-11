import React from 'react';
import Link from 'next/link';

import Button from '../Button';
import { CardProps } from './CardProps';

import styles from './Card.module.scss';


const Card: React.FC<CardProps> = ({title, text, image, price}) => {
    return(
        <div className={styles.wrapper}>
            <img className={styles.img} src={image} alt="Card img" />
            <h3>{title}</h3>
            <p>{text}</p>
            <div className={styles.priceBlock}>
                <span className={styles.price}>{price} сом</span>
                <Link href="/announcement/test-123">
                    <a><Button color='green' size='small'>Подробнее</Button></a>
                </Link>
            </div>
        </div>
    )
}

export default Card;