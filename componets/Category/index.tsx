import React from 'react';
import Tag from '../Tag';

import styles from './Category.module.scss';

const categories = [
    {
        name: 'Услуги',
        total: 15
    },
    {
        name: 'Транспорт',
        total: 1500
    },
    {
        name: 'Недвижимость',
        total: 300
    },
    {
        name: 'Электроника',
        total: 1
    },
    {
        name: 'Животные',
        total: 200
    },
    {
        name: 'Личные вещи',
        total: 123
    },
    {
        name: 'Спорт и хобби',
        total: 0
    },
    {
        name: 'Отдам даром',
        total: 150
    },
]

const Category: React.FC = () => {
    return(
        <div className={styles.wrapper}>
            <h2>Категории</h2>
            <ul className={styles.cat_list}>
                {
                    categories.map(({name, total}) => (
                    <li key={name} className={styles.cat_link}>
                        <a className={styles.item} href="#">{name}</a>
                        {
                            total > 0 ? <Tag color='green' size='small'>{total}</Tag> : ''
                        }
                        
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Category;