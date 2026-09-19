import "./App.css";
import MainBody from "./MainBody";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container-fluid p-0 m-0 App">
      <div className="row p-0 m-0">
        <div className="d-flex flex-column align-items-center vh-100">
          <MainBody />
          <Footer />
        </div>
      </div>
    </div>
  );
}
