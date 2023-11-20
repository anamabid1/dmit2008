/*Home Page*/

/*Create a basic home page with navigation links.*/

/*app/page.js:*/

import Link from 'next/link';

const HomePage = () => (
  <div>
    <h1>Welcome to Your Store</h1>
    <nav>
      <Link href="/products">
        <a>Products</a>
      </Link>
    </nav>
  </div>
);

export default HomePage;