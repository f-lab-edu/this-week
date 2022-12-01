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
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

type Icon =
  | 'faBars'
  | 'faUser'
  | 'faEllipsis'
  | 'faBullseye'
  | 'faBoxOpen'
  | 'faChartPie'
  | 'faSquareCheck'
  | 'faKey'
  | 'faPlus';
type Size = '10px' | '15px' | '20px' | '25px';
type Color = '#FFFFFF' | '#000000' | '#808080';

const Icon = (props: { icon: Icon; size?: Size; color?: Color }) => {
  const { icon, size = '25px', color = '#808080' } = props;

  return (
    <div className="flex items-center justify-center">
      <FontAwesomeIcon
        icon={FAICONS[icon]}
        style={{ color, height: size, width: size }}
      />
    </div>
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
  faPlus,
};
