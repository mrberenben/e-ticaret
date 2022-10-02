import { Link } from "react-router-dom";
import styles from "./header.module.scss";

// components
import Container from "src/components/container";

// config
import { SOCIAL } from "src/config/social.config";
import { FiMenu, FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
const LOGO_SRC = require("../../images/logo.webp");

const Header = () => {
  return (
    <header className="header">
      <div className={styles.header_top}>
        <Container>
          <div className={styles.header_top_inner}>
            <ul className={styles.social_media}>
              {SOCIAL.map((item, index) => (
                <li key={index} title={item.title}>
                  {item.icon}
                </li>
              ))}
            </ul>
            <div className={styles.header_top_inner_right}>
              <Link to="#">Yardım</Link>
              <Link to="#">Blog</Link>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.header_main}>
        <Container>
          <div className={styles.header_main_inner}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={LOGO_SRC} alt="Akilli Ticaret" />
              </Link>
            </div>
            <div className={styles.search}>
              <input type="text" placeholder="Ne Aramıştınız..." />
              <button type="button">
                <FiSearch />
              </button>
            </div>
            <div className={styles.auth}>
              <button type="button" className={styles.cta}>
                <span className={styles.cta_icon}>
                  <FiUser />
                </span>
                <div className={styles.cta_text}>
                  <span>Giriş Yap</span>
                  <small>veya üye ol</small>
                </div>
              </button>

              <button type="button" className={styles.cta}>
                <span className={styles.cta_icon}>
                  <FiShoppingBag />
                </span>
                <div className={styles.cta_text}>
                  <span>Sepet</span>
                  <b>0,00 TL</b>
                </div>
              </button>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.header_bottom}>
        <Container>
          <div className={styles.search}>
            <input type="text" placeholder="Ne Aramıştınız..." />
            <button type="button">
              <FiSearch />
            </button>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
