import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategories, filterProducts } from "../redux/actions/ProductActions";

function Category() {
  const [isActive, setIsActive] = useState("all");
  const categories = useSelector((state) => state.allProducts.categories);
  const products = useSelector((state) => state.allProducts.product);
  const dispatch = useDispatch();
  const fetchCategories = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products/categories")
      .catch((e) => console.log("Error: ", e.message));
    dispatch(setCategories(response.data));
  };

  const handleFilterProducts = (category) => {
    if (category === "all") {
      dispatch(filterProducts(products));
      setIsActive("all");
    } else {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      dispatch(filterProducts(filteredProducts));
      setIsActive(category);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div style={{ padding: "30px 40px" }}>
      <h1 className="text-center">Latest products</h1>
      <hr />
      <div className="text-center" style={{ padding: "10px 0px" }}>
        {categories.length > 0 ? (
          <>
            <button
              class={
                isActive === "all"
                  ? "ui primary button"
                  : "ui primary basic button"
              }
              style={{ margin: "0px 10px" }}
              onClick={() => handleFilterProducts("all")}
            >
              All
            </button>
            {categories.map((category, index) => (
              <button
                key={index}
                class={
                  isActive === category
                    ? "ui primary button"
                    : "ui primary basic button"
                }
                style={{ margin: "0px 10px", textTransform: "capitalize" }}
                onClick={() => handleFilterProducts(category)}
              >
                {category}
              </button>
            ))}
          </>
        ) : (
          <div class="ui active centered inline loader"></div>
        )}
      </div>
    </div>
  );
}

export default Category;
