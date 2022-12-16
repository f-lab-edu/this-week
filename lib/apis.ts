import axios from 'axios';

export const getHabits = () => axios.get('/api/habits');
