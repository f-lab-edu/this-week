/**Todo: 각 아이콘도 다이나믹 임포트 하도록 */
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

import dynamic from 'next/dynamic';
const FontAwesomeIcon = dynamic(
  async () => (await import('@fortawesome/react-fontawesome')).FontAwesomeIcon,
);

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
type Props = {
  icon: Icon;
  size?: Size;
  color?: Color;
};

const Icon = ({ icon, size = '25px', color = '#808080' }: Props) => {
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
