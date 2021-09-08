import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Link href="/studio">
          <a>Go to Studio!</a>
        </Link>
      </main>
    </>
  );
};

export default Home;
