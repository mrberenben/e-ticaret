import { useCallback, useEffect, useState } from "react";
import styles from "src/styles/pages/home.module.scss";

// components
import Container from "src/components/container";

// hooks
import useAxios from "src/hooks/useAxios";
import Product from "src/components/product";
import { FiGrid, FiList } from "react-icons/fi";

const Home = () => {
  const axios = useAxios();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({
    last: true,
    price: "asc",
    category: "all"
  });

  const getProducts = useCallback(async () => {
    try {
      const response = await axios.get("/Product/ListProducts/0");

      if (response.data.status && response.data.data) {
        setProducts(
          response.data.data.filter(item => item.id !== 2206).slice(0, 20)
        );
      }
    } catch (err) {
      console.error(err);
    }
  }, [axios]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const filteredProducts = () => {
    const productsCopy =
      filter.category === "inStock"
        ? products.filter(item => item.stock > 0)
        : products;
    if (filter.last) {
      return productsCopy.sort((a, b) => {
        return a.id - b.id;
      });
    } else {
      return productsCopy.sort((a, b) => {
        if (filter.price === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }
  };

  const handleFilter = e => {
    const { value } = e.target;

    if (value === "all" || value === "inStock") {
      setFilter({
        ...filter,
        category: value
      });
    } else if (value === "asc") {
      setFilter({
        last: false,
        price: "asc"
      });
    } else if (value === "desc") {
      setFilter({
        last: false,
        price: "desc"
      });
    } else {
      setFilter(prev => ({
        ...prev,
        last: true
      }));
    }
  };

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.column}>
          <header className={styles.page_header}>
            <h1 className={styles.page_title}>
              <strong>Bebek Arabası</strong> kategorisi içeriğindeki ürünler
              listeleniyor.
            </h1>
            <div className={styles.sort_products}>
              <div className={styles.sort_products_filter}>
                <select name="sort" id="sort" onChange={handleFilter}>
                  <option value="last">En son eklenene göre</option>
                  <option value="asc">Ucuzdan pahalıya</option>
                  <option value="desc">Pahalıdan ucuza</option>
                </select>

                <select name="filter" id="filter" onChange={handleFilter}>
                  <option value="all">Tüm ürünler</option>
                  <option value="inStock">Stoktaki ürünler</option>
                </select>
              </div>
              <div className={styles.sort_products_appearance}>
                <button type="button" className={styles.active}>
                  <FiGrid />
                </button>
                <button type="button">
                  <FiList />
                </button>
              </div>
            </div>
          </header>
          <ul className={styles.products}>
            {products.length > 0 && page === 1
              ? filteredProducts()
                  .slice(0, 10)
                  .map(p => <Product key={p.id} p={p} />)
              : filteredProducts()
                  .slice(10, 20)
                  .map(p => <Product key={p.id} p={p} />)}
          </ul>
          <div className={styles.pagination}>
            <button
              type="button"
              onClick={() => setPage(1)}
              className={page === 1 ? styles.active : undefined}
            >
              1
            </button>
            <button
              type="button"
              onClick={() => setPage(2)}
              className={page === 2 ? styles.active : undefined}
            >
              2
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
