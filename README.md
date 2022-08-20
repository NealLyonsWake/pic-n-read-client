# Pic 'n Read

## Deployed Web Application
Check it out [here.](https://pic-n-read.netlify.app/)

## Video demo
Check out a demo [here.](https://youtu.be/PPYIagGXU58)

## What is this?
To celebrate Pride Month and be part of Pride Hacks 2 our team were inspired to build a web application that supports accessibility. This repo is the client side which enables users to upload photographs that include text in order for the text to be read out aloud by the application. 

## How is it used?
Users can upload photographs (.png or jpg) by using the '+' button and then press 'play' to listen to any valid text in that image out loud. It is possible to photograph paper copies of documents and letters with a smartphone which could offer assistance in reading the document to the user.

## How does it work?
1. This client side will make a request to the [server side](https://github.com/NealLyonsWake/pic-n-read-server) in order to produce the appropriate key to enable the request to [API Ninjas](https://api-ninjas.com/) Image to Text API. The call will return the converted text from the photograph.
2. The [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) then reads the text out loud.

## How we built it
We set our main project objectives from concept to deployment via the following:
  1. We determined our user stories based on our main objective
  2. We then created the wireframes for our UI
  3. Both our user stories and UI wireframes are available to view <a href="https://miro.com/app/board/uXjVOqCuhIo=/?share_link_id=884894788321" target="_blank">here.</a>

## Challenges we ran into
Deployment took some time as there was a client and server side to manage. When signing up to the
project we thought with the time difference in the UK we would have more of the Sunday to
complete than expected! Thankfully we established the deadline date on the first day to manage
how much time was given to each section.
Initially, Netlify did not recognise the CSS file; this was easily fixed by altering the source folder
destination.

## Accomplishments that we're proud of
The display of the text on the application was exciting to see for the first time!
The on-change Event was also great which allowed us to show the user a brief description of the file
they had successfully chosen and uploaded to the app.

## What we learned
That starting a project from scratch, 24 hours for completion is not a long period of time. We
had lots of aspirations for the app which we had to be strict not to over-scope. We learnt to leave
contingency time for the demo on the last day. We further strengthened our skills in dividing up
server and client for ease of deployment.
We learnt more about Cross-Origin Resource Sharing (CORs) and Netlify, specifically about how using
a deployed app rather than true Https could cause errors in the development tools.

## What's next for Pick 'n Read
We have so many ideas. One of which we would like to do is add the ability to see the uploaded
images preview and then save this alongside the audio to a backend. Adding a login would be a nice
addition for Pic ‘n Read. We would like to provide file conversion to open up image compatibility for
users. We would also like to provide further portability by allowing phone/tablet camera access. This
could provide potential for market segmentation to allow not only users wishing to hear audio but
also provide help on the go and as a study aid. There is also room to provide options to the user for
different voices to sound less monotonous and provide languages to be inclusive to users around the
world.

## How can you run it in development?
1. Simply clone this repo
2. Ensure you register an account with [API Ninjas](https://api-ninjas.com/)
3. Ensure you have Live Server installed in VS Code
4. Select the 'index.html' file and click 'Go Live' in the bottom-right corner of VS Code
