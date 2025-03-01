import Link from 'next/link';
import MenuIcon from './icons/MenuIcon';

//Sitename = name
export default function Header({ name }) {
  return (
    <header>
      <nav>
        <h1><Link href="/" id="site-name">Amelithic</Link></h1>
        <ul>
            <li><Link href="/about">About Me</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contacts">Contacts</Link></li>
            <li><MenuIcon id="menu-icon"/></li>
        </ul>
      </nav>
    </header>
  );
}
