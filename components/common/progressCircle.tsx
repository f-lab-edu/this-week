import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type ProgressCircleProps = {
  percentage: number;
  pathColor?: 'red' | 'green';
};

const ProgressCircle = ({
  percentage,
  pathColor = 'green',
}: ProgressCircleProps) => {
  return (
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      background={true}
      styles={buildStyles({
        pathColor: pathColor === 'green' ? '#C2DC69' : '#D70040',
        textColor: 'black',
        trailColor: 'white',
        backgroundColor: 'white',
      })}
    />
  );
};

export default ProgressCircle;
