import React, { useState } from "react";

function infoAboutApp({ editItems, items }) {
  const [showInstructions, setShowInstructions] = useState(true);
  // items.map((item) => {
  //   return item.completed;
  // }
  //   );
  //   console.log(showInstructions);

  const hideInstructions = () => {
    setShowInstructions(false);
    //     const id = items.map((item) => {
    //       return item.id;
    //     });
    //     editItems(id);
    //     setShowInstructions(true);
  };

  return (
    <div>
      {showInstructions && (
        <div className="info">
          <h2 style={{ marginBottom: "1rem" }}>Welcome to Grocery Bud App!</h2>
          <p style={{ marginBottom: "2rem", lineHeight: "1.5" }}>
            This app is used for managing your grocery list. Simply type the
            item name in the input field and provide additional information in
            the textarea.
          </p>
          <button
            onClick={hideInstructions}
            className="btn"
            style={{ padding: ".8rem 2rem" }}
          >
            Got it! Let's Add Some Items 🛒
          </button>
        </div>
      )}
    </div>
  );
}

export default infoAboutApp;
