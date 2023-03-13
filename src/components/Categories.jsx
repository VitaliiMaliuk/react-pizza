import React from "react";

function Categories({ value, onChangeCategory }) {
  const categories = ["All", "Meat", "Vegetarian", "Grill", "Acute", "Closed"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
