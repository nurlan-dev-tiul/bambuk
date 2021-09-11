import React from 'react';
import styles from './Header.module.scss';
import Input from '../Input';
import Button from '../Button';
import { BiUser, BiMobile, BiMailSend} from "react-icons/bi";
import Menu from '../Menu';

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.header_top}>
                <div className={styles.header_info}>
                    <BiMobile className={styles.contact_icon}/>
                    <span className={styles.header_phone} style={{marginTop: '2px'}}> +996 707 266 860</span>
                    <BiMailSend className={styles.contact_icon}/>
                    <u className={styles.header_phone}> info@adante.com</u>
                </div>
                <div className={styles.header_top_menu}>
                    <ul className={styles.top_menu_list}>
                        <li className={styles.top_menu_link}>
                            <a className={styles.top_menu_item} href="#">Блог</a>
                        </li>
                        <li className={styles.top_menu_link}>
                            <a className={styles.top_menu_item} href="#">О нас</a>
                        </li>
                        <li className={styles.top_menu_link}>
                            <a className={styles.top_menu_item} href="#">Помощь</a>
                        </li>
                        <li className={styles.top_menu_link}>
                            <a className={styles.top_menu_item} href="#">Контакты</a>
                        </li>
                    </ul>
                </div> 
            </div>
            <div className={styles.header_middle}>
                <h1>Lalafo 2.0</h1>
                <Input />
                <div className={styles.auth_block}>
                    <Button color='border' size='small'>
                        <BiUser className={styles.auth_icon} />
                        Вход и регистрация
                    </Button>
                </div>
            </div>  
            <Menu />
        </header>
    )
}

export default Header;