mongoose  =require('mongoose');
console.log(process.env.ATLAS_URI,"connection")
const dbConnect = async () => {
    try {
      const connnection = await mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser : true, useUnifiedTopology:true})
      .catch(e => {
        console.log("error :",e)
      });
  
      console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
      console.error(`Error: ${error.message}`.red.underline.bold)
      process.exit(1)
    }
  }
module.exports = dbConnect;
