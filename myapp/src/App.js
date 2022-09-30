import logo from './logo.svg';
import './App.css';
import Home from './homepage/Home';
import NavBar from './navbar/Nav';
import Products from "./products/Products"
import AllRoutes from './routes/all_routes';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AllRoutes/>
      <Footer/>
     

    </div>
  );
}

export default App;
