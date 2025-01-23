const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/students_test');

mongoose.connection
  .once('open', () => console.log('we are connected'))
  .on('error', (error) => {
    console.warn('An error occured', error);
  });

beforeEach((done) => {
  mongoose.connection.collections.students.drop();
  done();
});
