import Head from 'next/head';
import Search from '../components/Search/Search';
import Welcome from '../components/Welcome/Welcome';
import Loader from '../components/Loader/Loader';

export default function Home({ isLoading, setIsLoading }) {
  return (
    <div>
      <Head>
        <title>Neather</title>
      </Head>
      <main>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Welcome />
            <Search setIsLoading={setIsLoading} />
          </>
        )}
      </main>
    </div>
  );
}
