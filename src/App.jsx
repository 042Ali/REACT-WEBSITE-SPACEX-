import "./App.css";
import CardImage from "./components/CardImage/CardImage";
import Sphere from "./components/SphereCard/Sphere";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="container">
      <h1 className="h1__h1">SPACEX</h1>
      <menu>
        <li>Falcon 9</li>
        <li>Falcon Heavy</li>
        <li>Dragon</li>
        <li>Updates</li>
      </menu>
      <ul>
        <li>About</li>
        <li>Gallery</li>
        <li>Shop</li>
      </ul>
      <Sphere />
      <CardImage />
      <Footer />
    </div>
  );
}
