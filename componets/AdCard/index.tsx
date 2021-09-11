import React from 'react';
import Button from '../Button';

import styles from './Ad.module.scss';

const AdCard: React.FC = () =>{
    return(
        <div className={styles.wrapper}>
            <div className={styles.image}>
                <img className={styles.ad_img} src="https://images.unsplash.com/photo-1573496546735-c274b1fd186b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
            </div>
            <div className={styles.title_content}>
                <h3>Услуги сантехника</h3>
                <span>Строительство и ремонт</span>
                <p>Услуги сантехника деалем все качественно и в срок...</p>
                <span>150 сом</span>
                <span>Бишкек 2021-08-11</span>
            </div>
            <div className={styles.likeBlock}>
                
                <Button color='green' size='small'>Подробнее</Button>
            </div>

        </div>
    )
}

export default AdCard;