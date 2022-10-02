import { useCallback, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./categories.module.scss";

// components
import Container from "src/components/container";

// hooks
import useAxios from "src/hooks/useAxios";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Categories = () => {
  const axios = useAxios();
  const SubCategoryRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [mobileCategories, setMobileCategories] = useState(false);
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  const getCategories = useCallback(async () => {
    try {
      const response = await axios.get("/Product/ListCategories");
      setCategories(response.data.data);
    } catch (err) {
      console.error(err);
    }
  }, [axios]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  useEffect(() => {
    if (mobileCategories) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [mobileCategories]);

  return (
    <div className={styles.categories}>
      <Container>
        <ul className={styles.categories_list}>
          {categories.length > 0 &&
            categories.map(item => (
              <li id={item.id} key={item.id}>
                <Link to="/">{item.categoryName}</Link>

                {item.subCategoryList?.length > 0 && (
                  <div className={styles.sub_categories}>
                    <Container>
                      <h6>{item.categoryName}</h6>
                      <ul className={styles.sub_categories_list}>
                        {item.subCategoryList.map(subItem => (
                          <li key={subItem.id}>{subItem.categoryName}</li>
                        ))}
                      </ul>
                    </Container>
                  </div>
                )}
              </li>
            ))}
        </ul>

        <div className={styles.categories_list_mobile}>
          <button
            type="button"
            onClick={() => setMobileCategories(prev => !prev)}
          >
            {mobileCategories ? <FiX /> : <FiMenu />}
            <span>Kategoriler</span>
          </button>

          <div
            className={`${styles.categories_mobile} ${
              mobileCategories ? styles.categories_mobile__active : undefined
            }`}
          >
            <ul className={styles.categories_mobile_list}>
              {categories.length > 0 &&
                categories.map(item => (
                  <li id={item.id} key={item.id}>
                    <div
                      className={styles.category}
                      onClick={() =>
                        setActiveSubCategory(prev =>
                          prev === item.id ? null : item.id
                        )
                      }
                    >
                      <div>{item.categoryName}</div>
                      <FiChevronDown />
                    </div>

                    {item.subCategoryList?.length > 0 && (
                      <div
                        ref={SubCategoryRef}
                        className={`${styles.sub_categories_mobile} ${
                          activeSubCategory === item.id
                            ? styles.active
                            : undefined
                        }`}
                      >
                        <ul className={styles.sub_categories_list}>
                          {item.subCategoryList.map(subItem => (
                            <li key={subItem.id}>{subItem.categoryName}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Categories;
