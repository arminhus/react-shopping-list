import React from "react";

export default function ShoppingList(props) {
  return (
    <li>
      {props.items.map((item, i) => {
        <ShoppingList key={i} item={item} />;
      })}
    </li>
  );
}

ShoppingList.defaultProps = {
  items: []
};
