import SingleItem from "./SingleItem";

function Items({ items, removeItem, editItems }) {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItems={editItems}
          />
        );
      })}
    </div>
  );
}

export default Items;
