import styles from './MainText.module.css';

export const MainText = ({ title, body }) => (
  <div className={styles.mainText}>
    <div className={styles.title}>{title}</div>
    
    <div>
      {
        body.map((paragraph, index) =>
          <div key={`${index}-par`} className={styles.paragraph}>{paragraph}</div>)
      }
    </div>
  </div>
)
