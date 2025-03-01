import Link from 'next/link';
import styles from './SocialLinks.module.css';
import GithubIcon from './icons/GithubIcon';
import BehanceIcon from './icons/BehanceIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import OtherIcon from './icons/OtherIcon';

//Sitename = name
export default function SocialLinks({ name }) {
    return (
        <div id={styles.socialLinks}>
            <ul>
                <li><Link href="https://github.com/Amelithic" title="GitHub"><GithubIcon className={styles.socialIcons} /></Link></li>
                <li><Link href="https://www.behance.net/amelithic" title="Behance"><BehanceIcon className={styles.socialIcons} /></Link></li>
                <li><Link href="https://www.linkedin.com/in/amélie-mccarthy" title="LinkedIn"><LinkedinIcon className={styles.socialIcons} /></Link></li>
                <li><Link href="/contacts" title="Other"><OtherIcon className={styles.socialIcons} /></Link></li>
            </ul>
        </div>
    );
}


