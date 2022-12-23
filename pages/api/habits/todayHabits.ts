import Habit from 'pages/api/models/habit';
import TodayHabits from 'pages/api/models/todayHabits';
import createHandler from 'pages/api/middleware';

const cron = require('node-cron');

const app = createHandler();

app.get(async (_, res) => {
  const basicHabits = await Habit.find();
  basicHabits.forEach(async (habit) => {
    const dailyHabit = new TodayHabits({
      habit: habit.habit,
      date: new Date(),
    });
    await dailyHabit.save();
    console.log(res);
    return res.status(200).json({ dailyHabit });
  });
});

cron.schedule('* * * * * *', app.get);

export default app;
