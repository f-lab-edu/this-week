import axiosInstance from 'lib/axiosInstance';

export const getHabits = () => axiosInstance.get('/api/habits');
export const createHabit = async (newHabit: { habit: string }) =>
  await axiosInstance.post('/api/habits', newHabit);
export const deleteHabit = async (id: { id: string }) => {
  return await axiosInstance.delete('/api/habits', { data: id });
};
export const updateHabit = async (config: { id: string; habit: string }) => {
  return await axiosInstance.put('/api/habits', { data: config });
};
