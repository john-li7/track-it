const Snapshot = require('../models/snapshotModel');

const snapshotController = {};

snapshotController.getAllSnapshots = (req, res, next) => {
  Snapshot.find({}, '-_id', (err, snapshots) => {
    if (err)
      return next(
        'Error in snapshotController.getAllSnapshots: ',
        JSON.stringify(err)
      );
    res.locals.snapshots = snapshots;
    return next();
  });
};

snapshotController.createSnapshot = (req, res, next) => {
  console.log('createSnapshot fired');
  console.log('req.body:', req.body);
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
          // 'Error in snapshotController.createSnapshot: ',
          JSON.stringify(err)
        );
      }
      return next();
    }
  );
};

module.exports = snapshotController;
