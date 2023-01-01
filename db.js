const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

module.exports = async () => {
    const connectionParms = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try{
        await mongoose.connect(process.env.DB, connectionParms)
        console.log('Database connected successfully')
    }catch(err){
        console.log("could not connect to database")
    }
}