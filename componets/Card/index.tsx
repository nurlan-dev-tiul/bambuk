import React from 'react';
import Link from 'next/link';
import Image, { ImageProps } from 'next/image';
import Button from '../Button';
import { CardProps } from './CardProps';

import styles from './Card.module.scss';


const Card: React.FC<CardProps> = ({title, text, image, price}) => {
    return(
        <div className={styles.wrapper}>
            <Image 
                src={image} 
                alt="Card img" 
                layout='fill'
                className={styles.img_card} 
            />
            <h3 className={styles.card_title}>{title}</h3>
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