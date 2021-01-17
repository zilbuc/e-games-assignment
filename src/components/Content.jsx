import { ApplicationForm, InfoBlocks } from './index'

import styles from './Content.module.css'

export const Content = () => {
  
  
  return (
    <div className={styles.content}>
      <div className={styles.mainText}>
        Main content
      </div>
      
      <ApplicationForm />
      
      <InfoBlocks />
    </div>
  )
}
