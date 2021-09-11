import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import clsx from 'clsx';
import Tag from '../componets/Tag';
import { BiX, BiChevronRight } from "react-icons/bi";
import Button from '../componets/Button';
import Card from '../componets/Card';
import Category from '../componets/Category';
import AdCard from '../componets/AdCard';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

export default function Home() {
	return (
		<div className={clsx(styles.home, 'container')}>
				<Header />

			<div className={styles.new_card}>
				<h2 className={styles.new_card_title}>Новые обьявления</h2>
				<div className='grid'>
					{[
						...new Array(8).fill(
							<Card 
								title='Услуги сантехника'
								price={150}
								text='Услуги сантехника качественно сантехника качественно сантехника'
								image='https://images.unsplash.com/photo-1606242403117-4755198b9752?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
							/>
						)
					]}
				</div>
			</div>
			<Footer />
		</div>
	)
}
