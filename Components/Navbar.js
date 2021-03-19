import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <Image src='/nisha.jpg' height={77} width={128} />
      </div>

      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/contact'>
        <a>Contact</a>
      </Link>
    </nav>
  );
}

export default Navbar;
