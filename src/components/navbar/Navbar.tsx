import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { Button } from '../ui';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navbar}>
        <div className={styles.nav_list}>
          <Link href={'/'}>
            <div className={styles.nav_icon}>
              <FontAwesomeIcon icon={faHouse} />
            </div>
          </Link>
          <ul className={styles.nav_link}>
            <li>
              <Link href={'/resume'}>Resumé</Link>
            </li>
            <li>
              <Link href={'/portfolio'}>Portfolio</Link>
            </li>
            <li>
              <Link href={'/'}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.social_icons}>
          <ul className={styles.social_icons__list}>
            <li>
              <Link href={'/'} target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li>
              <Link href={'/'} target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
            <li>
              <Link href={'/'} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
          </ul>
          <Button title="Hire Me" icon={faPaperPlane} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
