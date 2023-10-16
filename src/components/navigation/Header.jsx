import styles from "./navigation.module.css";
const Header = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/header_logo.png" alt="logo" />
      </div>
      <div className={`${styles.social_links}`}>
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
