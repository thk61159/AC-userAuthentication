if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', () => console.log('can not connect to Mongo'));
db.once('open', () => {
  console.log('connect to Mongo');
  mongoose.set('debug', true);
});

module.exports = db;
