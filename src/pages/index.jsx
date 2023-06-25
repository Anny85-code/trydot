import Head from 'next/head';
import Layout from '../components/layout/Layout';


export function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Home Page</title>
        </Head>
        <div >
        this is home page
        </div>
      </Layout>
    </>
  );
}

export default Home;
