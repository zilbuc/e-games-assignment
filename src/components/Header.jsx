import logo from '../assets/testpage_logo.svg';
import { Navigation } from './index';

import styles from './Header.module.css';

export const Header = ({ links }) => (
  <div className={styles.header}>
    <img src={logo} alt="logo" className={styles.logo}/>
    
    <Navigation menuLinks={links} />
  </div>
)

