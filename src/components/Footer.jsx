import styles from './Footer.module.css';

export const Footer = ({ links, content }) => (
  <div className={styles.footer}>
    <div className={styles.footerLinksContainer}>
      {
        links.map(({ id, value }) => (
          <div key={id} className={styles.footerLink}>
            <a href='/#'>{value}</a>
          </div>
        ))
      }
    </div>
    
    <div className={styles.footerInfo}>
      {content}
    </div>
  </div>
)
