const mongoose = require('mongoose');
const { Schema } = mongoose;

const MONGO_URI =
  'mongodb+srv://dbUser1:mTuDvn0VzVogyNzJ@cluster0.irvdv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'pftracker',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const snapshotSchema = new Schema({
  cash: { type: Number },
  ccDebt: { type: Number },
});

module.exports = mongoose.model('Snapshot', snapshotSchema);
