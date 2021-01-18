import { gql } from '@apollo/client';

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

export const POST_MESSAGE = gql`
  mutation PostMessage($firstName: String!, $lastName: String!, $message: String!) {
    postMessage(firstName: $firstName, lastName: $lastName, message: $message) {
      firstName
      lastName
      message
    }
  }
`
