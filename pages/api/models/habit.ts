import { Schema, model, models } from 'mongoose';

const HabitSchema = new Schema({
  habit: String,
  repeatDow: Array,
});

const HabitModel = models.Habit || model('Habit', HabitSchema);

export default HabitModel;
