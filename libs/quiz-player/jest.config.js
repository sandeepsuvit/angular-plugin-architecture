module.exports = {
  name: 'quiz-player',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/quiz-player',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
