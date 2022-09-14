const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://samtran:1234@cluster0.sxikjog.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Workouts'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

const Schema = mongoose.Schema;

const historySchema = new Schema({
    reps: Number,
    weight: Number,
    notes: String,
});

const History = mongoose.model('workoutHistory', historySchema);

module.exports = { History };