import { useState } from "react";
import { toast } from "react-toastify";

function Form({ addItem }) {
  const [newItemName, setNewItemName] = useState("");
  const [newItemText, setNewItemText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("❌ Error: Please provide a value");
      return;
    }
    addItem(newItemName, newItemText);
    // addItem();
    setNewItemName("");
    setNewItemText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Title"
        />
        <textarea
          cols="30"
          rows="6"
          className="form-input"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Info"
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
}

export default Form;
