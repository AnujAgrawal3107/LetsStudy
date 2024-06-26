import Head from 'next/head';
import Navbar from '@/components/Navbar';
import NewHero from '@/components/NewHero';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Lets Study</title>
      </Head>

      <Navbar />
      <NewHero />
      <Footer />
    </main>
  );
}
