# Pic 'n Read

## Deployed Web Application
Check it out [here.](https://pic-n-read.netlify.app/)

## What is this?
To celebrate Pride Month and be part of Pride Hacks 2 our team were inspired to build a web application that supports accessibility. This repo is the client side which enables users to upload photographs that include text in order for the text to be read out aloud by the application. 

## How is it used?
Users can upload photographs (.png or jpg) by using the '+' button and then press 'play' to listen to any valid text in that image out loud. It is possible to photograph paper copies of documents and letters with a smartphone which could offer assistance in reading the document to the user.

## How does it work?
1. This client side will make a request to the [server side](https://github.com/NealLyonsWake/pic-n-read-server) in order to produce the appropriate key to enable the request to [API Ninjas](https://api-ninjas.com/) Image to Text API. The call will return the converted text from the photograph.
2. The [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) then reads the text out loud.

## How can you run it in development?
1. Simply clone this repo
2. Ensure you register an account with [API Ninjas](https://api-ninjas.com/)
3. Ensure you have Live Server installed in VS Code
4. Select the 'index.html' file and click 'Go Live' in the bottom-right corner of VS Code