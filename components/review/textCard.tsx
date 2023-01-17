type TextCardProps = {
  title: '잘했어요' | '배웠어요' | '부족했어요' | '이렇게 할 거예요';
  content: string;
};

const TextCard = ({ title, content }: TextCardProps) => {
  return (
    <section className="flex flex-col gap-2">
      <p className="text-xl font-semibold">{title}</p>
      <article className="rounded-lg bg-main-beige py-5 px-4">
        <pre>{content}</pre>
      </article>
    </section>
  );
};

export default TextCard;
