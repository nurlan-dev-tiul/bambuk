import React from 'react';
import Link from 'next/link';

import styles from './Footer.module.scss';
import FooterMenu from './FooterMenu';


const Footer: React.FC = () => {
    return(
        <>
        <FooterMenu />
            <div className={styles.footer_copyright}>
                <span>Copyright 2021 bambuk.com</span>
            </div>
        </>
    )
}

export default Footer;