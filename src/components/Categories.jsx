import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(2);

  const categories = ["All", "Meat", "Vegetarian", "Grill", "Acute", "Closed"];

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => setActiveIndex(i)}
            className={activeIndex === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
