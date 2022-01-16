# Electron Notes App

## Intro

This is a basic electron app for notes taking, with a complete CRUD function. Though I have used a file to serve as database, I plan on using a database similar to MongoDB or i would rather use firebase in the future.

### How to use this app

1. First install dependencies: `npm install` </br>
2. In one terminal window run: `npm run watch` to compile react code <br/>
3. In other one run: `npm start` to start Electron app
4. In this app, i used a file as DB, a better option would be Electron Store, though for this process, i could have used Local Storage or NeDB
5. You'll need two terminals, one to keep 'npm run watch'(to keep building the app) running, and the other 'npm start' would be to start the electron app
