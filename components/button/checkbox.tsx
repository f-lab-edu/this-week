import MyCheckbox from '@mui/joy/Checkbox';

type CheckboxProps = {
  checked: boolean;
  onClick: () => void;
};

// ToDo: 직접 만들기
const Checkbox = ({ checked, onClick }: CheckboxProps) => {
  return (
    <MyCheckbox
      size="lg"
      checked={checked}
      onClick={onClick}
      sx={{
        backgroundColor: '#D341571A',
        borderRadius: '50%',
        color: 'transparent',
        '&.Joy-checked': {
          color: '#AAAAAA',
        },
      }}
    />
  );
};

export default Checkbox;
