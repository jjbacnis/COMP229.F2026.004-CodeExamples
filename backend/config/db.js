let mongoose = require('mongoose');

module.exports = async function() {
  try {
    await mongoose.connect("mongodb+srv://app_db_user:1fQkksTbTaXWC1xY@cluster004.mauh89m.mongodb.net/portfolio?appName=Cluster004");
    console.log("You successfully connected to MongoDB!");
    return mongoose;
  } catch (err) {
    console.dir(err);
  }
}