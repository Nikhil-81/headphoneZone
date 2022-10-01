import logo from './logo.svg';
import './App.css';
import Home from './homepage/Home';
import NavBar from './navbar/Nav';
import Products from "./products/Products"
import AllRoutes from './routes/all_routes';
import Footer from './footer/footer';
import Contextprovider from './context/context';
function App() {
  return (
    <div className="App">
      <Contextprovider>

      <NavBar/>
      <AllRoutes/>
      <Footer/>
      </Contextprovider>
     

    </div>
  );
}

export default App;
