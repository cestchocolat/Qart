import Link from "next/link";

export function BlogNavigation() {
  return (
    <header className="journal-header">
      <div className="blog-shell journal-header-inner">
        <Link className="journal-brand" href="/" aria-label="QART home">
          QART
        </Link>
        <nav className="journal-nav" aria-label="Blog navigation">
          <Link href="/">Home</Link>
          <Link className="active" href="/blog">Qart Journal</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link className="journal-header-cta" href="/#consultation">
          Enquire
        </Link>
      </div>
    </header>
  );
}
