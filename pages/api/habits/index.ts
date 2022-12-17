import Habit from 'pages/api/models/habit';
import createHandler from 'pages/api/middleware';

const app = createHandler();

app.get(async (_, res) => {
  const habits = await Habit.find({});
  return res.status(200).json({ habits });
});

app.post(async (req, res) => {
  try {
    const habit = await Habit.create(req.body);
    res.status(200).json({ habit });
  } catch (err) {
    console.log(err);
  }
});

app.put(async (req, res) => {
  try {
    const body = req.body;
    const id = req.body.data.id;
    const updateHabit = {
      habit: body.data.habit,
    };

    const habit = await Habit.findOneAndUpdate({ _id: id }, updateHabit);
    res.status(200).json({ habit });
  } catch (err) {
    console.log(err);
  }
});

app.delete(async (req, res) => {
  try {
    const id = req.body.id;
    const habit = await Habit.findByIdAndDelete({ _id: id });

    if (!habit) return res.status(404);

    res.status(200).json({ habit });
  } catch (err) {
    console.log(err);
  }
});

export default app;
