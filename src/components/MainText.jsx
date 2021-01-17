import styles from './MainText.module.css';

const content = {
  title: 'Crucifix cronut occupy shoreditch occaecat',
  body: [
    'Williamsburg est hot chicken sartorial keffiyeh palo santo banh mi hella humblebrag. Normcore tousled pork belly shoreditch small batch asymmetrical. PBR&B kinfolk mustache beard freegan vexillologist church-key four loko humblebrag shoreditch fingerstache anim etsy. Palo santo hoodie gastropub brunch authentic. Pickled fingerstache fixie do, ex butcher put a bird on it nulla affogato. Cloud bread hexagon ad sed yuccie humblebrag live-edge scenester leggings. Adaptogen jianbing cold-pressed, swag non snackwave organic.',
    'Crucifix cronut occupy shoreditch occaecat, mustache in. Incididunt taxidermy flexitarian schlitz actually venmo. VHS paleo gentrify, aliqua pug nulla fixie keffiyeh master cleanse squid af austin. Twee four dollar toast nostrud tousled gastropub cliche portland. Qui taxidermy et poke shaman. Celiac meggings qui hoodie live-edge portland scenester occupy aliquip adipisicing copper mug brunch.',
    'Duis minim truffaut hoodie farm-to-table hammock taiyaki. Gochujang culpa poke cornhole lo-fi bicycle rights blog taxidermy pork belly disrupt lumbersexual before they sold out drinking vinegar gentrify. Bespoke vexillologist cred, poutine incididunt ut banh mi ex. Squid pinterest stumptown, bicycle rights irure vinyl waistcoat laboris fam dreamcatcher salvia snackwave. Mollit echo park nisi, mustache green juice do pinterest hammock gluten-free meggings marfa adaptogen dolor ugh you probably haven\'t heard of them.',
    'Dolore excepteur cupidatat edison bulb velit chambray fixie jean shorts id before they sold out disrupt hashtag hoodie locavore pug. Meh ramps slow-carb heirloom portland biodiesel. Tumblr food truck vegan cillum, yuccie nostrud hexagon jean shorts wolf etsy venmo roof party offal schlitz tumeric. Sed commodo fanny pack mixtape af master cleanse art party scenester aute kombucha.'
  ]
}

export const MainText = () => {
  
  return (
    <div className={styles.mainText}>
      <div className={styles.title}>{content.title}</div>
      <div className={styles.body}>
        {
          content.body.map((paragraph, index) =>
            <div key={`${index}-par`} className={styles.paragraph}>{paragraph}</div>)
        }
      </div>
    </div>
  )
}
