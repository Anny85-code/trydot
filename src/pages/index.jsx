import Head from 'next/head';
import Layout from '../components/layout/Layout';
import LandingPage from '../components/landingPage/LandingPage';


export function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Home Page</title>
        </Head>
        <div >
        <LandingPage />
        </div>
      </Layout>
    </>
  );
}

export default Home;
