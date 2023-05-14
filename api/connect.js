// import { Client } from 'postgres';
// import { Client } from 'pg';
import pkg from 'pg';
const { Client } = pkg;
// import {Client} from 'postgresqls';

// export const db = new Client({
//   host: 'localhost',
//   user: 'postgres',
//   password: '1017',
//   database: 'social',
// });


// const {Client} = require('pg')
export const db = new Client({
  host: 'localhost',
  user: 'postgres',
  password: '1017',
  database: 'postgres',

})

db.connect()
  .then(() => {
    console.log('Connected to PostgreSQL database');
    // Start executing your queries or perform other database operations here
  })
  .catch((error) => {
    console.error('Error connecting to PostgreSQL database:', error);
  });


