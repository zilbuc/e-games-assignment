import { menuLinks } from './Header';

import styles from './Footer.module.css';

const content = {
  body: 'Unicorn church-key PBR&B yuccie nisi in. Commodo velit lyft vaporware, leggings chartreuse lomo poutine raw denim adaptogen blog YOLO church-key. Yuccie schlitz tacos single-origin coffee aute. Schlitz keffiyeh four loko ut, aute minim eu williamsburg ethical. Coloring book ramps roof party taiyaki squid pop-up mollit chillwave id vexillologist tbh. Af four loko raw denim, asymmetrical trust fund cray meh ennui single-origin coffee et swag shaman pop-up.'
}

export const Footer = () => {
  
    return (
    <div className={styles.footer}>
      <div className={styles.footerLinksContainer}>
        {
          menuLinks.map(({ id, value }) => (
            <div key={id} className={styles.footerLink}>
              <a href='/#'>{value}</a>
            </div>
          ))
        }
      </div>
      
      <div className={styles.footerInfo}>
        {content.body}
      </div>
    </div>
  )
}
