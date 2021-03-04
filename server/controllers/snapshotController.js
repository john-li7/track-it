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
    // console.log('res.locals.snapshots old ', res.locals.snapshots);
    // console.log(typeof res.locals.snapshots);
    // for (let i = 0; i < res.locals.snapshots.length; i++) {
    //   const newDate = new Date(res.locals.snapshots[i].date).toDateString();
    //   res.locals.snapshots[i]['newDate'] = newDate;
    //   // console.log('old date', doc.date);
    //   // const newDate = new Date(doc.date).toDateString();
    //   // doc.newDate = newDate;
    //   console.log('newDate: ', newDate);
    // }
    // console.log('res.locals.snapshots new ', res.locals.snapshots);
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

  const totalAssets =
    Number(checkings) +
    Number(savings) +
    Number(brokerage) +
    Number(ra401k) +
    Number(rothIRA);
  const totalLiabilities =
    Number(ccDebt) +
    Number(homeMortgage) +
    Number(carLoans) +
    Number(studentLoans);
  const netWorth = totalAssets - totalLiabilities;

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
      totalAssets: totalAssets,
      totalLiabilities: totalLiabilities,
      netWorth: netWorth,
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
