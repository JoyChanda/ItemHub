import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="p-4 flex gap-4 border-b">
      <Link href="/">Home</Link>
      <Link href="/items">Items</Link>
      <Link href="/login">Login</Link>
    </nav>
  );
}
