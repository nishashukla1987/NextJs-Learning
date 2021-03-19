import Head from 'next/head';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nisha page | Home </title>
        <meta name='keywords' contents='nisha content'></meta>
      </Head>

      <div>
        <h1 className={styles.title}>Welcome to NextJs</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis
          placeat odit excepturi vel tenetur distinctio, fuga ut unde. Aliquam
          maxime accusamus amet dignissimos impedit enim sequi dolorum repellat
          officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
          dolores, dolorum distinctio mollitia commodi aliquam saepe perferendis
          illum temporibus similique labore, corrupti, quisquam corporis dolor
          in iste voluptates eos quis!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nobis
          placeat odit excepturi vel tenetur distinctio, fuga ut unde. Aliquam
          maxime accusamus amet dignissimos impedit enim sequi dolorum repellat
          officia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
          dolores, dolorum distinctio mollitia commodi aliquam saepe perferendis
          illum temporibus similique labore, corrupti, quisquam corporis dolor
          in iste voluptates eos quis!
        </p>

        <Link href='/nisha'>
          <a className={styles.btn}>Take to nisha</a>
        </Link>
      </div>
    </>
  );
}
