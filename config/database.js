require("dotenv").config()
mongoose  =require('mongoose');
const dbConnect = async () => {
    try {
      const connnection = await mongoose.connect(process.env.CONNECTION_URI,{useNewUrlParser : true, useUnifiedTopology:true})
      .catch(e => {
        console.log("error :",e)
      });
  
    } catch (error) {
      console.error(`Error: ${error.message}`)
      process.exit(1)
    }
  }
module.exports = dbConnect;
