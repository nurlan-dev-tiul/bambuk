import styles from '../styles/Home.module.scss'
import clsx from 'clsx';
import Card from '../componets/Card';
import Header from '../componets/Header';
import Footer from '../componets/Footer';

export default function Home() {
	return (
		<div className={clsx(styles.home, 'container')}>
				<Header />

			<div className={styles.new_card}>
				<h2 className={styles.new_card_title}>Новые обьявления</h2>
				<div className='grid'>
					<Card 
						title='Услуги сантехника'
						price={150}
						text='Услуги сантехника качественно сантехника качественно сантехника'
						image='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'
					/>
					<Card 
						title='Услуги сантехника'
						price={150}
						text='Услуги сантехника качественно сантехника качественно сантехника'
						image='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'
					/>
					<Card 
						title='Услуги сантехника'
						price={150}
						text='Услуги сантехника качественно сантехника качественно сантехника'
						image='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'
					/>
					<Card 
						title='Услуги сантехника'
						price={150}
						text='Услуги сантехника качественно сантехника качественно сантехника'
						image='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'
					/>
					<Card 
						title='Услуги сантехника'
						price={150}
						text='Услуги сантехника качественно сантехника качественно сантехника'
						image='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'
					/>
					<Card 
						title='Услуги сантехника'
						price={150}
						text='Услуги сантехника качественно сантехника качественно сантехника'
						image='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'
					/>
					<Card 
						title='Услуги сантехника'
						price={150}
						text='Услуги сантехника качественно сантехника качественно сантехника'
						image='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'
					/>
					<Card 
						title='Услуги сантехника'
						price={150}
						text='Услуги сантехника качественно сантехника качественно сантехника'
						image='https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg'
					/>
				</div>
			</div>
			<Footer />
		</div>
	)
}
