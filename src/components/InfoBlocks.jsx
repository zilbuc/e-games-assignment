
import styles from './InfoBlocks.module.css';

const content = {
  body: [
    'Trust fund salvia blue bottle PBR&B squid fanny pack occaecat, lyft wolf flexitarian. Kombucha godard nostrud la croix post-ironic proident, do viral. Commodo nisi cardigan sartorial in, palo santo fixie shoreditch bitters tumeric offal direct trade tote bag wayfarers. Godard dolor man bun umami. ',
    'Yr 8-bit marfa gochujang. Id microdosing artisan iPhone in enamel pin air plant food truck tattooed flannel. Knausgaard vaporware kogi, tempor meditation kinfolk iPhone. Dreamcatcher man braid disrupt copper mug sint jianbing beard 3 wolf moon palo santo adaptogen meditation +1',
    'Taxidermy qui succulents waistcoat irony whatever direct trade duis. Whatever minim leggings quinoa coloring book. Taiyaki gochujang ullamco tempor cliche esse squid swag shaman reprehenderit duis nulla waistcoat mumblecore neutra. Art party umami ipsum cornhole. Iceland veniam culpa, magna cold-pressed officia gastropub portland dolor enim microdosing irure.',
  ]
  
}
export const InfoBlocks = () => {
  
  
  return (
    <div className={styles.infoBlocks}>
      {
        content.body.map((block, index) =>
          <div key={`${index}-block`} className={styles.block}>{block}</div>)
      }
    </div>
  )
}
