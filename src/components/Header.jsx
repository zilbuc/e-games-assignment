import logo from '../assets/testpage_logo.svg';
import { Navigation } from './index';

import styles from './Header.module.css';

export const Header = () => {
  
  const menuLinks = [
    {
      id: "1",
      value: "Projects",
      submenu: [
        {
          "id": "11",
          "value": "Link 1"
        },
        {
          "id": "12",
          "value": "Link 2"
        },
        {
          "id": "13",
          "value": "Link 3"
        },
        {
          "id": "14",
          "value": "Link 4"
        },
        {
          "id": "15",
          "value": "Link 5"
        }
      ],
    },
    {
      id: "2",
      value: "About us"
    },
    {
      id: "3",
      value: "Testimonials"
    },
    {
      id: "4",
      value: "Contacts"
    }
  ]
  
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo" className={styles.logo}/>

      <Navigation menuLinks={menuLinks} />
    </div>
  )
}
