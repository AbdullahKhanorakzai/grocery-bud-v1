import { useState } from "react";
function SingleItem({ item, removeItem, editItems }) {
  // const [isChecked, setIsChecked] = useState(item.completed);
  return (
    <div className="item">
      <div className="checkbox-item">
        <input
          className="checkbox"
          type="checkbox"
          value={item.completed}
          onChange={() => editItems(item.id)}
        />
      </div>
      <div className="single-item">
        <p
          style={{
            textTransform: "capitalize",
            textDecoration: item.completed && "line-through",
            fontWeight: "500",
          }}
        >
          {item.name}
        </p>

        <p
          style={{
            textDecoration: item.completed && "line-through",
            fontWeight: "400",
            lineHeight: "1.5",
          }}
        >
          {item.text}
        </p>
        <button
          className="btn remove-btn"
          type="button"
          onClick={() => removeItem(item.id)}
        >
          delete
        </button>
      </div>
    </div>
  );
}

export default SingleItem;
