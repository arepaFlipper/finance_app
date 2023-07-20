import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
console.log(`🤚%cindex.js:20 - HELLO WORLD`, 'font-weight:bold; background:1504051200;color:#fff;');

// MONGOOSE SETUP
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser: true, useUnifiedTopology: true})
  .then(async ()=> {
    app.listen(PORT, ()=> console.log(`🙄%cindex.js:27 - Server running on port ${PORT}`,'font-weight:bold; background:1821573120;color:#fff;'));
  })
  .catch((error) => console.log(`🥍 error:\n ${error} did not connect`));


