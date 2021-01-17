import { ApplicationForm, InfoBlocks, MainText } from './index'

import styles from './Content.module.css'

export const Content = () => {
  
  
  return (
    <div className={styles.content}>
      <MainText />
      
      <ApplicationForm />
      
      <InfoBlocks />
    </div>
  )
}
