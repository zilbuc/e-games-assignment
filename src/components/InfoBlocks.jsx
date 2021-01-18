import styles from './InfoBlocks.module.css';

export const InfoBlocks = ({ body }) => (
  <div className={styles.infoBlocks}>
    {
      body.map((block, index) =>
        <div key={`${index}-block`} className={styles.block}>{block}</div>)
    }
  </div>
)

