import { useState } from 'react';
import classNames from 'classnames';

import styles from './Navigation.module.css';

export const Navigation = ({ menuLinks, submenu }) => {
  // console.log({
  //  menuLinks
  // })
  
  const [ showSubmenu, setShowSubmenu ] = useState("")
  
  return (
    <nav className={classNames(styles.mainMenu, {
      [styles.mainSubMenu]: submenu
    })}>
      {
        menuLinks.map(({ id, value, submenu }) => {
          
          return (
            <div
                key={id}
                className={styles.menuItem}
                onMouseEnter={() => setShowSubmenu(id)}
                onMouseLeave={() => setShowSubmenu("")}
              >
                <a href='/#'>{value}</a>
                
                  {
                    submenu
                      ? (
                          <div className={classNames(styles.submenu, {
                            [styles.displaySubmenu]: showSubmenu === id
                          })}>
                            <div className={classNames(styles.submenuArrow)} />
          
                            <Navigation menuLinks={submenu} submenu />
                          </div>
                        )
                      : null
                  }
              </div>
          )
        })
      }
    </nav>
  )
}

Navigation.defaultProps = {
  submenu: false
}
