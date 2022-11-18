---
sidebar_position: 5
---
# Creating a development server

## Available Technologies

The main tools that you can use to create automatic deployment on your website are 
- [Jenkins](https://www.jenkins.io/) 
- [Docker Container](https://www.docker.com/)

## The building of the project

The main problem at the time is serving the static website directly from the backend sever and working together.

## Configuring .env file 
The first step you need to take is to configure the .env file both in client and server configuration.

so the client config will look like this 

```json
 {
    //API
    REACT_APP_API: 'http://localhost:4000',
    // HOST
    HOST_API_KEY: 'https://api-dev-minimal-v4.vercel.app',
    // MAPBOX
    MAPBOX_API: '',
    // FIREBASE
    FIREBASE_API_KEY: '',
    FIREBASE_AUTH_DOMAIN: '',
    FIREBASE_PROJECT_ID: '',
    FIREBASE_STORAGE_BUCKET: '',
    FIREBASE_MESSAGING_SENDER_ID: '',
    FIREBASE_APPID: '',
    FIREBASE_MEASUREMENT_ID: '',
    // AWS COGNITO
    AWS_COGNITO_USER_POOL_ID: '',
    AWS_COGNITO_CLIENT_ID: '',
    // AUTH0
    AUTH0_DOMAIN: '',
    AUTH0_CLIENT_ID: '',
  }
```
## The 