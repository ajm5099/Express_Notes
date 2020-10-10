
![License: MIT ](https://img.shields.io/badge/License-MIT-yellow.svg)
# Express Notes

## Authors: 
Alex Milroy  

## Table of contents:
* [Files](#Files)
* [Description](#Description)
* [Installation](#Installation)
* [Uses](#Uses)
* [License](#License)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [Contact](#Contact)

## Files
* server.js
* package.json
* package-lock.json
* notes.html
* index.html
* db.json

### Public / Assets
* style.css
* index.js

## Description
The express note taking app uses an express server to create, save, retrieve, and delete notes to and from an express server. The user can easily enter information into the app, including a note title and note text, and save that note to a JSON file using express. They can then retrieve that note in the interface by selecting it on the panel to the left to view it. They can delete the note if they wish, which will remove its entry from the database. Because a json file is being used to store the data, the notes input are persistent until the user deletes them.

## Installation
To install the application locally, the user must first install all NPM dependencies. Begin by opening a new terminal window, and typing “npm init” and hitting enter. They then need to install the required dependencies. First, install express, by typing “npm I express” into the terminal and hitting enter. Then, install fs, by typing “npm I fs” into the terminal and hitting enter. Finally, install nodemon by typing “npm I nodemon” into the terminal and hitting enter. 

## Uses
Once all dependencies are installed, type “nodemon server.js” into the terminal. Open a browser window, and type “localhost:3000” into the navigation bar. Click “get started” on the page to get to the note taking page. On the right, you can create a new note by entering a title, and note text, and save the note by clicking the save icon in the top right corner. Retrieve existing notes by clicking on that note in the left hand side. Delete a note by clicking the trash can next to the note you wish to delete.

A video of the application can be found here: https://drive.google.com/file/d/1sdIsqHSWEhtfxSvfzSKkTnswI6EnroSf/view

## License
This application is goverened by the MIT license.

## Contributions
Yes

## Tests
Users can test the app by running the server locally. If they can reach the server, add, save, and delete notes, the app is running correctly.
    
## Contact:
github.com/ajm5099
amilroy@gmail.com

## Images:
![Site Screenshot](images/homepage.png)
![Site Screenshot](images/no_notes.png)
![Site Screenshot](images/notes_saved.png)
![Site Screenshot](images/notes_shown.png)
