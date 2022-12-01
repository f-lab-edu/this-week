import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faUser,
  faEllipsis,
  faBullseye,
  faBoxOpen,
  faChartPie,
  faSquareCheck,
  faKey,
} from '@fortawesome/free-solid-svg-icons';

type Icon =
  | 'faBars'
  | 'faUser'
  | 'faEllipsis'
  | 'faBullseye'
  | 'faBoxOpen'
  | 'faChartPie'
  | 'faSquareCheck'
  | 'faKey';
type Size = '10px' | '15px' | '20px' | '25px';

const Icon = (props: { icon: Icon; size?: Size }) => {
  const { icon, size = '25px' } = props;

  return (
    <button className="flex items-center justify-center">
      <FontAwesomeIcon
        icon={FAICONS[icon]}
        style={{ color: '#808080', height: size, width: size }}
      />
    </button>
  );
};

export default Icon;

const FAICONS = {
  faBars,
  faUser,
  faEllipsis,
  faBullseye,
  faBoxOpen,
  faChartPie,
  faSquareCheck,
  faKey,
};
