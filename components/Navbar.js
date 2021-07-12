import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <h1>Zzin</h1>
        </div>
      </Link>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <Link href="/gallery">
        <a>Art Gallery</a>
      </Link>
    </nav>
  );
};

export default Navbar;
