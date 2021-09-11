import React from 'react';
import Header from '../../componets/Header';
import { BiShow, BiHeart, BiAlarm} from "react-icons/bi";
import styles from '../../styles/Announcement.module.scss';
import clsx from 'clsx';
import Button from '../../componets/Button';
import Footer from '../../componets/Footer';

const Announcement: React.FC = () =>{
    const [visiblePhone, setVisbilePhone] = React.useState<string>('Показать номер')

    const clickPhoneBtn = () => {
        setVisbilePhone('+996-707-266-860')
    }

    return(
        <div className='container'>
            <Header />
            <div className={styles.detail_block}>
                <div className={styles.detail_count_info}>
                    <div className={styles.img_block}>
                        <img className={styles.img} src='https://images.unsplash.com/photo-1630673429477-186308ef87d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80' />
                    </div>
                    <h1 className={styles.detail_title}>Услуги сантехника</h1>
                    <div className={styles.detail_count}>
                        <div className={clsx(styles.count_block, 'd-flex align-items-center')}>
                            <BiShow  className={styles.count_icon}/>
                            <span className={styles.count_item}>1000</span>
                        </div>
                        <div className={clsx(styles.count_block, 'd-flex align-items-center')}>
                            <BiHeart className={styles.count_icon} />
                            <span  className={styles.count_item}>48</span>
                        </div>
                        <div className={clsx(styles.count_block, 'd-flex align-items-center')}>
                                <BiAlarm className={styles.count_icon} />
                                <span  className={styles.count_item}>30 минут назад</span>
                        </div>
                    </div>
                    <div>
                        <p className={styles.detail_text}>
                            Электрик электрика электрик
                            электрик бишкек 24/7

                            Электромонтаж бишкек
                            Электрика
                            Услуги электрик
                            Электрик круглосуточно
                            Электромонтаж бишкек
                            Электрика
                            Услуги электрик
                            Электрик круглосуточно
                        </p>
                    </div>
                    <div className={styles.share}>
                        <h4 className={styles.share_title}>Поделиться с друзьями</h4>
                        <div className={styles.share_img_block}>
                            <img className={styles.share_icon} src="https://cdn.pixabay.com/photo/2017/01/10/04/09/bubbles-1968272_960_720.png" alt="" />
                            <img className={styles.share_icon} src="https://cdn.pixabay.com/photo/2017/01/16/20/21/bubbles-1985148_960_720.png" alt="" />
                            <img className={styles.share_icon} src="https://cdn.pixabay.com/photo/2017/01/08/08/01/bubbles-1962356_960_720.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className={styles.user_block}>
                    <div>
                        <div className={styles.user_info}>
                            <div className='d-flex align-items-center'>
                                <img className={styles.user_img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBgZbchuTiUtA3Egi1arN4BEQeoTaUtutQ8A&usqp=CAU" alt="User" />
                                <span>Борис Гадунов</span> 
                            </div>
                            <Button onClick={clickPhoneBtn} color='green' size='middle'>{visiblePhone}</Button>
                        </div>
                        <div className={styles.maps}>
                            <img className={styles.img} src="https://static-maps.yandex.ru/1.x/?api_key=01931952-3aef-4eba-951a-8afd26933ad6&theme=light&lang=ru_RU&size=520%2C440&l=map&spn=0.001958%2C0.020858&ll=74.581351%2C42.876917&lg=0&cr=0&pt=74.581396%2C42.876914%2Ccomma&signature=OnMxOkT8bjGz15pqd_ie57VC5wnqU9bjSy2M8nKObbk=" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Announcement;