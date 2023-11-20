/*Navigation Component*/

/*Ensure your navigation has links to the home page and products page.*/

/*app/layout.js:*/

import Link from 'next/link';

const Navigation = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/products">
      <a>Products</a>
    </Link>
  </nav>
);

export default Navigation;