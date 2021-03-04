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
  date: { type: Date, required: true },
  checkings: { type: Number, default: 0 },
  savings: { type: Number, default: 0 },
  brokerage: { type: Number, default: 0 },
  ra401k: { type: Number, default: 0 },
  rothIRA: { type: Number, default: 0 },
  ccDebt: { type: Number, default: 0 },
  homeMortgage: { type: Number, default: 0 },
  carLoans: { type: Number, default: 0 },
  studentLoans: { type: Number, default: 0 },
  totalAssets: { type: Number },
  totalLiabilities: { type: Number },
  netWorth: { type: Number },
});

module.exports = mongoose.model('Snapshot', snapshotSchema);
