import { Link } from "react-router-dom";
import styles from "./breadcrumb.module.scss";

// components
import Container from "src/components/container";

// config
import { FiChevronRight } from "react-icons/fi";

const Breadcrumb = () => {
  return (
    <div className={styles.breadcrumb}>
      <Container>
        <ul className={styles.breadcrumb_list}>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <FiChevronRight />
          <li>
            <Link to="/">Bebek Arabası</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Breadcrumb;
