import { Schema, model, models } from 'mongoose';

const HabitSchema = new Schema({
  habit: String,
});

const HabitModel = models.Habit || model('Habit', HabitSchema);

export default HabitModel;
