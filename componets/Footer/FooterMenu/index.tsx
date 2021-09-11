import React from 'react';
import Link from 'next/link';

import styles from '../Footer.module.scss';
import clsx from 'clsx';


const FooterMenu: React.FC = () => {
    return(
        <footer className={clsx(styles.footer, 'grid')}>

            <ul className={styles.footer_menu_list}>
                <li className={styles.footer_menu_lin}><h4>Навигация</h4></li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">О нас</a>
                </li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Блог</a>
                </li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Помощь</a>
                </li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Контакты</a>
                </li>
            </ul>
            <ul className={styles.footer_menu_list}>
                <li className={styles.footer_menu_lin}><h4>Мы в социальных сетях</h4></li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Facebook</a>
                </li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Instagram</a>
                </li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Twitter</a>
                </li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">VK</a>
                </li>
            </ul>
            <ul className={styles.footer_menu_list}>
                <li className={styles.footer_menu_lin}><h4>Заработок</h4></li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Вакансии</a>
                </li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Реклама на сайте</a>
                </li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Разместить обьявление</a>
                </li>
            </ul>
            <ul className={styles.footer_menu_list}>
                <li className={styles.footer_menu_lin}><h4>Советы</h4></li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Профиль</a>
                </li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Для бизнеса</a>
                </li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Безопасность</a>
                </li>
                <li className={styles.footer_menu_lin}>
                    <a className={styles.footer_menu_item} href="">Берегитесь мошенников</a>
                </li>
            </ul>
        </footer>
    )
}

export default FooterMenu;