import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekday from 'dayjs/plugin/weekday';
dayjs.extend(weekOfYear);
dayjs.extend(weekday);

export default dayjs;
