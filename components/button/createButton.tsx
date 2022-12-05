import Plus from 'components/svgs/plus.svg';

type Text = '습관 생성하기' | '습관 추가하기' | '회고 추가하기';
type Props = {
  text?: Text;
  onClick?: () => void;
};

const CreateButton = ({ text = '습관 생성하기', onClick }: Props) => {
  return (
    <button
      className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-main-blue text-white"
      onClick={onClick}
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-main-black-40">
        <Plus width="15px" height="15px" fill="#FFFFFF" />
      </div>
      <p>{text}</p>
    </button>
  );
};

export default CreateButton;
