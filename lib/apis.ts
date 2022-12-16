import axios from 'axios';

export const getHabits = () => axios.get('/api/habits');
export const createHabit = async (newHabit: { habit: string }) =>
  await axios.post('/api/habits', newHabit);
export const deleteHabit = async (id: { id: string }) =>
  await axios.post('/api/habits', id);
