import React from "react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductPage() {
  return (
    <>
      <h2>Product Page</h2>
      <ul>
        {PRODUCTS.map((produ) => (
          <li key={produ.id}>
            {" "}
            <Link to={produ.id}>{produ.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductPage;
