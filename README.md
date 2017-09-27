# CoRES
---

## Prerequisite
* [Node.js](https://nodejs.org/en/) installed.
* [MongoDB](https://www.mongodb.com/) installed.

## Installation
* Clone or download this repository.
```
git clone https://github.com/jovanidash21/cores.git
```
* Using a terminal or cmd, navigate to the project directory.
* Install node modules.
```
npm install
```
* Start the MongoDB Server.
```
mongod
``` 
* Open another terminal or cmd and run mongo.
```
mongo
``` 
* Create a database locally using MongoDB on your computer.
```
use cores
``` 
* Insert to the database the JSON files inside the data folder of this project.
* Create a ```.env``` file. 
* Copy and paste the texts in ```.env.example``` to ```.env``` and insert the values for each environment variables.
* Open another terminal or cmd and run the project.
```
npm run build
```
* Open a browser and visit ```localhost:3000```.
* Login with this credentials. Username: ```admin```. Password: ```admin```.
* Run in dev mode.
```
npm run dev
```

## NPM Scripts
* ```npm start``` - start the server.
* ```npm run build``` - run the project in production mode.
* ```npm run dev``` - run the project in dev mode.
* ```npm run webpack:prod``` - run the webpack in production mode.
* ```npm run webpack:dev``` - run the webpack in dev mode.
* ```npm run node:prod``` - run the node server in production mode.
* ```npm run node:dev``` - run the node server in dev mode.

## Credits
- [Viewer Skel Theme](https://html5up.net/uploads/demos/escape-velocity/)
- [Admin Bootstrap Theme](https://github.com/tui2tone/flat-admin-bootstrap-templates)

## Website
[Live Demo](https://cores-jovanidash21.herokuapp.com/)

## License
Licensed under [MIT](https://opensource.org/licenses/mit-license.php).