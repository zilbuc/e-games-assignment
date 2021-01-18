import { ApplicationForm, InfoBlocks, MainText } from './index';
import { useQuery } from '@apollo/client';
import { getPageBody, getPageTitle } from '../utils/helpers';
import { GET_PAGE_DATA } from '../utils/dataQueries';

import styles from './Content.module.css';

export const Content = () => {
  
  const { data } = useQuery(GET_PAGE_DATA)
  
  const mainTextTitle = getPageTitle(data?.mainText[0])
  const mainTextBody = getPageBody(data?.mainText[0])
  
  const applicationFormTitle = getPageTitle(data?.applicationForm[0])
  const applicationFormBody = getPageBody(data?.applicationForm[0])
  
  const infoBlocksBody = getPageBody(data?.infoBlocks[0])
  
  return (
    <div className={styles.content}>
      <MainText title={mainTextTitle} body={mainTextBody} />
      
      <ApplicationForm title={applicationFormTitle} body={applicationFormBody} />
      
      <InfoBlocks body={infoBlocksBody} />
    </div>
  )
}
