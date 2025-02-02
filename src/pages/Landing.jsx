import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div
        className="min-vh-100 d-flex justify-content-center align-items-center text-white text-center"
        style={{
          background: "linear-gradient(black,grey,yellow)",
          fontFamily: "monospace",
        }}
      >
        <div className="center p-4" style={{ maxWidth: "500px" }}>
          <h1 className="display-3 fw-bold mb-3">Welcome to Cook Book</h1>
          <p className="fs-4 mb-4" style={{ lineHeight: "1.6" }}>
          The first recipe for happiness is: avoid too lengthy meditation on the past.
          </p>
          <Link
            className="btn btn-light text-warning fw-bold"
            to={"/home"}
            style={{
              padding: "10px 20px",
              transition: "transform 0.2s ease",
              borderRadius: "5px",
            }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          >
            Explore Recipes
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landing;