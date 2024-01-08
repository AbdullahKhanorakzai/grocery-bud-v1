import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function InfoAboutApp() {
  const [showInstructions, setShowInstructions] = useState(true);
  const [userName, setUserName] = useState("");
  const [step, setStep] = useState(1);

  useEffect(() => {
    const isCompleted = localStorage.getItem("infoAboutAppCompleted");
    if (isCompleted) {
      setStep(4);
    }
  }, []);

  const handleProceed = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleGotIt = () => {
    const answer = window.confirm("Abdullah Ko Miss Karthe Ho Na?");

    if (answer) {
      alert("Abdullah be apko so much miss you and love you Beauty");
    } else {
      alert("Haaa ! Atna Ghosa");
    }

    setStep(step + 1);
    localStorage.setItem("infoAboutAppCompleted", "true");
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
            onClick={() => setStep(step + 1)}
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
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "stretch",
              maxWidth: "300px",
              margin: "0 auto",
            }}
            netlify
            onSubmit={handleSubmit}
          >
            <label style={{ marginBottom: "2rem", fontSize: "1.6rem" }}>
              Subscribe to my Email List:
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
                  border: "2px solid transparent ",
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
                  border: "2px solid transparent ",
                }}
              />
            </label>
            <button
              type="submit"
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
                Kia Ap Kase Ko Miss Karthe Ho?
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
                  return toast.warn("Ok Zalam");
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
                toast.success("🙌 Thanks for Subscribing to Our Email List! ");
                localStorage.setItem("infoAboutAppCompleted", "true");
              }}
              className="btn"
              style={{ padding: ".8rem 2rem" }}
            >
              Got it! let Add me Some Item 🛒
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default InfoAboutApp;
