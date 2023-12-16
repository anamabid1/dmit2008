// app/success/index.jsx
// meant for the success page
import Link from "next/link";

function Success() {
  return (
    <div>
      <p>Payment successful! Thank you for your purchase.</p>
      <Link href="/">
        <a>Back to the store</a>
      </Link>
    </div>
  );
}

export default Success;
