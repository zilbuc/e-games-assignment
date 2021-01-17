import { Header, Content, Footer } from './components/index';

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      
      <Content />
      
      <Footer />
    </div>
  );
}

export default App;
