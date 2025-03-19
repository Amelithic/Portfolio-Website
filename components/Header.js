import Link from 'next/link';
import MenuIcon from './icons/MenuIcon';
import LogoFull from './icons/LogoFull';
import styles from './Header.module.css';



//Sitename = name
export default function Header({ name }) {
  return (
    <header>
      <nav>
        <Link href="/" id="site-name"><LogoFull id="site-name" /></Link>
        <ul>
          <li><Link href="/about">About Me</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contacts">Contacts</Link></li>
          <li className={styles.dropdown}>
            <button className={styles.dropbtn}><MenuIcon id={styles.menuIcon} /></button>
            <div className={styles.dropdownContent}>
              <Link href="/about">About Me</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contacts">Contacts</Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
