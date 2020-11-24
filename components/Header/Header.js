import S from './Header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={S.header}>
      <nav className={S.navbar}>
        <p className={S.logo}>
          <Link href="/">
            <a>NEATHER</a>
          </Link>
        </p>
      </nav>
    </header>
  );
}
