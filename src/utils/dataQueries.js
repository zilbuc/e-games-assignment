import { gql } from '@apollo/client'

export const GET_HEADER_FOOTER_DATA = gql`
  query {
    navigation {
      id
      value
      submenu {
        id
        value
      }
    }
    pageData(pageId: "footer") {
      pageContent {
        body
      }
    }
  }
`

export const GET_PAGE_DATA = gql`
  query {
    mainText: pageData(pageId: "mainText"){
      pageContent {
        title
        body
      }
    }
    applicationForm: pageData(pageId: "applicationForm") {
      pageContent {
        title
        body
      }
    }
    infoBlocks: pageData(pageId: "infoBlocks") {
      pageContent {
        body
      }
    }
  }
`
