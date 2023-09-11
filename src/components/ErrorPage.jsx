import { Link } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Oh no, this route doesn&#39;t exist!</h1>
      <Link to="/">Click here to return to the home page</Link>
    </div>
  );
}
