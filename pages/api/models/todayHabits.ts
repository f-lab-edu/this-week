import { Schema, model, models } from 'mongoose';

const TodayHabitsSchema = new Schema({
  habits: Array,
});

const TodayHabitsModel =
  models.TodayHabits || model('TodaysHabit', TodayHabitsSchema);

export default TodayHabitsModel;
