import React from 'react';
import Image from 'next/image'
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
                        <Image 
                            layout='responsive'
                            width={600}
                            height={395}
                            src='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg' 
                            className={styles.img} 
                        />
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
                            <Image 
                                className={styles.share_icon} 
                                src="https://cdn.pixabay.com/photo/2017/01/10/04/09/bubbles-1968272_960_720.png" 
                                alt="" 
                                width={50}
                                height={50}
                            />
                            <Image 
                                className={styles.share_icon} 
                                src="https://cdn.pixabay.com/photo/2017/01/16/20/21/bubbles-1985148_960_720.png" 
                                width={50}
                                height={50}
                                alt="" 
                            />
                            <Image 
                                className={styles.share_icon} 
                                src="https://cdn.pixabay.com/photo/2017/01/08/08/01/bubbles-1962356_960_720.png" 
                                width={50}
                                height={50}
                                alt="" 
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.user_block}>
                    <div>
                        <div className={styles.user_info}>
                            <div className='d-flex align-items-center'>
                                <Image 
                                    className={styles.user_img} 
                                    src="https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_960_720.jpg" 
                                    alt="User" 
                                    width={40}
                                    height={40}
                                />
                                <span className={styles.user_name}>Борис Гадунов</span> 
                            </div>
                            <Button onClick={clickPhoneBtn} color='green' size='middle'>{visiblePhone}</Button>
                        </div>
                        <div className={styles.maps}>
                            <h1>Здесь будет контейнер для google maps</h1>
                            {/* <img 
                                className={styles.img} 
                                src="https://cdn.pixabay.com/photo/2013/06/06/15/36/world-117174_960_720.png" 
                            alt="" /> */}
                        </div>
                    </div>
                </div>
                <div className={styles.comment_block}>
                    <div className={styles.comment_form}>
                        <h4 className={styles.form_title}>Написать комментарий</h4>
                        <textarea className={styles.textarea} name=""  id="" placeholder='Ваш комментарии'></textarea>
                        <Button color='green' size='middle' >Добавить комментарии</Button>
                    </div>
                    <div>
                        <h4 className={styles.comment_item_title}>127 Комментариев</h4>
                        <div className={styles.comment_item}>
                            <div className={styles.comment_item_user}>
                                <div className='d-flex align-items-center'>
                                    <Image 
                                        className={styles.user_img} 
                                        src="https://cdn.pixabay.com/photo/2017/12/31/15/56/portrait-3052641_960_720.jpg" 
                                        alt="User" 
                                        width={40}
                                        height={40}
                                    />
                                    <div className='d-flex align-items-center justify-content-between w-100vh'>
                                        <p className={styles.comment_user_name}>Борис Гадунов</p> 
                                        <p className={styles.comment_item_date}>22.04.2021</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.comment_item_text}>
                                <p>Электрик электрика электрик электрик бишкек 24/7 Электромонтаж бишкек Электрика 
                                    Услуги электрик Электрик круглосуточно Электромонтаж бишкек Электрика 
                                    Услуги электрик Электрик круглосуточно</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Announcement;