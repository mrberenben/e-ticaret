import styles from "./footer.module.scss";

// components
import Container from "../container";

// config
import { SOCIAL } from "src/config/social.config";
import { FiArrowRight } from "react-icons/fi";

const AT_LOGO = require("../../images/logo2.png");

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer_main}>
          <div className={styles.row}>
            <h6>Kurumsal</h6>
            <ul>
              <li>Hakkımızda</li>
              <li>Kampanyalar</li>
              <li>Banka Hesap Numaraları</li>
              <li>Blog</li>
              <li>Haberler</li>
            </ul>
          </div>
          <div className={styles.row}>
            <h6>Müşteri Hizmetleri</h6>
            <ul>
              <li>Sipariş Sorgulama</li>
              <li>Teslimat ve Kargo</li>
              <li>İade ve Değişim</li>
              <li>Üyelik Sözleşmesi</li>
              <li>Gizlilik ve Güvenlik</li>
            </ul>
          </div>
          <div className={styles.row}>
            <h6>Yardım</h6>
            <ul>
              <li>İletişim Bilgileri</li>
              <li>Sıkça Sorulan Sorular</li>
            </ul>
          </div>
          <div className={styles.row}>
            <h6>İletişim</h6>
            <ul>
              <li>
                <strong>Adres:</strong> 1376 Sok. No: 1/43 Boran Plaza,
                Halkapınar, Konak/İzmir
              </li>
              <li>
                <strong>Telefon: </strong> 08505555555
              </li>
            </ul>
          </div>
          <div className={styles.row}>
            <h6>Bizi Takip Edin</h6>
            <ul className={styles.social_media}>
              {SOCIAL.map((item, index) => (
                <li key={index} title={item.title}>
                  {item.icon}
                </li>
              ))}
            </ul>
            <p>E-Bültene abone olun, gelişmeleri kaçırmayın</p>
            <div className={styles.search}>
              <input type="text" placeholder="E-Posta Adresiniz" />
              <button type="button">
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div>Copyright © 2022 Karma - Kırmızı</div>
          <div>
            <img src={AT_LOGO} alt="Akilli Ticaret" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
