import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="orange" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Good", "Very good", "Excellent"]}
    />
    <StarRating
      maxRating={4}
      size={48}
      color="green"
      className="test"
      defaultRating={2}
    />
    <Test /> */}
  </React.StrictMode>
);
