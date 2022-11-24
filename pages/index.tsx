import Nav from 'components/navigation';
import CurrentData from 'components/currentData';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Nav></Nav>
      <main className="p-6">
        <header className="flex flex-col gap-5">
          <CurrentData />
          {/* Todo: 재사용 가능하게, 동일한 날에는 동일한 메시지 */}
          <h1 className="text-2xl font-semibold">
            <pre className="whitespace-pre-line">{MAIN_TEXT[0]}</pre>
          </h1>
        </header>
      </main>
    </div>
  );
}

const MAIN_TEXT = {
  0: '작은 변화는 큰 성장을 \n 가져올 거예요.',
};
