const Snapshot = require('../models/snapshotModel');

const snapshotController = {};

snapshotController.getAllSnapshots = (req, res, next) => {
  console.log('getAllSnapshots fired');
  Snapshot.find({}, '-_id cash ccDebt', (err, snapshots) => {
    if (err)
      return next(
        'Error in snapshotController.getAllSnapshots: ',
        JSON.stringify(err)
      );
    console.log('snapshots:', snapshots);
    res.locals.snapshots = snapshots;
    return next();
  });
};

snapshotController.createSnapshot = (req, res, next) => {
  console.log('createSnapshot fired');
  Snapshot.create({ cash: 200, ccDebt: 600 }, (err, snapshot) => {
    if (err) {
      next('Error in snapshotController.createSnapshot: ', JSON.stringify(err));
    }
    return next();
  });
};

module.exports = snapshotController;
