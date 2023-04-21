
const mongose = require('mongoose');
const connectDatabase = () =>{
    mongose.connect(`mongodb://localhost:27017`,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log('Database connected');
    });
}
module.exports = connectDatabase;

export default mongose;





/**
* Voici la configuration pour se connecter notre application a mongodb
*/
// const mongoose = require('mongoose')
// const db = mongoose.connect('mongodb://localhost:27017/BestEmployee',{ 
//     useNewUrlParser: true } , (err)=> {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('connected...')
//     }
// })






