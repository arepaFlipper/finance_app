# Finance App

The purpose of this repository is to apply the following libraries and frameworks like:
- React
- Redux
- Typescript
- Material UI
- Node.js
- Express
- MongoDB
- Mongoose
- Vite
- Tailwind
- Recharts

`npm i react-redux @reduxjs/toolkit react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid`

`npm i -D @types/react-dom eslint eslint-config-react-app @types/node`

`npm i express body-parser cors dotenv helmet morgan mongoose mongoose-currency`

`npm i -D nodemon`

`cd ./server && docker-compose build`
`docker-compose up`

Once docker-compose is initialized, connect to database by running:
`docker exec -it fin_mongo mongosh "mongodb://mongo/test"`

To show the databases available:
`test> show dbs;`

To connect to finance database:
`test> use finance;`

To confirm the current database:
`finance> db;`

To show the collections in current database:
`finance> show collections;`

To show the documents in kpis collection:
`finance> db.kpis.findOne();`

To connect to mongo into finance database directly:
`docker exec -it fin_mongo mongosh "mongodb://mongo/finance"`

To confirm the current database:
`finance> db;`

To show the collections in current database:
`finance> show collections;`

To show the documents in 'kpis' collection:
`finance> db.kpis.findOne();`

`finance> const dailyData = db.kpis.findOne().dailyData;`

`finance> dailyData.length;`
