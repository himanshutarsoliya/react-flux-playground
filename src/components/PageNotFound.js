import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h2> Oops! Page Not Found </h2>
      <p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </p>
    </div>
  );
}

export default PageNotFound;
