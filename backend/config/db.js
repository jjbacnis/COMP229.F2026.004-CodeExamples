let mongoose = require('mongoose');

module.exports = async function() {
  try {
    await mongoose.connect("mongodb+srv://<user-name>:<password>@<cluster-uri>/<database-name>?appName=Cluster004");
    console.log("You successfully connected to MongoDB!");
    return mongoose;
  } catch (err) {
    console.dir(err);
  }
}