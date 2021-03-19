import React from 'react';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map((nisha) => {
    return {
      params: { id: nisha.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { nisha: data },
  };
};

function Details({ nisha }) {
  return (
    <div>
      <h1>{nisha.name}</h1>
      <p>{nisha.email}</p>
      <p>{nisha.website}</p>
      <p>{nisha.address.city}</p>
    </div>
  );
}

export default Details;
