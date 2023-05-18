import mysql from "mysql"
export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"aryan",
  database:"socialblog"
});
// db.connect(funtion(err){
//   if(err)
//     {
//   console.log(err)
//   }else{
//   console.log("connected")
//   }
// })
  // .then(() => {
  //   console.log('Connected to PostgreSQL database');
  //   // Start executing your queries or perform other database operations here
  // })
  // .catch((error) => {
  //   console.error('Error connecting to PostgreSQL database:', error);
  // })