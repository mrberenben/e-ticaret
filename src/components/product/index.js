import styles from "./product.module.scss";

// icons
import { FiHeart, FiShoppingCart, FiSliders } from "react-icons/fi";

const Product = ({ p }) => {
  const NumberFormat = new Intl.NumberFormat();

  return (
    <li className={styles.product}>
      <div className={styles.product_image}>
        <img src={require("../../images/araba.webp")} alt={p.name} />
      </div>
      <div className={styles.product_info}>
        <h6 className={styles.product_title}>{p.name}</h6>
        <strong className={styles.product_price}>
          {`${NumberFormat.format(p.price)} ${p.currency}`}
        </strong>
      </div>

      <div className={styles.product_actions}>
        <div className={styles.top}>
          <button type="button" title="Sepete Ekle">
            <FiShoppingCart />
          </button>
          <button type="button" title="Favorilere Ekle">
            <FiHeart />
          </button>
          <button type="button" title="Karşılaştır">
            <FiSliders />
          </button>
        </div>
        <div className={styles.bottom}>
          <button type="button">ÜRÜNÜ İNCELE</button>
        </div>
      </div>
    </li>
  );
};

export default Product;
