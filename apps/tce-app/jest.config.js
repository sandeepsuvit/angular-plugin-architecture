module.exports = {
  name: 'tce-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tce-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
