// app/canceled/index.jsx
// for the cancelled page
import Link from "next/link";

function Canceled() {
  return (
    <div>
      <p>The transaction was canceled.</p>
      <Link href="/products">
        <a>Back to the products page</a>
      </Link>
    </div>
  );
}

export default Canceled;
