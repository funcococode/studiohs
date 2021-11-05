import styles from '../app/app.module.css'
import {AtSymbolIcon,PhoneIcon} from "@heroicons/react/outline";
import Bg from '../app/bg.png';

function Main(){
	return(
		<main className={styles.main}>
			<nav>
				<h2 className={styles.headerTitle}>
					Studio HS
				</h2>
				<ul className={styles.navList}>
					<li><PhoneIcon className={styles.navIcon}/></li>
					<li><AtSymbolIcon className={styles.navIcon} /></li>
				</ul>
			</nav>
			<div className={styles.landingSection}>
				<h1 className={styles.leadLine}>
					<img src={Bg} /> 
					We create sound that people<br/>love to listen
				</h1>
				<ul className={styles.navSocialList} >
					<li className={styles.navSocialIcon}>FB</li>
					<li className={styles.navSocialIcon}>IN</li>
					<li className={styles.navSocialIcon}>YT</li>
					<li className={styles.navSocialIcon}>SP</li>
					<li className={styles.navSocialIcon}>AM</li>
				</ul>

			</div>
		</main>
	)
}
export default Main;
