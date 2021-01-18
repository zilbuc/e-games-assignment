import { Header, Content, Footer } from './components/index';
import { useQuery } from '@apollo/client';
import { getPageBody } from './utils/helpers';
import { GET_HEADER_FOOTER_DATA } from './utils/graphqlUtils';

import styles from './App.module.css';

export const App = () => {
  
  const { data } = useQuery(GET_HEADER_FOOTER_DATA)
  
  const linksForFooter = data ? data.navigation : []
  const linksForHeader = linksForFooter.filter((el, index) => index !== 0)

  const footerContent = getPageBody(data?.pageData[0])
  
  return (
    <div className={styles.App}>
      <Header links={linksForHeader} />
      
      <Content />
      
      <Footer links={linksForFooter} content={footerContent} />
    </div>
  );
}
