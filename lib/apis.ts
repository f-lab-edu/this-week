import axios from 'axios';

export const getHabits = () => axios.get('/api/habits');
export const createHabit = async (newHabit: { habit: string }) =>
  await axios.post('/api/habits', newHabit);
export const deleteHabit = async (id: { id: string }) => {
  return await axios.delete('/api/habits', { data: id });
};
export const updateHabit = async (config: { id: string; habit: string }) => {
  return await axios.put('/api/habits', { data: config });
};
