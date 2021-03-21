import React from 'react';
import styles from '../../styles/Nisha.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { nisha: data },
  };
};

function index({ nisha }) {
  return (
    <div>
      <h1>List of Users</h1>
      {nisha.map((n) => (
        <Link href={'/nisha/' + n.id} key={n.id}>
          <a className={styles.single}>
            <h3>{n.name}</h3>
            <h2>{n.website}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default index;
