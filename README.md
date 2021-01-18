# E-Games Assignment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Some comments:

- I did not use 'loading' and 'error' that useQuery hook returns. Having error handling mechanism for real-world
  applications is imperative, but this example works with a local server, data is fetched instantly and having loader
  component displayed while data is being loaded would result in unnecessary screen flickering. 
- server-side of the application is super simple, i.e. posted message is not saved anywhere, just logged-out in server 
runtime environment.
