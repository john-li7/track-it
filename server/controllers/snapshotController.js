const Snapshot = require('../models/snapshotModel');

const snapshotController = {};

snapshotController.getAllSnapshots = (req, res, next) => {
  // console.log('getAllSnapshots fired');
  Snapshot.find({}, '-_id', (err, snapshots) => {
    if (err)
      return next(
        'Error in snapshotController.getAllSnapshots: ',
        JSON.stringify(err)
      );
    // console.log('snapshots:', snapshots);
    res.locals.snapshots = snapshots;
    // res.locals.snapshots.forEach((doc) => {
    //   // console.log('old date', doc.date);
    //   const newDate = new Date(doc.date).toDateString();
    //   console.log('new date', newDate);
    // });
    return next();
  });
};

snapshotController.createSnapshot = (req, res, next) => {
  // console.log('createSnapshot fired');
  // console.log('req.body:', req.body);
  const {
    date,
    checkings,
    savings,
    brokerage,
    ra401k,
    rothIRA,
    ccDebt,
    homeMortgage,
    carLoans,
    studentLoans,
  } = req.body;
  Snapshot.create(
    {
      date: date,
      checkings: checkings,
      savings: savings,
      brokerage: brokerage,
      ra401k: ra401k,
      ccDebt: ccDebt,
      homeMortgage: homeMortgage,
      carLoans: carLoans,
      studentLoans: studentLoans,
    },
    (err, snapshot) => {
      if (err) {
        next(
          'Error in snapshotController.createSnapshot: ',
          JSON.stringify(err)
        );
      }
      return next();
    }
  );
};

module.exports = snapshotController;
