import React from 'react';
import styles from './Menu.module.scss';
import clsx from 'clsx';


const Menu: React.FC = () => {
    return (
        <div className={styles.menu_block}>
            <ul className={styles.menu_list}>
                <li className={styles.menu_link}>
                    <a className={styles.menu_item} href="">Транспорт</a>
                </li>
                <li className={styles.menu_link}>
                    <a className={styles.menu_item} href="">Недвижимость</a>
                </li>
                <li className={styles.menu_link}>
                    <a className={styles.menu_item} href="">Электроника</a>
                </li>
                <li className={styles.menu_link}>
                    <a className={styles.menu_item} href="">Дом и сад</a>
                </li>
                <li className={styles.menu_link}>
                    <a className={styles.menu_item} href="">Услуги</a>
                </li>
                <li className={styles.menu_link}>
                    <a className={styles.menu_item} href="">Работа</a>
                </li>
                <li className={styles.menu_link}>
                    <a className={styles.menu_item} href="">Животные</a>
                </li>
                <li className={styles.menu_link}>
                    <a className={styles.menu_item} href="">Хобби и отдых</a>
                </li>
                <li className={styles.menu_link}>
                    <a className={styles.menu_item} href="">Личные вещи</a>
                </li>
                <li className={styles.menu_link}>
                    <a className={styles.menu_item} href="">Отдам даром</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
