import Icon from 'components/icon/icon';

type Text = '습관 생성하기' | '습관 추가하기';

const CreateButton = (props: { text?: Text; handleClick(): void }) => {
  const { text = '습관 생성하기', handleClick } = props;

  return (
    <button
      className="flex h-14 w-full items-center justify-center gap-2 rounded-lg bg-main-blue text-white"
      onClick={handleClick}
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-main-black-40">
        <Icon icon="faPlus" color="#FFFFFF" size="15px" />
      </div>
      <p>{text}</p>
    </button>
  );
};

export default CreateButton;