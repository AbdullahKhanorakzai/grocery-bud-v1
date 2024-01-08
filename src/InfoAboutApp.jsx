import React, { useState } from "react";
import { toast } from "react-toastify";

function InfoAboutApp() {
  const [showInstructions, setShowInstructions] = useState(true);
  const [userName, setUserName] = useState("");
  const [step, setStep] = useState(1);

  const hideInstructions = () => {
    setShowInstructions(true);
  };

  const handleProceed = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleGotIt = () => {
    const answer = window.confirm("Are you missing someone?");

    if (answer) {
      alert("Abdullah so much miss you and love you Beauty");
    } else {
      alert("Haaa ! Atna Ghosa");
    }

    setStep(step + 1);
  };

  return (
    <div>
      {step === 1 && (
        <div className="info">
          <h2 style={{ marginBottom: "1rem" }}>Welcome to Grocery Bud App!</h2>
          <p style={{ marginBottom: "2rem", lineHeight: "1.5" }}>
            This app is used for managing your grocery list. Simply type the
            item name in the input field and provide additional information in
            the textarea.
          </p>
          <button
            onClick={handleProceed}
            className="btn"
            style={{ padding: ".8rem 2rem" }}
          >
            Proceed
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="info">
          <form
            name="contact"
            netlify
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "stretch",
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            <label style={{ marginBottom: "1rem", fontSize: "1.6rem" }}>
              Please enter your Info:
              <input
                type="text"
                name="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter Name"
                style={{
                  padding: ".5rem",
                  margin: "0.5rem 0",
                  width: "100%",
                  borderRadius: "4px",
                  border: "2px solid #22d2ee ",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                style={{
                  padding: ".5rem",
                  margin: "0.5rem 0",
                  width: "100%",
                  borderRadius: "4px",
                  border: "2px solid #22d3ee ",
                }}
              />
            </label>
            <button
              onClick={handleProceed}
              className="btn"
              style={{
                padding: ".8rem 2rem",

                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Proceed
            </button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div className="info">
          {userName.toLowerCase() === "kalsoom" ? (
            <div>
              {toast.success("Hello My Beauty > Welcome 🎉")}

              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  marginBottom: "2rem",
                }}
              >
                Are you missing Abdullah Beauty?
              </p>

              <button
                onClick={() => handleGotIt()}
                className="btn"
                style={{ padding: ".8rem 2rem", marginRight: "2rem" }}
              >
                Yes
              </button>

              <button
                onClick={() => {
                  setStep(step + 1);
                  return alert("Ok Zalam");
                }}
                className="btn"
                style={{ padding: ".8rem 2rem" }}
              >
                No
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setStep(step + 1);
                alert("Thanks for Subscribing Our Services");
              }}
              className="btn"
              style={{ padding: ".8rem 2rem" }}
            >
              Got it!
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default InfoAboutApp;
